/** @format */

import React, { useState, useEffect } from "react";
import { getMyWalletData } from "../../repo/commission";
import Dashboardheader from "../Dashboard/dashboardheader";
function Transferwallet() {
  const [wallet, setWallet] = useState();
  useEffect(() => {
    (async () => {
      let userid = localStorage.getItem("user_id");
      let data = await getMyWalletData(userid);
      setWallet(data.data.payload);
    })();
  }, []);

  console.log(wallet);
  return (
    <div className="myAccounts">
      <Dashboardheader />
      <div class="container-fluid my-3 py-3">
        <div class="row mb-5">
          <div class="col-lg-3">
            <div class="card position-sticky top-1">
              <ul class="nav flex-column bg-white border-radius-lg p-3">
                {/* <li class="nav-item">
                                    <a class="nav-link text-body" data-scroll="" href="#profile">
                                        <div class="icon me-2"></div>
                                        <span class="text-sm">Wallet</span>
                                    </a>
                                </li> */}
                <li class="nav-item pt-2">
                  <a class="nav-link text-body" data-scroll="" href="#sponsor">
                    <span class="text-sm  font-weight-bolder">
                      {" "}
                      <b style={{ color: "black" }}>Sponsor Commission</b>{" "}
                    </span>
                    <div class="icon"></div>
                    <span
                      class="text-sm  font-weight-bolder"
                      style={{ color: "black" }}
                    >
                      (₹ {wallet ? wallet.sponsor : null})
                    </span>
                  </a>
                </li>
                <li class="nav-item pt-2">
                  <a
                    class="nav-link text-body"
                    data-scroll=""
                    href="#repurchase"
                  >
                    <span class="text-sm  font-weight-bolder">
                      <b style={{ color: "black" }}>AUR Commission</b>
                    </span>
                    <div class="icon"></div>
                    <span
                      class="text-sm  font-weight-bolder"
                      style={{ color: "black" }}
                    >
                      (₹ {wallet ? wallet.aur : null})
                    </span>
                  </a>
                </li>
                <li class="nav-item pt-2">
                  <a class="nav-link text-body" data-scroll="" href="#procom">
                    <span class="text-sm  font-weight-bolder">
                      <b style={{ color: "black" }}>Pro Commission</b>
                    </span>
                    <div class="icon"></div>
                    <span
                      class="text-sm  font-weight-bolder"
                      style={{ color: "black" }}
                    >
                      (₹ {wallet ? wallet.pro : null})
                    </span>
                  </a>
                </li>
                <li class="nav-item pt-2">
                  <a
                    class="nav-link text-body"
                    data-scroll=""
                    href="#membership"
                  >
                    <span class="text-sm  font-weight-bolder">
                      <b style={{ color: "black" }}>Membership Commission</b>
                    </span>
                    <div class="icon "></div>
                    <span
                      class="text-sm  font-weight-bolder"
                      style={{ color: "black" }}
                    >
                      (₹{wallet ? wallet.member : null})
                    </span>
                  </a>
                </li>
                <li class="nav-item pt-2">
                  <a class="nav-link text-body" data-scroll="" href="#teamcom">
                    <span class="text-sm  font-weight-bolder">
                      <b style={{ color: "black" }}>Team Commission</b>
                    </span>
                    <div class="icon"></div>
                    <span
                      class="text-sm  font-weight-bolder"
                      style={{ color: "black" }}
                    >
                      (₹{wallet ? wallet.team : null})
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-9 mt-lg-0 mt-4">
            <div class="card card-body" id="profile">
              <div class="row justify-content-center align-items-center">
                <div class="col-sm-auto col-4">
                  <div class="avatar avatar-xl position-relative">
                    <a
                      href="javascript:;"
                      class="avatar avatar-lg rounded-circle border border-info"
                    >
                      <img
                        alt="Image placeholder"
                        class="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>{" "}
                  </div>
                </div>
                <div class="col-sm-auto col-8 my-auto">
                  <div class="h-100">
                    <h5 class="mb-1 font-weight-bolder">Transfer to Wallet</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-4" id="sponsor">
              <div class="card-header">
                <h5>Sponsor Commission</h5>
              </div>
              <div class="card-body pt-0">
                <div class="col-12">
                  <label class="form-label">Available Amount</label>
                  <div class="input-group">
                    <input
                      id="lastName"
                      name="lastName"
                      class="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                      value={wallet ? wallet.sponsor : null}
                    />
                  </div>
                </div>
                <br></br>
                <div class="col-12">
                  <label class="form-label">
                    Enter Amount Transfer to Wallet
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
                <br></br>
                <div class="col-12">
                  <label class="form-label">Transaction password</label>
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
                <br></br>
                <div className="btnsubmit" style={{ textAlign: "center" }}>
                  <button type="button" className="btn color btn-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div class="card mt-4" id="repurchase">
              <div class="card-header">
                <h5>AUR Commission</h5>
              </div>
              <div class="card-body pt-0">
                <div class="col-12">
                  <label class="form-label">Available Amount</label>
                  <div class="input-group">
                    <input
                      id="lastName"
                      name="lastName"
                      class="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                      value={wallet ? wallet.aur : null}
                    />
                  </div>
                </div>
                <br></br>
                <div class="col-12">
                  <label class="form-label">
                    Enter Amount Transfer to Wallet
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
                <br></br>
                <div class="col-12">
                  <label class="form-label">Transaction password</label>
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
                <br></br>
                <div className="btnsubmit" style={{ textAlign: "center" }}>
                  <button type="button" className="btn color btn-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div class="card mt-4" id="procom">
              <div class="card-header d-flex">
                <h5 class="mb-0">Pro Commission</h5>
              </div>
              <div class="card-body pt-0">
                <div class="col-12">
                  <label class="form-label">Available Amount</label>
                  <div class="input-group">
                    <input
                      id="lastName"
                      name="lastName"
                      class="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                      value={wallet ? wallet.pro : null}
                    />
                  </div>
                </div>
                <br></br>
                <div class="col-12">
                  <label class="form-label">
                    Enter Amount Transfer to Wallet
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
                <br></br>
                <div class="col-12">
                  <label class="form-label">Transaction password</label>
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
                <br></br>
                <div className="btnsubmit" style={{ textAlign: "center" }}>
                  <button type="button" className="btn color btn-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div class="card mt-4" id="membership">
              <div class="card-header">
                <h5>Membership Commission</h5>
              </div>
              <div class="card-body pt-0">
                <div className="row">
                  <div className="col-md-12">
                    <label class="form-label">Select Commission Name</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1"></option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <label class="form-label">Select Commission Type</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Auto</option>
                      <option value="1">Normal</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <label class="form-label">Select commission Level</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected></option>
                      <option value="1"></option>
                    </select>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <label class="form-label">Available Amount</label>
                    <input
                      id="lastName"
                      name="lastName"
                      class="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                      value={wallet ? wallet.member : null}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <label class="form-label">Transfer Amount</label>
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
                <div className="row mt-4">
                  <div className="col-md-12">
                    <label class="form-label">Transaction password</label>
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
                <br></br>
                <div className="btnsubmit" style={{ textAlign: "center" }}>
                  <button type="button" className="btn color btn-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div class="card mt-4" id="teamcom">
              <div class="card-header">
                <h5>Team Commission</h5>
              </div>
              <div class="card-body pt-0">
                <div class="col-12">
                  <label class="form-label">Available Amount</label>
                  <div class="input-group">
                    <input
                      id="lastName"
                      name="lastName"
                      class="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                      value={wallet ? wallet.team : null}
                    />
                  </div>
                </div>
                <br></br>
                <div class="col-12">
                  <label class="form-label">
                    Enter Amount Transfer to Wallet
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
                <br></br>
                <div class="col-12">
                  <label class="form-label">Transaction password</label>
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
    </div>
  );
}

export default Transferwallet;
