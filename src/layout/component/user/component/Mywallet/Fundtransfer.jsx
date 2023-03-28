/** @format */

import React from "react";
import Dashboardheader from "../Dashboard/dashboardheader";
function Fundtransfer() {
  return (
    <div className="myAccounts">
      <Dashboardheader />
      <div class="container-fluid py-5 col-md-10 ">
        <div class="col-lg-12 mt-lg-0 mt-4">
          <div class="card mt-4" id="password">
            <div class="card-header" style={{ textAlign: "center" }}>
              <h3>Fund Transfer</h3>
            </div>
            <div class="card-body pt-0">
              <label class="form-label">Enter User Id</label>
              <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  placeholder="Enter Your User ID"
                />
              </div>
              <div className="mt-3"></div>
              <label class="form-label">
                Enter Amount (Wallet Amount: Rs.100)
              </label>
              <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  placeholder="Enter Your Amount"
                />
              </div>
              <div className="mt-3"></div>
              <label class="form-label">Admin Fee</label>
              <div class="form-group">
                <input class="form-control" type="password" placeholder="" />
              </div>
              <div className="mt-3"></div>
              <label class="form-label">Net Fund Transfer</label>
              <div class="form-group">
                <input class="form-control" type="password" placeholder="" />
              </div>
              <div className="mt-3"></div>
              <label class="form-label">Transaction password</label>
              <div class="form-group">
                <input
                  class="form-control"
                  type="password"
                  placeholder=" Enter Transaction password"
                />
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
    </div>
  );
}

export default Fundtransfer;
