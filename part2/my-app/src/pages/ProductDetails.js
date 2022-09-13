import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const singleProductURL = `https://fakestoreapi.com/products/${params.productId}`;
    fetch(singleProductURL)
      .then((res) => res.json())
      .then((json) => setProduct(json));
    console.log(params);
  }, [params]);

  return (
    <div className="md:container md:mx-auto mt-4">
      <h1 className="text-3xl">{product.title}</h1>
      <img className="mt-8 w-80 h-96 mb-4" src={product.image} />
      <h3 className="text-xl mb-2">Price : {product.price} euros</h3>
      <h4 className="text-lg mb-2">Category : {product.category}</h4>
      <p className="text-base mb-2">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
