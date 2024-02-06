import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home, { productsLoader } from "./routes/home";
import Products, { productLoader } from "./routes/products";
import HeadSectionComponent from "./components/HeadSectionComponent";
import ThemeContextProvider from "./Themes/ThemeContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeadSectionComponent />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsLoader,
      },
      {
        path: "/products/:productId",
        element: <Products />,
        loader: productLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
