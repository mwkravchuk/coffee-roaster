import Home from '../pages/home/Home.jsx';
import About from '../pages/about/About.jsx';

import Admin from '../pages/admin/Dashboard.jsx';
import ProductsPage from '../pages/products/ProductsPage.jsx';
import ProductDetails from '../pages/products/ProductDetails.jsx';

import ProductManagement from '../pages/admin/products/ProductManagement.jsx';
import ProductCreation from '../pages/admin/products/ProductCreation.jsx';
import ProductEdit from '../pages/admin/products/ProductEdit.jsx';
import ProductDelete from '../pages/admin/products/ProductDelete.jsx';

import NotFound from '../pages/404.jsx';
import Account from '../pages/account/Account.jsx';
import Register from '../pages/auth/Register.jsx';
import Login from '../pages/auth/Login.jsx';

import Cart from '../pages/cart/Cart.jsx';
import Checkout from '../pages/cart/Checkout.jsx';
import SuccessPage from '../pages/cart/Success.jsx';

import HomeIcon from '../icons/Home.jsx';
import AdminIcon from '../icons/AdminShield.jsx';
import AccountIcon from '../icons/Account.jsx';
import CartIcon from '../icons/Cart.jsx';

const routes = [
  { path: '/',                     element: <Home />,                              name: "HOME", display: HomeIcon, isMenu: true,                 isPrivate: false, isAdmin: false},
  
  // Home routes
  { path: 'admin',                 element: <Admin />,                                           display: AdminIcon,              isHeader: true, isPrivate: true,  isAdmin: true},
  { path: 'admin/products',        element: <ProductManagement />,                                                                                isPrivate: true,  isAdmin: true},
  { path: 'admin/products/create', element: <ProductCreation />,                                                                                  isPrivate: true,  isAdmin: true},
  { path: 'admin/products/edit',   element: <ProductEdit />,                                                                                      isPrivate: true,  isAdmin: true},
  { path: 'admin/products/delete', element: <ProductDelete />,                                                                                    isPrivate: true,  isAdmin: true},

  // Account routes
  { path: 'account',               element: <Account />,                                         display: AccountIcon},
  { path: 'account/login',         element: <Login />,                                           display: AccountIcon},
  { path: 'account/register',      element: <Register />},

  { path: 'cart',                  element: <Cart />,                                            display: CartIcon,               isHeader: true, isPrivate: false, isAdmin: false},
  { path: 'cart/checkout',         element: <Checkout/>,                                                                                          isPrivate: false, isAdmin: false},
  { path: 'cart/checkout/:orderId',element: <SuccessPage/>},
  { path: 'coffee',                element: <ProductsPage />,                       name: "COFFEE",                  isMenu: true,                isPrivate: false, isAdmin: false},
  { path: 'coffee/:productName',   element: <ProductDetails />},
  { path: 'about',                 element: <About />,                              name: "ABOUT",                   isMenu: true,                isPrivate: false, isAdmin: false},
  { path: '*',                     element: <NotFound />},
];

export default routes;