import React, { useState } from "react";
import { assets } from "../../assets/assets";

const AddProduct = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [category, setCategory] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log({
      name,
      description,
      price,
      offerPrice,
      category,
      files,
    });
    // Handle form submission logic here
  };

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between p-6">
      <form onSubmit={onSubmitHandler} className="space-y-5 max-w-lg">
        <div>
          <p className="text-base font-medium">Product Image</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {Array(4).fill('').map((_, index) => (
              <label key={index} htmlFor={`image${index}`}>
                <input
                  type="file"
                  accept="image/*"
                  id={`image${index}`}
                  hidden
                  onChange={(e) => {
                    const updatedFiles = [...files];
                    updatedFiles[index] = e.target.files[0];
                    setFiles(updatedFiles);
                  }}
                />
                <img
                  src={files[index] ? URL.createObjectURL(files[index]) : assets.upload_area}
                  alt="Upload"
                  className="max-w-24 cursor-pointer"
                  width={100}
                  height={100}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
          <input
            id="product-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type here"
            className="outline-none py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
          <textarea
            id="product-description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="outline-none py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          />
        </div>

        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none py-2 px-3 rounded border border-gray-500/40"
          >
            <option value="">Select Category</option>
            {["Fruits", "Vegetables", "Dairy", "Snacks", "Beverages"].map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
            <input
              id="product-price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0"
              className="outline-none py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
            <input
              id="offer-price"
              type="number"
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              placeholder="0"
              className="outline-none py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-8 py-2.5 bg-primary text-white font-medium rounded hover:opacity-90 transition"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
