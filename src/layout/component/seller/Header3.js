import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header3 = () => {
  return (
    <>
      <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
              <div class="container-fluid px-0">
                <Link
                  class="navbar-brand  text-white  d-none d-md-block"
                  to="/index"
                  rel="tooltip"
                  title="Designed and Coded by Creative Tim"
                  data-placement="bottom"
                >
                  <b style={{ color: "black" }}>Strawberri</b>
                </Link>
                <Link
                  class="navbar-brand  text-white  d-block d-md-none"
                  to="/index"
                  rel="tooltip"
                  title="Designed and Coded by Creative Tim"
                  data-placement="bottom"
                >
                  Strawberri
                </Link>
                <button
                  class="navbar-toggler shadow-none ms-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon mt-2">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                  </span>
                </button>
                <div
                  class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 addonCollapse"
                  id="navigation"
                >
                  <ul class="navbar-nav navbar-nav-hover ms-auto">
                    <li class="nav-item dropdown dropdown-hover mx-2">
                      <a
                        class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                        role="button"
                        id="dropdownMenuPages10"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="material-icons  me-2 text-md">dashboard</i>
                        <b style={{ color: "black" }}> Sell with Us</b>
                        <img
                          src="https://demos.creative-tim.com/material-kit-pro/assets/img/down-arrow-dark.svg"
                          alt="down-arrow"
                          class="arrow ms-2 d-lg-block d-none"
                        />
                        <img
                          src="https://demos.creative-tim.com/material-kit-pro/assets/img/down-arrow-dark.svg"
                          alt="down-arrow"
                          class="arrow d-lg-none d-block ms-auto"
                        />
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-animation dropdown-md border-radius-xl p-3 mt-0 mt-lg-3"
                        aria-labelledby="dropdownMenuPages10"
                      >
                        <div class="row d-none d-lg-block">
                          <div class="col-12 px-4 py-2">
                            <div class="dropdown-item border-radius-md">
                              <Link to="/Whysellonseller">
                                <span style={{ color: "black" }}>
                                  Why Sell On Salar
                                </span>
                              </Link>
                            </div>
                            <div class="dropdown-item border-radius-md">
                              <Link to="/Typesofseller">
                                <span style={{ color: "black" }}>
                                  Types of Sellers
                                </span>
                              </Link>
                            </div>
                            <div class="dropdown-item border-radius-md">
                              <Link to="/Requirementstosell">
                                <span style={{ color: "black" }}>
                                  Requirements to Sell
                                </span>
                              </Link>
                            </div>
                            <div class="dropdown-item border-radius-md">
                              <Link to="/Promoteprod">
                                <span style={{ color: "black" }}>
                                  Promote Your Products
                                </span>
                              </Link>
                            </div>
                            <div class="dropdown-item border-radius-md">
                              <Link to="/Shipping">
                                <span style={{ color: "black" }}>Shipping</span>
                              </Link>
                            </div>

                            <div class="dropdown-item border-radius-md">
                              <Link to="/Helpsupport">
                                <span style={{ color: "black" }}>
                                  Help & Support
                                </span>
                              </Link>
                            </div>
                            <div class="dropdown-item border-radius-md">
                              <Link to="/Sellersuccess">
                                <span style={{ color: "black" }}>
                                  Seller Success Stories
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* <li class="nav-item dropdown dropdown-hover mx-2">
                      <div class="nav-link ps-2 d-flex cursor-pointer align-items-center">
                        <i class="material-icons me-2 text-md">article</i>{" "}
                        <b style={{ color: "black" }}> Shipping</b>
                      </div>
                    </li>

                    <li class="nav-item dropdown dropdown-hover mx-2">
                      <div class="nav-link ps-2 d-flex cursor-pointer align-items-center">
                        <i class="material-icons me-2 text-md">article</i>{" "}
                        <b style={{ color: "black" }}>Help & Support</b>
                      </div>
                    </li> */}
                    <li class="nav-item dropdown dropdown-hover mx-2">
                      <Link
                        to="/Listyourpro"
                        class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                      >
                        <i class="material-icons me-2 text-md">article</i>{" "}
                        <b style={{ color: "black" }}> List Your Products</b>
                      </Link>
                    </li>
                    <li class="nav-item dropdown dropdown-hover mx-2">
                      <Link
                        to="/Sellglobal"
                        class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                      >
                        <i class="material-icons me-2 text-md">article</i>
                        <b style={{ color: "black" }}>Sell Global</b>
                      </Link>
                    </li>
                    <li class="nav-item dropdown dropdown-hover mx-2">
                      <a
                        class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                        role="button"
                        id="dropdownMenuPages10"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="material-icons me-2 text-md">dashboard</i>
                        <b style={{ color: "black" }}>Fees & Pricing</b>
                        <img
                          src="https://demos.creative-tim.com/material-kit-pro/assets/img/down-arrow-dark.svg"
                          alt="down-arrow"
                          class="arrow ms-2 d-lg-block d-none"
                        />
                        <img
                          src="https://demos.creative-tim.com/material-kit-pro/assets/img/down-arrow-dark.svg"
                          alt="down-arrow"
                          class="arrow d-lg-none d-block ms-auto"
                        />
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-animation dropdown-md border-radius-xl p-3 mt-0 mt-lg-3"
                        aria-labelledby="dropdownMenuPages10"
                      >
                        <div class="row d-none d-lg-block">
                          <div class="col-12 px-4 py-2">
                            <Link
                              to="/Typesoffee"
                              class="dropdown-item border-radius-md"
                            >
                              <span style={{ color: "black" }}>
                                Types of Fees
                              </span>
                            </Link>
                            <Link
                              to="/Paymentcycle"
                              class="dropdown-item border-radius-md"
                            >
                              <span style={{ color: "black" }}>
                                Payment Cycle Period
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item dropdown dropdown-hover mx-2">
                      <Link
                        class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                        to="/Faq"
                      >
                        <i class="material-icons me-2 text-md">article</i>{" "}
                        <b style={{ color: "black" }}> FAQ</b>
                      </Link>
                    </li>
                    <li class="nav-item dropdown dropdown-hover mx-2">
                      <a
                        class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                        role="button"
                        id="dropdownMenuPages10"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="material-icons me-2 text-md">language</i>
                        <b style={{ color: "black" }}>Language</b>
                        <img
                          src="https://demos.creative-tim.com/material-kit-pro/assets/img/down-arrow-dark.svg"
                          alt="down-arrow"
                          class="arrow ms-2 d-lg-block d-none"
                        />
                        <img
                          src="https://demos.creative-tim.com/material-kit-pro/assets/img/down-arrow-dark.svg"
                          alt="down-arrow"
                          class="arrow d-lg-none d-block ms-auto"
                        />
                      </a>
                      <div
                        class="dropdown-menu dropdown-menu-animation dropdown-md border-radius-xl p-3 mt-0 mt-lg-3"
                        aria-labelledby="dropdownMenuPages10"
                      >
                        <div class="row d-none d-sm-block">
                          <div class="col-12 px-4 py-2">
                            <Link to="" class="dropdown-item border-radius-md">
                              <span style={{ color: "black" }}>Hindi</span>
                            </Link>
                            <Link to="" class="dropdown-item border-radius-md">
                              <span style={{ color: "black" }}>English</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul class="navbar-nav d-lg-block d-none mx-2">
                  <li class="nav-item">
                    <Link
                      to="/Signinseller"
                      class="btn btn-sm  bg-gradient-success  mb-0"
                      onclick="smoothToPricing('pricing-soft-ui')"
                      style={{ width: "85px" }}
                    >
                      Sign In
                    </Link>
                  </li>
                </ul>
                <ul class="navbar-nav d-lg-block d-none">
                  <li class="nav-item">
                    <Link
                      to="Signupseller"
                      class="btn btn-sm  bg-gradient-info  mb-0"
                      onclick="smoothToPricing('pricing-soft-ui')"
                      style={{ width: "85px" }}
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header3;
