import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from '../../../../axiosConfig';

const SuccessPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`/orders/${orderId}`);
        setOrder(response.data);
      } catch (err) {
        console.error('Error fetching order details:', err);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (!order) {
    return <p>Loading order details...</p>;
  }

  return (
    <div>
      <h1>Thanks for your purchase</h1>
      <h2>Order #{order.orderId}</h2>
      <div>
        <h3>Items:</h3>
        {order.items.map((item) => {
          <div key={item.productId}>
            <p>{item.name} x {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </div>
        })}
      </div>
      <p>Order Total: ${order.totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default SuccessPage;