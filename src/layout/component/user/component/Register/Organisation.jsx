/** @format */

import React from "react";

function Organisation() {
  return (
    <div className="myAccounts">
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div
              class="col-xl-6 col-lg-5 col-md-6 d-flex flex-column mx-auto"
              style={{
                backgroundColor: "white",
                borderRadius: "80px",
              }}
            >
              <div class="card card-plain mt-sm-8 mt-7 mt-md-5">
                <div class="card-header pb-0 text-left">
                  <h3 class="font-weight-bolder text-primary text-gradient">
                    Welcome to SALAR
                  </h3>
                  <p class="mb-0">Join us today</p>
                </div>

                <div class="card-body pb-3">
                  <form role="form">
                    <div class="row">
                      <div class="col-12">
                        <label class="form-label">
                          Organisation Name (As per Government Id)
                        </label>
                        <div class="input-group">
                          <input
                            id="lastName"
                            name="lastName"
                            class="form-control"
                            type="text"
                            placeholder=""
                            required="required"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row mt-2">
                      <div class="col-6">
                        <label class="form-label">Registered Year</label>
                        <div class="input-group">
                          <input
                            class="date form-control"
                            type="date"
                            value="2018-11-23"
                            id="example-date-input"
                            style={{ marginLeft: "0px" }}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div class="col-12">
                        <label class="form-label">Email</label>
                        <div class="input-group">
                          <input
                            id="lastName"
                            name="lastName"
                            class="form-control"
                            type="text"
                            placeholder=""
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <label class="form-label">Country</label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option selected></option>
                          <option value="1"></option>
                        </select>
                      </div>
                      <div class="col-6">
                        <label class="form-label">Mobile No</label>
                        <div class="input-group">
                          <input
                            id="lastName"
                            name="lastName"
                            class="form-control"
                            type="text"
                            placeholder=""
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <label class="form-label">Password</label>
                        <div class="input-group">
                          <input
                            id="lastName"
                            name="lastName"
                            class="form-control"
                            type="text"
                            placeholder=""
                            required="required"
                          />
                          <span class="input-group-text">
                            <i class="ni ni-compass-04"></i>
                          </span>
                        </div>
                      </div>
                      <div class="col-6">
                        <label class="form-label">Confirm Password</label>
                        <div class="input-group">
                          <input
                            id="lastName"
                            name="lastName"
                            class="form-control"
                            type="text"
                            placeholder=""
                            required="required"
                          />
                          <span class="input-group-text">
                            <i class="ni ni-compass-04"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <br></br>
                    <div class="form-check form-check-info text-left">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        checked
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        I agree the
                        <a href="" class="text-dark font-weight-bolder">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn bg-gradient-primary w-100 mt-4 mb-0"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center pt-0 px-sm-4 px-1">
                  <p class="mb-4 mx-auto">
                    Already have an account?
                    <a
                      href=""
                      class="text-primary text-gradient font-weight-bold"
                    >
                      Sign in
                    </a>
                    <br />
                    <a
                      href=""
                      class="text-primary text-gradient font-weight-bold"
                    >
                      Forgot Password
                    </a>
                  </p>
                </div>
                <div class="card-footer text-center pt-0 px-sm-4 px-1">
                  <p class="mb-4 mx-auto"></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                <div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organisation;
