import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer3 = () => {
  return (
    <>
      <footer
        className="footer py-lg-7 py-6 pb-lg-2 pb-2"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 mb-5 mb-lg-0">
              <h6 className="text-uppercase mb-2" style={{ color: "white" }}>
                SALAR
              </h6>
              <p className="mb-4 pb-2" style={{ color: "white" }}>
                Connect us on Social Media{" "}
              </p>
              <a
                href="javascript:;"
                target="_blank"
                className="text-secondary me-xl-4 me-3"
              >
                <span className="text-lg fab fa-facebook"></span>
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="text-secondary me-xl-4 me-3"
              >
                <span className="text-lg fab fa-twitter"></span>
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="text-secondary me-xl-4 me-3"
              >
                <span className="text-lg fab fa-instagram"></span>
              </a>
              <a
                href="javascript:;"
                target="_blank"
                className="text-secondary me-xl-4 me-3"
              >
                <span className="text-lg fab fa-youtube"></span>
              </a>
            </div>
            <div className="col-md-2 col-6  mb-md-0 mb-4">
              <h6 className="text-sm" style={{ color: "white" }}>
                About Us
              </h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/Corporateinformation"
                  >
                    Corporate Information
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/our-leadership"
                    // target="_blank"
                  >
                    Our Leadership
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/career"
                    // target="_blank"
                  >
                    Career
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/work-with-us"
                    // target="_blank"
                  >
                    Work with us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/press-release"
                    // target="_blank"
                  >
                    Press Release
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/Latestupdates"
                    // target="_blank"
                  >
                    Latest Updates
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/sustainability"
                    // target="_blank"
                  >
                    Corporate Responsibility & Sustainibilty
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/ethics"
                    // target="_blank"
                  >
                    Ethics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/political-engagement"
                    // target="_blank"
                  >
                    Political Engagement
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm" style={{ color: "white" }}>
                Grow Money with Us
              </h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/sell-on-salar"
                    // target="_blank"
                  >
                    Sell on Salar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/sell-on-salar"
                    // target="_blank"
                  >
                    Promote your Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/"
                    // target="_blank"
                  >
                    Seller Registration
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/"
                    // target="_blank"
                  >
                    Shipping
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/sell-on-global"
                    // target="_blank"
                  >
                    Sell Globally
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/fees-pricing"
                    // target="_blank"
                  >
                    Fees Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/account-management"
                    // target="_blank"
                  >
                    Account Management
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/faqs"
                    // target="_blank"
                  >
                    FAQs
                  </Link>
                </li>
                {/* <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary"
                                    to="/sell-on-global"
                                    target="_blank"
                                >
                                    Sell Globally
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary"
                                    to="/"
                                    target="_blank"
                                >
                                    Seller Registration
                                </Link>
                            </li>*/}
              </ul>
            </div>
            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm" style={{ color: "white" }}>
                Salar Benefits
              </h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/"
                    // target="_blank"
                  >
                    Rewards & Points
                  </Link>
                </li>
                {/* <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary"
                                    to="/"
                                    target="_blank"
                                >
                                    Sponsor & Commission
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-secondary"
                                    to="/"
                                    target="_blank"
                                >
                                    Best Quality Products in Reasonable Price
                                </Link>
                            </li>  */}
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/testimonials"
                    // target="_blank"
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/blogs"
                    // target="_blank"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm" style={{ color: "white" }}>
                Help & Support
              </h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/helps"
                    // target="_blank"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    to="/helps"
                    // target="_blank"
                  >
                    Gravience Redressal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1" />
          <div class=" col-12 d-flex justify-content-center m-3">
            <div style={{ marginRight: "25px", color: "white" }}>
              <Link
                className="nav-link text-secondary"
                to="/terms-conditions"
                // target="_blank"
              >
                Terms and Conditions for User
              </Link>
            </div>

            <div style={{ marginRight: "25px", color: "white" }}>
              <Link
                className="nav-link text-secondary"
                to="/terms-conditions"
                // target="_blank"
              >
                Terms and Conditions for Seller
              </Link>
            </div>
            <div style={{ marginRight: "25px", color: "white" }}>
              <Link
                className="nav-link text-secondary"
                to="/privacy-policy"
                // target="_blank"
              >
                Website Privacy Policy
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-8 mx-lg-auto text-lg-center">
              <p className="text-sm text-secondary">
                All rights reserved. Copyright ©
                <script>document.write(new Date().getFullYear());</script>
                SALAR
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div
        class="modal fade"
        id="exampleModalNotification"
        tabindex="-1"
        aria-labelledby="exampleModalNotification"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-danger modal-dialog-centered modal-"
          role="document"
        >
          <div class="modal-content bg-gradient-white">
            <div class="modal-header border-0 bg-gray-200">
              <h6 class="modal-title text-black" id="modal-title-notification">
                Choose your location
              </h6>
              <div class="dropdown">
                <a
                  href="#"
                  class="bg-transparent dropdown-toggle m-0 text-black"
                  data-bs-toggle="dropdown"
                  id="navbarDropdownMenuLink2"
                >
                  Ship To US
                  <img src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/icons/flags/US.png" />
                </a>
                <ul
                  class="dropdown-menu text-black"
                  aria-labelledby="navbarDropdownMenuLink2"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Ship To Deutsch{" "}
                      <img src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/icons/flags/DE.png" />
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Ship To UK{" "}
                      <img src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/icons/flags/GB.png" />
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Ship To Françai{" "}
                      <img src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/icons/flags/FR.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr class="horizontal light mt-0" />
            <div class="container py-4">
              <div class="row">
                <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                  <form
                    role="form"
                    id="contact-form"
                    method="post"
                    autocomplete="off"
                  >
                    <div class="card-body">
                      <div class="input-group mb-4 input-group-static">
                        <label>Your Address</label>
                        <textarea
                          name="message"
                          class="form-control"
                          id="message"
                          rows="4"
                        ></textarea>
                      </div>
                      <div class="row">
                        <div class="col-md-12 mb-2">
                          <button
                            type="submit"
                            class="btn bg-gray-900 w-100 text-white"
                          >
                            Use As Default Address
                          </button>
                        </div>
                        <div class="col-md-12">
                          <button
                            type="submit"
                            class="btn bg-gradient-danger w-100"
                          >
                            Add New Address
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-between border-0">
              <button
                type="button"
                class="btn btn-link text-black"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer3;
