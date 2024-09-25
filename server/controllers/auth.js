const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = [
  body('email', 'Email is required.').isEmail().normalizeEmail(),
  body('password', 'Password must be at least 6 characters long.').isLength({ min: 6 }).escape(),

  async (req, res) => {
    const errors = validationResult(req);
    // Error in one of the inputs
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Otherwise, proceed with user creation
    const { email, password } = req.body;

    try {
      // Check if user exists already
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists.' });
      }

      // Create user
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user = new User({
        email,
        password: hashedPassword
      });

      // Save to database
      await user.save();

      res.status(201).json({ msg: 'User registered successfully.' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error.');

    }
  },
];

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err); // Handle authentication errors
    if (!user) { // If authentication failed
      return res.status(401).json({ message: 'Login failed' });
    }
    // Log the user in
    req.logIn(user, async (err) => {
      if (err) return next(err);
      // Generate JWT
     const token = await generateJWT(user);
     return res.json({ token });
    });
  })(req, res, next);
};

async function generateJWT(user) {
  // Generate JWT with necessary payload (e.g., user ID, isAdmin flag, etc.)
  const payload = {
    userId: user._id,
    isAdmin: user.isAdmin,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
}

exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};