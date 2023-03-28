/** @format */

import React from "react";
import Dashboardheader from "../Dashboard/dashboardheader";
function Personaldetailsorg() {
  return (
    <>
      <div className="myAccounts">
        <Dashboardheader />
        <div className="row mt-4"></div>
        <div>
          <div
            className="container-fluid py-5 col-md-11 card mt-4 card card-body"
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
                <h3 className="mb-1 font-weight-bolder">Personal Details</h3>
              </div>
            </div>
          </div>
          <div class="container-fluid py-5 col-md-10 card mt-4" id="basic-info">
            <div className="card-header">
              <h3>Personal Details</h3>
            </div>

            <div className="card-body pt-0">
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label fn" style={{ color: "black" }}>
                    Organisation Name
                  </label>
                  <div className="input-group fn1">
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
                <div className="col-md-6">
                  <label className="form-label sp">Sponsor Id</label>
                  <div className="input-group sp1">
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
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label fn">Sponsor Name</label>
                  <div className="input-group fn1">
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
                <div className="col-md-6">
                  <label className="form-label">Registration Year</label>
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
              <br></br>
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label fn">Mobile Number</label>
                  <div className="input-group fn1">
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
                <div className="col-md-6">
                  <label className="form-label sp">Date Of Joining</label>
                  <div className="input-group sp1">
                    <input
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      type="date"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <label className="form-label fn">Email</label>
                  <div className="input-group fn1">
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
                <div className="col-md-6">
                  <label className="form-label">Country</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>India</option>
                    <option value="1">USA</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="row mt-4">
                <h4 style={{ textAlign: "center" }}>Authority Details</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="form-label">User Role Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    type="text"
                    placeholder=""
                    required="required"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fn">Role In Organisation</label>
                  <div className="input-group fn1">
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
                <div className="col-md-6">
                  <label className="form-label fn">Gender</label>
                  <div className="input-group fn1">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Female</option>
                      <option value="1">Male</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label sp">Age</label>
                  <div className="input-group sp1">
                    <input
                      id="lastName"
                      name="lastName"
                      className="form-control"
                      type="date"
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
                <button type="button" className="btn btn-lg color">
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

export default Personaldetailsorg;
