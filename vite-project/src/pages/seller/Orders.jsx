import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets, dummyOrders } from "../../assets/assets";

const Orders = () => {
  const { currency, themeColors } = useAppContext(); // if you have themeColors or primary color in context
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    // Replace this with your actual fetch call later
    setOrders(dummyOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll bg-white p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Orders List</h2>

        {orders.length === 0 && (
          <p className="text-center text-gray-500">No orders found.</p>
        )}

        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:grid md:grid-cols-[2fr_1.5fr_1fr_1.5fr] md:items-center gap-6 p-5 rounded-lg border border-primary/30 bg-primary/5 text-gray-900 shadow-sm"
          >
            <div className="flex gap-4 items-center">
              <img
                className="w-14 h-14 object-contain opacity-70"
                src={assets.box_icon}
                alt="Order Icon"
              />
              <div className="flex flex-col justify-center space-y-1">
                {order.items.map((item, i) => (
                  <p
                    key={i}
                    className="font-medium truncate max-w-xs"
                    title={item.product.name}
                  >
                    {item.product.name}{" "}
                    {item.quantity > 1 && (
                      <span className="text-primary font-normal">x {item.quantity}</span>
                    )}
                  </p>
                ))}
              </div>
            </div>

            <div className="text-sm leading-tight space-y-0.5">
              <p className="font-semibold text-primary">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>
                {order.address.street}, {order.address.city}, {order.address.state},{" "}
                {order.address.zipcode}, {order.address.country}
              </p>
            </div>

            <p className="font-semibold text-lg my-auto">
              {currency}
              {order.amount.toFixed(2)}
            </p>

            <div className="flex flex-col text-sm space-y-1">
              <p>
                <span className="font-semibold">Method:</span> {order.paymentType}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {order.orderDate}
              </p>
              <p>
                <span className="font-semibold">Payment:</span>{" "}
                <span
                  className={order.isPaid ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}
                >
                  {order.isPaid ? "Paid" : "Pending"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
