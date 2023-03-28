import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-99 shadow-none my-3  navbar-transparent">
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
                    <div
                      class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
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
                            style={{ color: "black" }}
                          >
                            <i
                              class="material-icons me-2 text-md"
                              style={{ color: "black" }}
                            >
                              dashboard
                            </i>{" "}
                            <b>About Us</b>
                            <img
                              src="https://demos.creative-tim.com/material-kit-pro/assets/img/down-arrow-dark.svg"
                              alt="down-arrow"
                              class="arrow ms-2 d-lg-block d-none"
                              style={{ color: "black" }}
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
                                  to="/Corporateinformation"
                                  class="dropdown-item border-radius-md"
                                >
                                  <span style={{ color: "black" }}>
                                    Corporate Information
                                  </span>
                                </Link>
                                <Link
                                  to="/our-leadership"
                                  class="dropdown-item border-radius-md"
                                >
                                  <span style={{ color: "black" }}>
                                    Our Leadership
                                  </span>
                                </Link>
                                <Link
                                  to="/ethics"
                                  class="dropdown-item border-radius-md"
                                >
                                  <span style={{ color: "black" }}>Ethics</span>
                                </Link>
                                <Link
                                  to="/sustainability"
                                  class="dropdown-item border-radius-md"
                                >
                                  <span style={{ color: "black" }}>
                                    Corporate Social Responsibility &
                                    Sustainability
                                  </span>
                                </Link>
                                <Link
                                  to="/political-engagement"
                                  class="dropdown-item border-radius-md"
                                >
                                  <span style={{ color: "black" }}>
                                    Became Partner
                                  </span>
                                </Link>
                              </div>
                            </div>
                            <div class="row d-lg-none">
                              <div class="col-12 d-flex justify-content-center flex-column">
                                <Link
                                  to="/index"
                                  class="dropdown-item border-radius-md"
                                >
                                  Corporate Information
                                </Link>
                                <Link
                                  to="/our-leadership"
                                  class="dropdown-item border-radius-md"
                                >
                                  Our Leadership
                                </Link>
                                <Link
                                  to="/ethics"
                                  class="dropdown-item border-radius-md"
                                >
                                  Ethics
                                </Link>
                                <Link
                                  to="/sustainability"
                                  class="dropdown-item border-radius-md"
                                >
                                  Corporate Social Responsibility &
                                  Sustainability
                                </Link>
                                <Link
                                  to="/political-engagement"
                                  class="dropdown-item border-radius-md"
                                >
                                  Became Partner
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="nav-item dropdown dropdown-hover mx-2">
                          <a
                            class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                            role="button"
                            id="dropdownMenuPages10"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ color: "black" }}
                          >
                            <i
                              class="material-icons opacity-6 me-2 text-md"
                              style={{ color: "black" }}
                            >
                              dashboard
                            </i>{" "}
                            <b> Work With Us</b>
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
                                  to="/Meetourteam"
                                  class="dropdown-item border-radius-md"
                                >
                                  <span style={{ color: "black" }}>
                                    Meet Our Team
                                  </span>
                                </Link>
                                <Link
                                  to="/career"
                                  class="dropdown-item border-radius-md"
                                >
                                  <span style={{ color: "black" }}>Career</span>
                                </Link>
                                <Link
                                  to="/salar-benefits"
                                  class="dropdown-item border-radius-md"
                                >
                                  <span style={{ color: "black" }}>
                                    Employee Benefits
                                  </span>
                                </Link>
                                <Link
                                  to="/index"
                                  class="dropdown-item border-radius-md"
                                >
                                  <span style={{ color: "black" }}>
                                    Inclusive, Diversity & Equity
                                  </span>
                                </Link>
                              </div>
                            </div>
                            <div class="row d-lg-none">
                              <div class="col-12 d-flex justify-content-center flex-column">
                                <Link
                                  to="/Meetourteam"
                                  class="dropdown-item border-radius-md"
                                >
                                  Meet Our Team
                                </Link>
                                <Link
                                  to="/career"
                                  class="dropdown-item border-radius-md"
                                >
                                  Career
                                </Link>
                                <Link
                                  to="/salar-benefits"
                                  class="dropdown-item border-radius-md"
                                >
                                  Employee Benefits
                                </Link>
                                <Link
                                  to="/index"
                                  class="dropdown-item border-radius-md"
                                >
                                  Inclusive, Diversity & Equity
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="nav-item dropdown dropdown-hover mx-2">
                          <Link
                            to="/press-release"
                            class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                          >
                            <i
                              class="material-icons opacity-6 me-2 text-md"
                              style={{ color: "black" }}
                            >
                              article
                            </i>{" "}
                            <b style={{ color: "black" }}>Press Release</b>
                          </Link>
                        </li>
                        <li class="nav-item dropdown dropdown-hover mx-2">
                          <Link
                            class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                            to="/Latestupdates"
                          >
                            <i
                              class="material-icons opacity-6 me-2 text-md"
                              style={{ color: "black" }}
                            >
                              article
                            </i>{" "}
                            <b style={{ color: "black" }}> Work With Us</b>
                          </Link>
                        </li>
                        <li class="nav-item dropdown dropdown-hover mx-2">
                          <Link
                            class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                            to="/Salarbenifts"
                          >
                            <i
                              class="material-icons opacity-6 me-2 text-md"
                              style={{ color: "black" }}
                            >
                              article
                            </i>{" "}
                            <b style={{ color: "black" }}>Salar Benifits</b>
                          </Link>
                        </li>
                        <li class="nav-item dropdown dropdown-hover mx-2">
                          <Link
                            class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                            to="/testimonials"
                          >
                            <i
                              class="material-icons opacity-6 me-2 text-md"
                              style={{ color: "black" }}
                            >
                              article
                            </i>{" "}
                            <b style={{ color: "black" }}>Testimonials</b>
                          </Link>
                        </li>
                        <li class="nav-item dropdown dropdown-hover mx-2">
                          <Link
                            class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                            to="/"
                          >
                            <i
                              class="material-icons opacity-6 me-2 text-md"
                              style={{ color: "black" }}
                            >
                              facebook
                            </i>{" "}
                            <b style={{ color: "black" }}> Follow Us</b>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <ul class="navbar-nav d-lg-block d-none mx-2">
                    <li class="nav-item">
                      <a
                        href="#pricing-soft-ui"
                        class="btn btn-sm  bg-gradient-success  mb-0"
                        onclick="smoothToPricing('pricing-soft-ui')"
                        style={{ width: "85px" }}
                      >
                        Sign In
                      </a>
                    </li>
                  </ul>
                  <ul class="navbar-nav d-lg-block d-none">
                    <li class="nav-item">
                      <a
                        href="#pricing-soft-ui"
                        class="btn btn-sm  bg-gradient-info  mb-0"
                        onclick="smoothToPricing('pricing-soft-ui')"
                        style={{ width: "85px" }}
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
