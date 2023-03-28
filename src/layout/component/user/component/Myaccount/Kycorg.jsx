/** @format */

import React from "react";
import Dashboardheader from "../Dashboard/dashboardheader";
function Kycorg() {
  return (
    <>
      <div className="myAccounts">
        <Dashboardheader />
        <div className="row mt-4"></div>
        <div>
          <div
            className="container-fluid py-5 col-md-11 card mt-4card card-body"
            id="profile"
          >
            <div
              className="row justify-content-center align-items-center"
              style={{ textAlign: "center" }}
            >
              <div className="col-sm-auto col-4">
                <a
                  href="javascript:;"
                  class="avatar avatar-lg rounded-circle border border-info"
                >
                  <img
                    alt="Image placeholder"
                    class="p-1"
                    src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                  />
                </a>
                <h3 className="mb-1 font-weight-bolder">KYC Details</h3>
              </div>
            </div>
          </div>
          <div className="container-fluid py-5 col-md-10 card mt-4" id="Kyc">
            <div className="card-header">
              <h5>KYC (ORG)</h5>
            </div>
            <div className="card-body pt-0">
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">Select ID</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Aadhar Card</option>
                    <option value="1">PAN</option>
                    <option value="2">Passport</option>
                    <option value="3">Voter Id</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fn">Enter ID No</label>
                  <div className="input-group fn1">
                    <input
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      type="text"
                      placeholder="Enter Your ID No"
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-md-8">
                  <label for="formFile" className="form-label">
                    ID Front Image
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-8">
                  <label for="formFile" className="form-label">
                    ID Back Image
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <label className="form-label">Remarks</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <h3>Organisation KYC</h3>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <label className="form-label">
                    Organisation Certificate No
                  </label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      type="text"
                      placeholder="Enter Your ID No"
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-8">
                  <label for="formFile" className="form-label">
                    Organisation Certificate Image (Front)
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-8">
                  <label for="formFile" className="form-label">
                    Organisation Certificate Image (Back)
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <label className="form-label">Rejection Remarks</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <label className="form-label">Transaction Password</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div className="btnsubmit" style={{ textAlign: "center" }}>
                <button type="button" className="btn color btn-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kycorg;
