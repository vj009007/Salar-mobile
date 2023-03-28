/** @format */

import React, { useState, useEffect } from "react";
import { getMyWalletData } from "../../repo/commission";
import Dashboardheader from "../Dashboard/dashboardheader";
function Withdrawreq() {
  const [w, setW] = useState();
  useEffect(() => {
    (async () => {
      let userid = localStorage.getItem("user_id");
      let data = await getMyWalletData(userid);
      setW(data.data.payload);
    })();
  }, []);
  return (
    <div className="myAccounts">
      <Dashboardheader />
      <div class="container-fluid my-3 py-3">
        <div class="row mb-5">
          <div class="col-lg-3">
            <div class="card position-sticky top-1">
              <ul class="nav flex-column bg-white border-radius-lg p-3">
                <li class="nav-item pt-2">
                  <a class="nav-link text-body" data-scroll="" href="#member">
                    <span class="text-sm  font-weight-bolder">
                      <b style={{ color: "black" }}>Membership Commision</b>
                    </span>
                    <div class="icon"></div>
                    <span
                      class="text-sm  font-weight-bolder"
                      style={{ color: "black" }}
                    >
                      (₹ {w ? w.member.toFixed(2) : null})
                    </span>
                  </a>
                </li>
                <li class="nav-item pt-2">
                  <a class="nav-link text-body" data-scroll="" href="#sponsor">
                    <span class="text-sm  font-weight-bolder">
                      <b style={{ color: "black" }}>Sponsor Commission</b>
                    </span>
                    <div class="icon"></div>
                    <span
                      class="text-sm  font-weight-bolder"
                      style={{ color: "black" }}
                    >
                      (₹ {w ? w.sponsor : null})
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
                      (₹ {w ? w.aur : null})
                    </span>
                  </a>
                </li>
                <li class="nav-item pt-2">
                  <a class="nav-link text-body" data-scroll="" href="#procom">
                    <span class="text-sm  font-weight-bolder">
                      <b style={{ color: "black" }}>Pro-Commission</b>
                    </span>
                    <div class="icon"></div>
                    <span
                      class="text-sm  font-weight-bolder"
                      style={{ color: "black" }}
                    >
                      (₹ {w ? w.pro : null})
                    </span>
                  </a>
                </li>
                <li class="nav-item pt-2">
                  <a class="nav-link text-body" data-scroll="" href="#teamcomm">
                    <span class="text-sm  font-weight-bolder">
                      <b style={{ color: "black" }}>Team Income</b>
                    </span>
                    <div class="icon"></div>
                    <span
                      class="text-sm  font-weight-bolder"
                      style={{ color: "black" }}
                      >
                      (₹ {w ? w.team : null})
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
                  <a
                    href=""
                    class="avatar avatar-lg rounded-circle border border-info"
                  >
                    <img
                      alt="Image placeholder"
                      class="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                </div>
                <div class="col-sm-auto col-8 my-auto">
                  <div class="h-100">
                    <h5 class="mb-1 font-weight-bolder">Withdrawal Request</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-4" id="member">
              <div class="card-header">
                <h5>Membership Level Commision</h5>
              </div>
              <div class="card-body pt-0">
                <div className="row">
                  <div class="col-12">
                    <label class="form-label">Select Commission Name</label>
                    <div class="input-group">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1"></option>
                      </select>
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div class="col-12">
                    <label class="form-label">Select Withdrawl Type</label>
                    <div class="input-group">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Normal</option>
                        <option value="1">Auto</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div class="col-12">
                    <label class="form-label">Select Level</label>
                    <div class="input-group">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected></option>
                        <option value="1"></option>
                      </select>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
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
                        value={w ? w.member.toFixed(2) : null}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div class="col-12">
                    <label class="form-label">Enter Amount</label>
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
                <br />
                <div className="row">
                  <div class="col-12">
                    <label class="form-label">Admin Fee</label>
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
                <div className="row mt-4">
                  <div class="col-12">
                    <label class="form-label">TDS</label>
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
                <br />
                <div className="row">
                  <div class="col-12">
                    <label class="form-label">Net Payable</label>
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
                <div className="row mt-4">
                  <div class="col-12">
                    <label class="form-label">Transaction Password</label>
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
                <br></br>
                <div className="btnsubmit" style={{ textAlign: "center" }}>
                  <button type="button" className="btn color btn-lg">
                    Submit
                  </button>
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
                      value={w ? w.sponsor : null}
                    />
                  </div>
                </div>
                <br></br>
                <div class="col-12">
                  <label class="form-label">Enter Amount</label>
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
                  <label class="form-label">Admin Fee</label>
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
                  <label class="form-label">TDS</label>
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
                  <label class="form-label">Net Paybale</label>
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
                  <label class="form-label">Transaction Password</label>
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
                      value={w ? w.aur : null}
                    />
                  </div>
                </div>
                <br></br>
                <div class="col-12">
                  <label class="form-label">Enter Amount</label>
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
                  <label class="form-label">Admin Fee</label>
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
                  <label class="form-label">TDS</label>
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
                  <label class="form-label">Net Paybale</label>
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
                  <label class="form-label">Transaction Password</label>
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
                      value={w ? w.pro : null}
                    />
                  </div>
                </div>
                <br></br>
                <div class="col-12">
                  <label class="form-label">Enter Amount</label>
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
                  <label class="form-label">Admin Fee</label>
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
                  <label class="form-label">TDS</label>
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
                  <label class="form-label">Net Paybale</label>
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
                  <label class="form-label">Transaction Password</label>
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
            <div class="card mt-4" id="teamcomm">
              <div class="card-header">
                <h5>Team Income</h5>
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
                      value={w ? w.team : null}
                    />
                  </div>
                </div>
                <br></br>
                <div class="col-12">
                  <label class="form-label">Enter Amount</label>
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
                  <label class="form-label">Admin Fee</label>
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
                  <label class="form-label">TDS</label>
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
                  <label class="form-label">Net Paybale</label>
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
                  <label class="form-label">Transaction Password</label>
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

export default Withdrawreq;
