/** @format */

import React from "react";

export default function Paginate({
  postsPerPage,
  totalPosts,
  paginate,
  previousPage,
  nextPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  
  return (
    <div className="row mt-4">
      <nav aria-label="Page navigation example">
        <ul class="pagination" style={{ justifyContent: "end" }}>
          <li class="page-link" onClick={previousPage}>
            <i class="fa fa-angle-left"></i>
            <span class="sr-only">Previous</span>
          </li>
          {pageNumbers.map(number => (
            <li
              className="page-link"
              key={number}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}
          <li class="page-link" onClick={nextPage}>
            <i class="fa fa-angle-right"></i>
            <span class="sr-only">Next</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
