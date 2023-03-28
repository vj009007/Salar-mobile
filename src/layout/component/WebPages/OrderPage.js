/** @format */

import React, { useState } from "react";
// import ProductList from "../footerPages/ProductList";
const OrderPage = () => {
  return (
    <>
      <section class="pt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="nav-wrapper position-relative end-0">
                <ul class="nav nav-pills nav-fill p-1" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link mb-0 px-0 py-1 active"
                      data-bs-toggle="tab"
                      href="#profile-tabs-simple"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="true"
                    >
                      My Profile
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link mb-0 px-0 py-1"
                      data-bs-toggle="tab"
                      href="#dashboard-tabs-simple"
                      role="tab"
                      aria-controls="dashboard"
                      aria-selected="false"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link mb-0 px-0 py-1"
                      data-bs-toggle="tab"
                      href="#dashboard-tabs-simple"
                      role="tab"
                      aria-controls="dashboard"
                      aria-selected="false"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link mb-0 px-0 py-1"
                      data-bs-toggle="tab"
                      href="#dashboard-tabs-simple"
                      role="tab"
                      aria-controls="dashboard"
                      aria-selected="false"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link mb-0 px-0 py-1"
                      data-bs-toggle="tab"
                      href="#dashboard-tabs-simple"
                      role="tab"
                      aria-controls="dashboard"
                      aria-selected="false"
                    >
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8 mx-auto mt-3">
              <div class="dropdown">
                <button
                  class="btn bg-gradient-danger dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Date
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 px-4">
              <div class="card card-plain card-blog shadow-lg mt-md-5 mt-3">
                <div class="bg-light bg-new border-radius-xl p-2">
                  <div class="row row-cols-md-5 row-cols-2 text-black text-center">
                    <div class="col">Order Date:25-06-2022</div>
                    <div class="col">Order No:25062022</div>
                    <div class="col">View Order Details</div>
                    <div class="col">Invoice</div>
                    <div class="col">Ship To:Suraj</div>
                  </div>
                </div>
                <div class="row align-items-center mt-2 mx-auto">
                  <div class="col-md-3">
                    <img
                      class="img-fluid d-block mx-auto border-radius-xl "
                      src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog3.jpg"
                    />
                  </div>
                  <div class="col-md-6 my-auto ms-md-3 mt-md-auto mt-4">
                    <small class="text-black font-weight-bold d-inline-block">
                      Product Name
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; Apple 12 <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Color
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; Blue <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Qty:
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; 1 <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Size
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; 8 Ram <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Weight
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; 800 gm <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Total Amount{" "}
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; 60000 <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Payment Mode{" "}
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp;Wallet, Shopping Amount Debit Card,
                    UPI , Net Banking, Bank EMI:
                    <div class="row row-cols-md-2 row-cols-1 py-2">
                      <div class="col py-1">
                        Refund Applicable &nbsp;&nbsp;:&nbsp;&nbsp;Yes/No
                      </div>
                      <div class="col py-1">
                        Return & Replacement &nbsp;&nbsp;:&nbsp;&nbsp;Yes/No
                      </div>
                      <div class="col py-1">
                        Return & Replacement &nbsp;&nbsp;:&nbsp;&nbsp; 10 Days
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <a
                      href="#"
                      class="btn btn-sm  bg-gradient-primary  mb-0 me-1 d-block mt-1"
                    >
                      Track Order : Status
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gradient-warning  mb-0 me-1 d-block mt-1 text-black"
                    >
                      Cancel Order
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gray-900 mb-0 me-1 d-block mt-1 text-white"
                    >
                      Chat With Seller
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gray-900 mb-0 me-1 d-block mt-1 text-white"
                    >
                      Return & Replacement
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gray-900 mb-0 me-1 d-block mt-1 text-white"
                    >
                      Review & Rating
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gray-900 mb-0 me-1 d-block mt-1 text-white"
                    >
                      Buy Again
                    </a>
                  </div>
                </div>
              </div>
              <hr class="dark" />
              <div class="card card-plain card-blog shadow-lg mt-md-5 mt-3">
                <div class="bg-light bg-new border-radius-xl p-2">
                  <div class="row row-cols-md-5 row-cols-2 text-black text-center">
                    <div class="col">Order Date:25-06-2022</div>
                    <div class="col">Order No:25062022</div>
                    <div class="col">View Order Details</div>
                    <div class="col">Invoice</div>
                    <div class="col">Ship To:Suraj</div>
                  </div>
                </div>
                <div class="row align-items-center mt-2 mx-auto">
                  <div class="col-md-3">
                    <img
                      class="img-fluid d-block mx-auto border-radius-xl "
                      src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog3.jpg"
                    />
                  </div>
                  <div class="col-md-6 my-auto ms-md-3 mt-md-auto mt-4">
                    <small class="text-black font-weight-bold d-inline-block">
                      Product Name
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; Apple 12 <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Color
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; Blue <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Qty:
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; 1 <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Size
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; 8 Ram <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Weight
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; 800 gm <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Total Amount{" "}
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; 60000 <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Payment Mode{" "}
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp;Wallet, Shopping Amount Debit Card,
                    UPI , Net Banking, Bank EMI:
                    <div class="row row-cols-md-2 row-cols-1 py-2">
                      <div class="col py-1">
                        Refund Applicable &nbsp;&nbsp;:&nbsp;&nbsp;Yes/No
                      </div>
                      <div class="col py-1">
                        Return & Replacement &nbsp;&nbsp;:&nbsp;&nbsp;Yes/No
                      </div>
                      <div class="col py-1">
                        Return & Replacement &nbsp;&nbsp;:&nbsp;&nbsp; 10 Days
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <a
                      href="#"
                      class="btn btn-sm  bg-gradient-primary  mb-0 me-1 d-block mt-1"
                    >
                      Track Order : Status
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gradient-warning  mb-0 me-1 d-block mt-1 text-black"
                    >
                      Cancel Order
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gray-900 mb-0 me-1 d-block mt-1 text-white"
                    >
                      Chat With Seller
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gray-900 mb-0 me-1 d-block mt-1 text-white"
                    >
                      Return & Replacement
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gray-900 mb-0 me-1 d-block mt-1 text-white"
                    >
                      Review & Rating
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gray-900 mb-0 me-1 d-block mt-1 text-white"
                    >
                      Buy Again
                    </a>
                  </div>
                </div>
              </div>
              <hr class="dark" />
              <div class="card card-plain card-blog shadow-lg mt-md-5 mt-3">
                <div class="bg-light bg-new border-radius-xl p-2">
                  <div class="row row-cols-md-5 row-cols-2 text-black text-center">
                    <div class="col">Order Date:25-06-2022</div>
                    <div class="col">Order No:25062022</div>
                    <div class="col">View Order Details</div>
                    <div class="col">Invoice</div>
                    <div class="col">Ship To:Suraj</div>
                  </div>
                </div>
                <div class="row align-items-center mt-2 mx-auto">
                  <div class="col-md-3">
                    <img
                      class="img-fluid d-block mx-auto border-radius-xl "
                      src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog3.jpg"
                    />
                  </div>
                  <div class="col-md-6 my-auto ms-md-3 mt-md-auto mt-4">
                    <small class="text-black font-weight-bold d-inline-block">
                      Product Name
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; Apple 12 <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Color
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; Blue <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Qty:
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; 1 <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Size
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; 8 Ram <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Weight
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; 800 gm <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Total Amount{" "}
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp; 60000 <br />
                    <small class="text-black font-weight-bold d-inline-block">
                      Payment Mode{" "}
                    </small>
                    &nbsp;&nbsp;:&nbsp;&nbsp;Wallet, Shopping Amount Debit Card,
                    UPI , Net Banking, Bank EMI:
                    <div class="row row-cols-md-2 row-cols-1 py-2">
                      <div class="col py-1">
                        Refund Applicable &nbsp;&nbsp;:&nbsp;&nbsp;Yes/No
                      </div>
                      <div class="col py-1">
                        Return & Replacement &nbsp;&nbsp;:&nbsp;&nbsp;Yes/No
                      </div>
                      <div class="col py-1">
                        Return & Replacement &nbsp;&nbsp;:&nbsp;&nbsp; 10 Days
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <a
                      href="#"
                      class="btn btn-sm  bg-gradient-primary  mb-0 me-1 d-block mt-1"
                    >
                      Track Order : Status
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gradient-warning  mb-0 me-1 d-block mt-1 text-black"
                    >
                      Cancel Order
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gray-900 mb-0 me-1 d-block mt-1 text-white"
                    >
                      Chat With Seller
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gray-900 mb-0 me-1 d-block mt-1 text-white"
                    >
                      Return & Replacement
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gray-900 mb-0 me-1 d-block mt-1 text-white"
                    >
                      Review & Rating
                    </a>
                    <a
                      href="#"
                      class="btn btn-sm  bg-gray-900 mb-0 me-1 d-block mt-1 text-white"
                    >
                      Buy Again
                    </a>
                  </div>
                </div>
              </div>
              <hr class="dark" />
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
export default OrderPage;
