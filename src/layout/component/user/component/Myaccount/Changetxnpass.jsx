/** @format */

import React, { useState, useEffect } from "react";
import { getOtp, verifyOtp, getProfileData } from "../../repo/otp";
import Dashboardheader from "../Dashboard/dashboardheader";
function Changetxnpass() {
  const [otpStatus, setOtpStatus] = useState();
  const [otp, setOtp] = useState();
  const [password, setPassword] = useState();
  const [cp, setCp] = useState();
  const [verify, setVerify] = useState();
  const [profile, setProfile] = useState();

  useEffect(() => {
    (async () => {
      let userid = localStorage.getItem("user_id");
      let data = await getProfileData(userid);
      setProfile(data.data.data);
    })();
  }, []);

  const handleGetOtp = async (e) => {
    e.preventDefault();
    let Otpdata = {
      userId: localStorage.getItem("user_id"),
      emailId: profile && profile.emailId ? profile.emailId : null,
      mobileNo: profile && profile.mobileNo ? profile.mobileNo : null,
    };
    let data = await getOtp(Otpdata);
    setOtpStatus(data.data.message);
    alert(data.data.message);
  };

  const handleUpdateTransactionPassword = async (e) => {
    e.preventDefault();
    if (otp === "") {
      alert("Please enter Otp");
    } else if (password === "") {
      alert("Please enter transaction password");
    } else if (cp !== password) {
      alert("password mismatch");
    } else {
      let postdata = {
        userId: localStorage.getItem("user_id"),
        otp: otp,
        newTransactionPassword: password,
      };
      let data = await verifyOtp(postdata);
      setVerify(data.data.message);
      alert(data.data.message);
      setOtp("");
      setPassword("");
      setCp("");
    }
  };

  return (
    <>
      <div className="myAccounts">
        <Dashboardheader />
        <div className="row mt-4"></div>
        <div>
          <div
            className="container-fluid py-5 col-md-10 card mt-4"
            id="changetxn"
          >
            <div className="card-header">
              <h3>Change TXN Password</h3>
            </div>
            <div className="card-body pt-0">
              <div className="row">
                <div className="col-12">
                  <label className="form-label">Mobile Number</label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Mobile Number"
                      value={
                        profile && profile.mobileNo ? profile.mobileNo : null
                      }
                      disabled
                    />
                  </div>
                </div>
                <div className="row mt-2"></div>
                <div className="col-12">
                  <label className="form-label">Email</label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Your Email"
                      value={
                        profile && profile.emailId ? profile.emailId : null
                      }
                      disabled
                    />
                  </div>
                </div>
                <div className="">
                  <button
                    type="button"
                    className="btn color mt-3 btn-lg w-100"
                    onClick={handleGetOtp}
                  >
                    Get OTP
                  </button>
                </div>
              </div>
              <div className="col-12">
                <label className="form-label">OTP</label>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Your OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <label className="form-label">
                    Change Transaction Password
                  </label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <label className="form-label">
                      Confirm Transaction Password
                    </label>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder=""
                        value={cp}
                        onChange={(e) => setCp(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="btnsubmit" style={{ textAlign: "center" }}>
                <button
                  type="button"
                  className="btn color btn-lg"
                  onClick={handleUpdateTransactionPassword}
                >
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

export default Changetxnpass;
