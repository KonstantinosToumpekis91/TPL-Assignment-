import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="mx-6">
      <h1 className="mx-8 mb-4 mt-2 text-5xl">All Products</h1>

      <div className="grid grid-cols-3">
        {products.map((product) => (
          <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            key={product.id}
          >
            <img src={product.image} className="w-full h-96 p-8 rounded-t-lg" />
            <Link to={`products/${product.id}`}>
              <h5 className="mx-8 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </Link>
            <p className="mx-8 mb-3 font-normal text-gray-700 dark:text-gray-400">
              Category : {product.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
