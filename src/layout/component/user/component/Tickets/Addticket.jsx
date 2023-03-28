/** @format */

import React from "react";
import Dashboardheader from "../Dashboard/dashboardheader";
function Addticket() {
  return (
    <div className="myAccounts">
      <Dashboardheader />
      <div class="container-fluid py-5 col-md-10 ">
        <div className="row mt-4"></div>
        <div class="col-lg-12 mt-lg-0 mt-4">
          <div class="card mt-4" id="password">
            <div class="card-header" style={{ textAlign: "center" }}>
              <h2>Add Ticket</h2>
            </div>
            <div class="card-body pt-0">
              <label class="form-label">Select Subject</label>
              <div class="form-group">
                <select class="form-select" aria-label="Default select example">
                  <option selected></option>
                  <option value="1"></option>
                </select>
              </div>
              <div className="mt-3"></div>
              <label class="form-label">Message</label>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{ height: "200px" }}
                ></textarea>
              </div>
              <br></br>
              <div className="btnsubmit" style={{ textAlign: "center" }}>
                <button type="button" class="btn color btn-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addticket;
