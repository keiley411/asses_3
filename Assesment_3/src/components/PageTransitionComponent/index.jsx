import React from "react";
import "./transition.css";

function PageTransitionComponent({ pageData, onPageTransition }) {
  const { hasPrevPage, hasNextPage, page } = pageData;
  return (
    <div className="product-page-transition">
      <button
        className={`__prev`}
        disabled={!hasPrevPage}
        onClick={() => onPageTransition(page - 1)}
      >
        Prev
      </button>
      <span className="__page">{page}</span>
      <button
        className={`__next`}
        disabled={!hasNextPage}
        onClick={() => onPageTransition(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default PageTransitionComponent;
