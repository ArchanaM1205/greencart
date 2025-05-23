import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setIsSeller(true); // Simulate login
  };

  useEffect(() => {
    if (isSeller) {
      navigate('/seller');
    }
  }, [isSeller, navigate]);

  return (
    !isSeller && (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <form
          onSubmit={onSubmitHandler}
          className="bg-white border border-primary shadow-md rounded-xl p-8 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="text-primary">Seller</span>{' '}
            <span className="text-black">Login</span>
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    )
  );
};

export default SellerLogin;
