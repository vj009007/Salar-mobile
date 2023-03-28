import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Signupseller = () => {
  return (
    <div>
      <div
        className="page-header min-vh-100"
        style={{ backgroundImage: "url('images/Sellersignup.jpg')" }}
      >
        <div className="container">
          <div className="row mt-6">
            <div className="col-lg-5 "></div>
            <div className="col-lg-7  ">
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
                                  Business Segment
                                </label>
                                <div className="input-group input-group-outline">
                                  <select
                                    name="gender"
                                    className="form-select "
                                    aria-label="Default select example"
                                  >
                                    <option value="">Select Segment</option>
                                    <option value="Retail">Retail</option>
                                    <option value="Manufacturer">
                                      Manufacturer
                                    </option>
                                    <option value="Stall">Stall</option>
                                    <option value="Kirana Shop">
                                      Kirana Shop / Provisional stores
                                    </option>
                                    <option value="Super Market">
                                      Super Market
                                    </option>
                                    <option value="Food & Restaurant ">
                                      Food & Restaurant{" "}
                                    </option>
                                  </select>
                                </div>
                              </div>
                              {/* <div className="col-md-6">
                                <label className="form-label">
                                  Business Segment
                                </label>
                                <div className="input-group input-group-outline">
                                  <select
                                    name="gender"
                                    className="form-select "
                                    aria-label="Default select example"
                                  >
                                    <option value="">Select Segment</option>
                                  </select>
                                </div>
                              </div> */}
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <label className="form-label">
                                  Business Ownership Type
                                </label>
                                <div className="input-group input-group-outline">
                                  <select
                                    name="gender"
                                    className="form-select "
                                    aria-label="Default select example"
                                  >
                                    <option value="">Select Type</option>
                                    <option value="Private Limited Company,">
                                      Private Limited Company
                                    </option>
                                    <option value="Public Limited Company">
                                      Public Limited Company
                                    </option>
                                    <option value="Solo Proprietorship,">
                                      Sole Proprietorship
                                    </option>
                                    <option value="Partnership">
                                      Partnership
                                    </option>
                                    <option value="Trust">Trust</option>
                                    <option value="">Government Entity</option>
                                    <option value="Other">Individual</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">Sponsor ID</label>
                                <div className="input-group input-group-outline">
                                  <input
                                    className="form-control"
                                    name=""
                                    type="text"
                                    required
                                    placeholder="Enter Your Sponsor ID"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <label className="form-label">
                                Company Name / Legal Name / Individual Name
                              </label>
                              <div className="input-group input-group-outline">
                                <input
                                  className="form-control"
                                  name=""
                                  type="text"
                                  required
                                  placeholder="Company Name / Legal Name / Individual Name"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-4">
                                <label className="form-label">City</label>
                                <div className="input-group input-group-outline">
                                  <select
                                    name="gender"
                                    className="form-select "
                                    aria-label="Default select example"
                                  >
                                    <option value="">Select City</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">Pincode</label>
                                <div className="input-group input-group-outline">
                                  <select
                                    name="gender"
                                    className="form-select "
                                    aria-label="Default select example"
                                  >
                                    <option value="">Select Pincode</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">State</label>
                                <div className="input-group input-group-outline">
                                  <select
                                    name="gender"
                                    className="form-select "
                                    aria-label="Default select example"
                                  >
                                    <option value="">Select State</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-4">
                                <label className="form-label">Country</label>
                                <div className="input-group input-group-outline">
                                  <select
                                    name="gender"
                                    className="form-select "
                                    aria-label="Default select example"
                                  >
                                    <option value="">Select Country</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">Mobile No</label>
                                <div className="input-group input-group-outline">
                                  <input
                                    className="form-control"
                                    name=""
                                    type="text"
                                    required
                                    placeholder="Enter Your Mobile No"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">Email Id</label>
                                <div className="input-group input-group-outline">
                                  <input
                                    className="form-control"
                                    name=""
                                    type="text"
                                    required
                                    placeholder="Enter Your Email ID"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
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
                              <div className="col-md-6">
                                <label className="form-label">
                                  Confirm Password
                                </label>
                                <div className="input-group input-group-outline">
                                  <input
                                    className="form-control"
                                    name=""
                                    type="text"
                                    required
                                    placeholder="Re-Enter Your Password"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-check form-check-info text-left Iagree">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="tandc"
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                for="flexCheckDefault"
                              >
                                I agree the
                                <a
                                  href=""
                                  className="text-dark font-weight-bolder"
                                >
                                  Terms and Conditions
                                </a>
                              </label>
                            </div>
                            <div className="mt-2"></div>
                            <button className="btn bg-gradient-warning w-100  mb-0">
                              SignUp
                            </button>
                          </form>
                        </div>
                        <div className="mt-2"></div>
                        <div className="card-footer text-center pt-0 px-sm-4 px-1">
                          <p class="text-sm font-weight-bold text-secondary text-border d-inline z-index-2 bg-white px-3">
                            Already have an account? &nbsp;&nbsp;
                            <Link
                              to="/Signinseller"
                              className="text-primary text-gradient font-weight-bold"
                            >
                              Sign in
                            </Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signupseller;
