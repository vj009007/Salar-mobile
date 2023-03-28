import React, { useEffect, useState } from "react";
import MobileBottomNav from "./MobileBottomNav";
import { Link } from "react-router-dom";
import AddressAdd from "../../component/WebPages/Address";
import {
  getShippingAddress,
  getcarts,
  defoultAddr,
} from "../../ApiData/AllapiData";

const Footer1 = () => {
  const [getShippingAddressall, setGetShippingAddressall] = useState([]);
  const [showResults, setIsVisible] = useState(false);

  const setAllcountryss = async () => {
    const responseJson = await getShippingAddress();
    // console.log(responseJson);

    if (responseJson === undefined || null) {
    } else {
      setGetShippingAddressall(responseJson.data);
    }
  };

  const addressUp = async (e) => {
    console.log(e);
    // return false;
    var data = { addressId: e };
    const responseJson = await defoultAddr(data);
    // console.log(responseJson);
  };

  const addressDefoultSet = async (e) => {
    setIsVisible(true);
  };

  useEffect(() => {
    setAllcountryss();
  }, []);

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
          <div className=" col-12 d-flex justify-content-center m-3">
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
        className="modal fade"
        id="exampleModalNotification"
        tabindex="-1"
        aria-labelledby="exampleModalNotification"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-danger modal-dialog-centered modal-"
          role="document"
        >
          <div className="modal-content bg-gradient-white">
            <div className="modal-header border-0 bg-gray-200">
              <h6
                className="modal-title text-black"
                id="modal-title-notification"
              >
                Choose your location
              </h6>
            </div>
            <hr className="horizontal light mt-0" />
            <div className="container py-4">
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center flex-column">
                  <form
                    role="form"
                    id="contact-form"
                    method="post"
                    autocomplete="off"
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 mb-2">
                          {getShippingAddressall === undefined ? (
                            <></>
                          ) : (
                            getShippingAddressall.map((addr) => (
                              <div
                                data-bs-dismiss="modal"
                                style={{ cursor: "pointer" }}
                                onClick={() => addressUp(addr._id)}
                                className={
                                  "card-group mb-3 cardDynamic" +
                                  addr.defaultAddress
                                }
                              >
                                <div className="card">
                                  <div className="card-body pt-2">
                                    <p className="card-description mb-4">
                                      {addr.addressLine1}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                        <div className="col-md-12">
                          <button
                            onClick={() => addressDefoultSet()}
                            type="button"
                            className="btn bg-gradient-danger w-100"
                          >
                            Add New Address
                          </button>
                          {showResults ? (
                            <div
                              style={{
                                width: "760px",
                                marginLeft: "-24px",
                                border: "0px",
                                position: "relative",
                                zIndex: "2",
                              }}
                            >
                              <AddressAdd />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between border-0">
              <button
                type="button"
                className="btn btn-link text-black"
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
export default Footer1;
