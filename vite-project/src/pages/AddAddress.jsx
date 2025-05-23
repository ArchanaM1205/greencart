import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const AddAddress = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Dummy action: log address and redirect to cart
    console.log("Address Submitted:", address);
    navigate("/cart");
  };

  return (
    <div className="mt-16 pb-16 px-4">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="font-semibold text-primary">Address</span>
      </p>

      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        {/* Form Section */}
        <div className="flex-1 max-w-xl">
          <form className="space-y-4 mt-6 text-sm" onSubmit={onSubmitHandler}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={address.firstname}
                onChange={handleChange}
                required
                className="px-3 py-2 border border-gray-300 rounded outline-none text-gray-700 focus:border-primary transition"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={address.lastname}
                onChange={handleChange}
                required
                className="px-3 py-2 border border-gray-300 rounded outline-none text-gray-700 focus:border-primary transition"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={address.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none text-gray-700 focus:border-primary transition"
            />

            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={address.street}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none text-gray-700 focus:border-primary transition"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleChange}
                required
                className="px-3 py-2 border border-gray-300 rounded outline-none text-gray-700 focus:border-primary transition"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={address.state}
                onChange={handleChange}
                required
                className="px-3 py-2 border border-gray-300 rounded outline-none text-gray-700 focus:border-primary transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="zipcode"
                placeholder="Zip Code"
                value={address.zipcode}
                onChange={handleChange}
                required
                className="px-3 py-2 border border-gray-300 rounded outline-none text-gray-700 focus:border-primary transition"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={address.country}
                onChange={handleChange}
                required
                className="px-3 py-2 border border-gray-300 rounded outline-none text-gray-700 focus:border-primary transition"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none text-gray-700 focus:border-primary transition"
            />

            <button
              type="submit"
              className="w-full py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition"
            >
              Save Address
            </button>
          </form>
        </div>

        {/* Image Section */}
        <img
          src={assets.add_address_iamge}
          alt="Add Address"
          className="md:mr-16 mb-10 md:mt-0 max-w-sm"
        />
      </div>
    </div>
  );
};

export default AddAddress;
