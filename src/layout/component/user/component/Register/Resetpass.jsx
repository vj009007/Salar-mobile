/** @format */

import React from "react";

function Resetpass() {
  return (
    <div className="myAccounts">
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-5 col-md-6 d-flex flex-column mx-auto">
              <div class="card card-plain mt-8">
                <div class="card-header pb-0 text-start">
                  <h3 class="font-weight-bolder text-info text-gradient">
                    Reset Password
                  </h3>
                  <p class="mb-0"></p>
                </div>
                <div class="card-body" style={{ backgroundColor: "white" }}>
                  <form role="form" class="text-start">
                    <label>Enter New Password</label>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder=""
                        aria-label="Email"
                      />
                    </div>
                    <label>Confirm New Password</label>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder=""
                        aria-label="Email"
                      />
                    </div>
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn bg-gradient-info w-100 mt-4 mb-0"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center pt-0 px-lg-2 px-1"></div>
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

export default Resetpass;
