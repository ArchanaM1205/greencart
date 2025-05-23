import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { dummyOrders } from '../assets/assets';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency } = useAppContext();

  const fetchMyOrders = async () => {
    setMyOrders(dummyOrders);
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  return (
    <div className="mt-16 pb-16 px-6 md:px-16 bg-white min-h-screen">
      <div className="flex flex-col items-start mb-10">
        <h2 className="text-4xl font-bold text-black">
          My <span className="text-primary">Orders</span>
        </h2>
        <div className="w-24 h-1 mt-2 bg-primary rounded-full"></div>
      </div>

      {myOrders.length === 0 ? (
        <p className="text-gray-600 text-lg">You have no orders yet.</p>
      ) : (
        myOrders.map((order) => (
          <div
            key={order._id}
            className="mb-12 p-6 border border-primary rounded-lg shadow-md bg-white"
          >
            <div className="grid grid-cols-12 gap-6 items-start">
              {/* Column 1: Order ID + Product */}
              <div className="col-span-4">
                <p className="text-black text-lg font-semibold mb-4">
                  Order ID: <span className="font-normal">{order._id}</span>
                </p>
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 mb-4">
                    <img
                      src={item.product.image[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover border-2 border-primary rounded"
                    />
                    <div>
                      <p className="text-black font-medium">{item.product.name}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2: Payment + Quantity, Status, Date */}
              <div className="col-span-4 flex flex-col items-center">
                <p className="text-primary text-lg font-semibold mb-4">
                  Payment: <span className="text-black font-normal">{order.paymentType}</span>
                </p>
                {order.items.map((item, idx) => (
                  <div key={idx} className="text-center mb-4 text-black space-y-1">
                    <p>Quantity: {item.quantity}</p>
                    <p>Status: <span className="text-primary font-semibold">{order.isPlaced ? 'Placed' : 'Not Placed'}</span></p>
                    <p>
                      Date:{" "}
                      {order.isPlaced
                        ? new Date(order.createdAt).toLocaleDateString()
                        : 'N/A'}
                    </p>
                  </div>
                ))}
              </div>

              {/* Column 3: Total Amount + Product Amounts */}
              <div className="col-span-4 text-right">
                <p className="text-lg font-semibold text-primary mb-4">
                  Total Amount
                </p>
                <p className="text-black font-semibold text-base mb-4">
                  {currency}{order.amount.toFixed(2)}
                </p>
                {order.items.map((item, idx) => (
                  <p key={idx} className="text-sm text-black mb-2">
                    {item.product.name}: {currency}
                    {(item.product.offerPrice * item.quantity).toFixed(2)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
