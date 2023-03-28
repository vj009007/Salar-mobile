/** @format */

import React, { useState } from "react";
// import ProductList from "../footerPages/ProductList";
const ProductReview = () => {
  return (
    <>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h4> Give Review </h4>
            </div>
            <div class="d-flex px-2 py-1">
              <div>
                <img
                  data-cfsrc="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/team-2.jpg"
                  class="avatar avatar-sm me-3"
                  src="https://demos.creative-tim.com/test/material-dashboard-pro/assets/img/team-2.jpg"
                />
              </div>
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-xs">John Michael</h6>
              </div>
            </div>
            <hr class="dark" />
            <div class="col-12 mt-3">
              <h4> Overall Review </h4>
              <div class="mt-3 d-flex justify-content-center align-items-center">
                <span class="h3">
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="far fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <hr class="dark" />
              <h4 class="mt-3"> Product Review </h4>
              <div class="mt-3 d-flex justify-content-center align-items-center">
                <span class="h3">
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="far fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <hr class="dark" />
              <h4 class="mt-3"> Product Review </h4>
              <div class="mt-3 d-flex justify-content-center align-items-center">
                <span class="h3">
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="far fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <hr class="dark" />
              <h4 class="mt-3"> Seller Review </h4>
              <div class="mt-3 d-flex justify-content-center align-items-center">
                <span class="h3">
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="fas fa-star" aria-hidden="true"></i>
                  <i class="far fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <hr class="dark" />
              <h4 class="mt-3"> Write Review </h4>
              <div class="input-group input-group-outline my-3 w-md-30">
                <input type="file" class="form-control" />
              </div>
              <div class="input-group input-group-outline mb-0 mt-md-0 mt-4">
                <textarea
                  name="message"
                  class="form-control"
                  id="message"
                  rows="6"
                  placeholder="Describe your Review in at characters"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 pb-0">
        <div class="container-fluid">
          <h3 class="">Today Deal</h3>
          {/* <div class="row mt-5 row-cols-lg-5 row-cols-md-3 row-cols-2"> */}
          <div class="row mt-5 ">{/* <ProductList /> */}</div>
        </div>
      </section>
    </>
  );
};
export default ProductReview;
