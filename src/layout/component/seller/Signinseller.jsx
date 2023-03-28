import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Signinseller = () => {
  return (
    <div>
      <div
        className="page-header min-vh-100"
        style={{ backgroundImage: "url('images/Signinseller.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 ">
              <div className="card z-index-0">
                <div className="card-body">
                  <h3 className=" font-weight-bolder text-center mb-0">
                    Welcome{" "}
                    <img
                      src={logo}
                      alt="logo.png"
                      style={{ width: "110px", justifyContent: "center" }}
                    />
                  </h3>
                  <div class="NormalUser">
                    <form role="form">
                      <div className="form-check form-check-info text-left Iagree">
                        <div>
                          <form>
                            <div className="row">
                              <div className="col-md-12">
                                <label className="form-label">
                                  Enter your Seller ID / Email ID
                                </label>
                                <div className="input-group input-group-outline">
                                  <input
                                    className="form-control"
                                    name=""
                                    type="text"
                                    required
                                    placeholder="Enter Your Seller ID / Email ID"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <label className="form-label">Password</label>
                                <div className="input-group input-group-outline">
                                  <input
                                    className="form-control"
                                    name=""
                                    type="text"
                                    required
                                    placeholder="Enter Your Password"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mt-4"></div>
                            <button className="btn bg-gradient-warning w-100  mb-0">
                              Sign In
                            </button>
                          </form>
                        </div>
                        <div className="mt-2"></div>
                        <div className="card-footer text-center pt-0 px-sm-4 px-1">
                          <p class="text-sm font-weight-bold text-secondary text-border d-inline z-index-2 bg-white px-3">
                            Don't have an account? &nbsp;&nbsp;
                            <Link
                              to="/Signupseller"
                              className="text-primary text-gradient font-weight-bold"
                            >
                              Sign Up
                            </Link>
                          </p>
                          <br />
                          <Link
                            to="/Forgotpassword"
                            className="text-primary text-gradient font-weight-bold"
                          >
                            Forgot Password
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 pb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signinseller;
