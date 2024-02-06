import React from "react";
import { useLoaderData } from "react-router-dom";
import "./products.css";

export async function productLoader({ params }) {
  const productUrl = `https://dummyjson.com/products/${params.productId}`;
  const response = await fetch(productUrl);
  const data = await response.json();
  return data;
}
function Products() {
  const product = useLoaderData();
  return (
    <>
      <div className="list">
        <img src={product.thumbnail} alt="" />
        <h1>{product.title}</h1>
        <p>Price:${product.price}</p>
        {/* <button onClick={handleClick}>Add to cart</button> */}
      </div>
    </>
  );
}

export default Products;
