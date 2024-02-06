import React from "react";
import ListComponent from "../ListComponent";
import './item.css'


const ItemListComponent = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ListComponent product={product} />
      ))}
    </div>
  );
};

export default ItemListComponent;
