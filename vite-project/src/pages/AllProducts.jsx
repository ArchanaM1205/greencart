import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import ProductCart from '../componennts/ProductCart';

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      {/* Section Heading */}
      <div className="flex flex-col items-start mb-10">
        <p className="text-2xl md:text-3xl font-semibold uppercase text-black">All Products</p>
        <div className="w-16 h-0.5 bg-primary mt-2 rounded-full"></div>
      </div>

      {/* Product Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          gap-6"
      >
        {filteredProducts
          .filter((product) => product.inStock)
          .map((product, index) => (
            <ProductCart key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
