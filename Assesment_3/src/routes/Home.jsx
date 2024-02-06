import React from "react";
import ListComponent from "../components/ListComponent";
import { NavLink, useLoaderData } from "react-router-dom";
import './home.css'
export async function productsLoader() {
  const productsUrl = `https://dummyjson.com/products`;
  const response = await fetch(productsUrl);
  const data = await response.json();
  return data.products;
}
function Home() {
  const products = useLoaderData();
  return (
    <>
      <div className="major">
        {products.map((product) => {
          return (
            <NavLink to={`/products/${product.id}`}>
              <ListComponent product={product} />
            </NavLink>
          );
        })}
      </div>
    </>
  );
}

export default Home;
