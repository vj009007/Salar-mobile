/** @format */

import React, { useState } from "react";
// import ProductList from "../footerPages/ProductList";
const AllReview = () => {
  return (
    <>
      <div class="py-5">
        <div class="container-fluid">
          <h3>Recommended Products</h3>
        </div>
        <div class="container-fluid mt-sm-5 mt-3">
          <div class="row">
            <div class="col-lg-3">
              <div
                class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2"
                style={{ top: "100px" }}
              >
                <h6>Customer reviews</h6>
                <div class="py-2 px-2">
                  <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </span>{" "}
                  <span class="lead px-2">4.2 out of 5</span>
                </div>
                <div class="py-3 px-3">
                  <div class="progress-wrapper">
                    <div class="progress-info">
                      <div class="progress-percentage d-flex justify-content-between align-items-lg-center">
                        <span class="text-sm font-weight-bold">5 Star</span>
                        <span class="text-sm font-weight-bold">80%</span>
                      </div>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div class="progress-wrapper">
                    <div class="progress-info">
                      <div class="progress-percentage d-flex justify-content-between align-items-lg-center">
                        <span class="text-sm font-weight-bold">4 Star</span>
                        <span class="text-sm font-weight-bold">60%</span>
                      </div>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div class="progress-wrapper">
                    <div class="progress-info">
                      <div class="progress-percentage d-flex justify-content-between align-items-lg-center">
                        <span class="text-sm font-weight-bold">3 Star</span>
                        <span class="text-sm font-weight-bold">60%</span>
                      </div>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                  <div class="progress-wrapper">
                    <div class="progress-info">
                      <div class="progress-percentage d-flex justify-content-between align-items-lg-center">
                        <span class="text-sm font-weight-bold">2 Star</span>
                        <span class="text-sm font-weight-bold">30%</span>
                      </div>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                  <div class="progress-wrapper">
                    <div class="progress-info">
                      <div class="progress-percentage d-flex justify-content-between align-items-lg-center">
                        <span class="text-sm font-weight-bold">1 Star</span>
                        <span class="text-sm font-weight-bold">10%</span>
                      </div>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "10%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-12">
                  <div class="row mt-5">
                    <div class="col-md-6">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="py-3">
                        <div class="pt-3">
                          <a href="javascript:;">
                            <h5>
                              <i class="material-icons me-sm-1">
                                account_circle
                              </i>{" "}
                              Lovely and cosy apartment
                            </h5>
                          </a>
                          <p>
                            <span>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="far fa-star"></i>
                            </span>{" "}
                            Lovely and cosy apartment
                          </p>
                          <p>
                            Siri's latest trick is offering a hands-free TV
                            viewing experience, that will allow consumers to
                            turn on or off their television, change inputs, fast
                            forward.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="row mt-5">
                    <div class="col-md-6">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="py-3">
                        <div class="pt-3">
                          <a href="javascript:;">
                            <h5>
                              <i class="material-icons me-sm-1">
                                account_circle
                              </i>{" "}
                              Lovely and cosy apartment
                            </h5>
                          </a>
                          <p>
                            <span>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="far fa-star"></i>
                            </span>{" "}
                            Lovely and cosy apartment
                          </p>
                          <p>
                            Siri's latest trick is offering a hands-free TV
                            viewing experience, that will allow consumers to
                            turn on or off their television, change inputs, fast
                            forward.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="row mt-5">
                    <div class="col-md-6">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="py-3">
                        <div class="pt-3">
                          <a href="javascript:;">
                            <h5>
                              <i class="material-icons me-sm-1">
                                account_circle
                              </i>{" "}
                              Lovely and cosy apartment
                            </h5>
                          </a>
                          <p>
                            <span>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="far fa-star"></i>
                            </span>{" "}
                            Lovely and cosy apartment
                          </p>
                          <p>
                            Siri's latest trick is offering a hands-free TV
                            viewing experience, that will allow consumers to
                            turn on or off their television, change inputs, fast
                            forward.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="row mt-5">
                    <div class="col-md-6">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        class="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="py-3">
                        <div class="pt-3">
                          <a href="javascript:;">
                            <h5>
                              <i class="material-icons me-sm-1">
                                account_circle
                              </i>{" "}
                              Lovely and cosy apartment
                            </h5>
                          </a>
                          <p>
                            <span>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="far fa-star"></i>
                            </span>{" "}
                            Lovely and cosy apartment
                          </p>
                          <p>
                            Siri's latest trick is offering a hands-free TV
                            viewing experience, that will allow consumers to
                            turn on or off their television, change inputs, fast
                            forward.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-2 text-end">
                  <div class="row justify-space-between py-2">
                    <div class="col-lg-4 ms-auto">
                      <ul class="pagination pagination-primary m-4">
                        <li class="page-item">
                          <a
                            class="page-link"
                            href="javascript:;"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">
                              <i class="material-icons" aria-hidden="true">
                                chevron_left
                              </i>
                            </span>
                          </a>
                        </li>
                        <li class="page-item active">
                          <a class="page-link" href="javascript:;">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:;">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:;">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:;">
                            4
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:;">
                            5
                          </a>
                        </li>
                        <li class="page-item">
                          <a
                            class="page-link"
                            href="javascript:;"
                            aria-label="Next"
                          >
                            <span aria-hidden="true">
                              <i class="material-icons" aria-hidden="true">
                                chevron_right
                              </i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
export default AllReview;
