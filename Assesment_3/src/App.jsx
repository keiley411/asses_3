import React from "react";
import  { useState, useEffect} from "react";
import {fetchData } from "./API";
import ItemListComponent from "./components/ItemListComponent";
import HeadSectionComponent from "./components/HeadSectionComponent";
import PageTransitionComponent from "./components/PageTransitionComponent";



function App() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [pageData, setPageData] = useState({
    hasPrevPage: false,
    hasNextPage: false,
    page: 1,
  });

  const handleSearch = async ({ searchText, searchBy }) => {
    let url = "";
    if (searchBy === "name") {
      url = `https://dummyjson.com/products/search?q=${searchText.trim()}`;
    }

    if (searchBy === "categories") {
      url = `https://dummyjson.com/products/category/${searchText
        .trim()
        .replace(" ", "-")
        .toLowerCase()}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setProducts(data.products);
  };

  const onPageTransition = (newPage) => {
    setPageData((prevData) => {
      return {
        ...prevData,
        page: newPage,
      };
    });
  };

  useEffect(() => {
    fetchData({ skip: (pageData.page - 1) * 10, limit: 10 }).then((result) => {
      console.log('Result:', pageData, result)
      if (!result.success) {
        setMessage(() => result.message);
        setProducts([]);
        return;
      }
      const { products, total, skip, limit, message } = result;
      setMessage(() => message);
      setProducts(() => products);
      setPageData((prevData) => ({
        ...prevData,
        hasNextPage: total - (skip + limit) !== 0,
        hasPrevPage: skip !== 0,
      }));

      // scroll to top
      document.documentElement.scrollTo(0, 0);
    });
  }, [pageData.page]);

  return(
    <>
    <HeadSectionComponent/>
    <ItemListComponent products={products}/>
    <PageTransitionComponent
        pageData={pageData}
        onPageTransition={onPageTransition}
      />
    </>
  )
}
export default App;