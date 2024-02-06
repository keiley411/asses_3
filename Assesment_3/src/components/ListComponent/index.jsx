import React from "react";
import './list.css'

function ListComponent({ product }) {
  const handleClick = () => {
  dispatch( { type: "ADD_CART", payload: product});
  // console.log(handleClick);
  };
  return (
    <>
      <div className="list">
        <img src={product.thumbnail} alt="" />
        <h1>{product.title}</h1>
        <p>Price:${product.price}</p>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    </>
  );

}

export default ListComponent;
