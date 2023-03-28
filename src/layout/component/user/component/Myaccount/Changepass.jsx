/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { changePasswords } from "../../../../ApiData/AllapiData";
import Dashboardheader from "../Dashboard/dashboardheader";
function Changepass() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [CnewPassword, setCNewPassword] = useState("");
  const [transactionPassword, setTransactionPassword] = useState("");

  const updateProfile = async () => {
    if (newPassword === CnewPassword) {
      return false;
    } else {
      // console.log(addAge);
      const newupdated = {
        oldPassword,
        newPassword,
      };

      try {
        if (!oldPassword || !newPassword) {
          return alert("Please fill all the fields");
        } else {
          // alert("hello");
          const responseJson = await changePasswords(newupdated);
          //  console.log(data);
          if (responseJson.status == 0) {
            alert(responseJson.message);
          } else {
            alert(responseJson.message);
            // setIsVisible(current => !current);
            localStorage.setItem("data", responseJson);

            // console.log(data.access_token);
            // navigate("/");
          }
        }
      } catch (err) {
        // console.log(err.message);
        // message.error("Invalid Credentials", 10);
      }
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
            id="changepass"
          >
            <div className="card-header">
              <h3>Change Password</h3>
            </div>
            <div className="card-body pt-0">
              <div className="row">
                <div className="col-md-12">
                  <label className="form-label">Old Password</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      onChange={(e) => setOldPassword(e.target.value)}
                      name="oldPassword"
                      value={oldPassword}
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <label className="form-label">New Password</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      onChange={(e) => setNewPassword(e.target.value)}
                      name="newPassword"
                      value={newPassword}
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
                  <label className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      onChange={(e) => setCNewPassword(e.target.value)}
                      name="CnewPassword"
                      value={CnewPassword}
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
                      name="transactionPassword"
                      onChange={(e) => setTransactionPassword(e.target.value)}
                      value={transactionPassword}
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
                <button
                  onClick={() => updateProfile()}
                  type="button"
                  className="btn color btn-lg"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Changepass;
