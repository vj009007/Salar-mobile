/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfileDetail } from "../../../../ApiData/AllapiData";
import { getUser } from "../../repo/user";
import {
  alphaOnly,
  numericOnly,
  numericPatternTwo,
  numericPattern,
  sensorPattern,
  emailPattern,
} from "../../../../component/WebPages/Validation";
import Dashboardheader from "../Dashboard/dashboardheader";
function Personaldetails() {
  const [getDetailAll, setGetDetailAll] = useState([]);
  const [fullName, setFullName] = useState("");
  const [sponserId, setSponserId] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [countryId, setCountryId] = useState("");
  const [transactionPassword, setTransactionPasswords] = useState("");

  const navigate = useNavigate();

  const detailAllProfile = async () => {
    const user_id = localStorage.getItem("user_id");
    const res = await getUser(user_id);
    setGetDetailAll(res.data.data);
    setFullName(res.data.data.fullName);
    setSponserId(res.data.data.sponserId);
    setGender(res.data.data.gender);
    setAge(res.data.data.age);
    setDob(res.data.data.dob);
    setMobileNo(res.data.data.mobileNo);
    setEmailId(res.data.data.emailId);
    setCountryId(res.data.data.countryId._id);
  };

  const updateProfile = async () => {
    const getAge = (birthDate) =>
      Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
    const addAge = getAge(dob);
    const newupdated = {
      fullName,
      dob,
      gender,
      age: addAge,
      emailId,
      countryId,
      mobileNo,
      sponserId,
      transactionPassword,
    };
    try {
      if (!fullName || !emailId || !transactionPassword) {
        return alert("Please fill all the fields");
      } else {
        const responseJson = await updateProfileDetail(newupdated);
        if (responseJson.status == 0) {
          alert(responseJson.message);
        } else {
          alert(responseJson.message);
          localStorage.setItem("data", responseJson);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    detailAllProfile();
  }, []);

  return (
    <>
      <div className="myAccounts">
        <Dashboardheader />
        <div className="row mt-4"></div>
        <div>
          <div
            className="container-fluid py-5 col-md-11 card card-body"
            id="profile"
          >
            <div className="row justify-content-center align-items-center">
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
              </div>
            </div>
          </div>
          <div
            className="container-fluid py-5 col-md-10 card mt-4"
            id="basic-info"
          >
            <div className="card-header">
              <h5>Personal Details</h5>
            </div>
            <div className="card-body pt-0">
              <div className="col-md-12">
                <label className="form-label fn">Full Name</label>
                <div className="input-group fn1">
                  <input
                    id="lastName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    name="fullName"
                    maxlength="30"
                    // onKeyDown={event => alphaOnly(event)}
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
                  <label className="form-label sp">Sponsor Id</label>
                  <div className="input-group sp1">
                    <input
                      id="lastName"
                      value={sponserId}
                      onChange={(e) => setSponserId(e.target.value)}
                      maxlength="8"
                      // onKeyDown={event => sensorPattern(event)}
                      name="sponserId"
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                      disabled
                    />
                  </div>
                </div>
                <div className="mt-2"></div>
                {/* <div className="col-md-6">
                  <label className="form-label sp">Transaction Password</label>
                  <div className="input-group sp1">
                    <input
                      id="lastName"
                      value={transactionPassword}
                      onChange={e => setTransactionPasswords(e.target.value)}
                      maxlength="12"
                      // onKeyDown={event => sensorPattern(event)}
                      name="transactionPassword"
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div> */}
              </div>

              <div className="row">
                <div className="col-md-4">
                  <label className="form-label">Gender</label>
                  <select
                    className="form-select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    name="gender"
                    aria-label="Default select example"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label fn">Age</label>
                  <div className="input-group fn1">
                    <input
                      id="lastName"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      name="age"
                      // onKeyDown={event => sensorPattern(event)}
                      maxLength="2"
                      className="form-control"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label sp">Date Of Birth({dob})</label>
                  <div className="input-group sp1">
                    <input
                      id="lastName"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      name="dob"
                      className="form-control"
                      type="date"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <label className="form-label fn">Mobile Number</label>
                  <div className="input-group fn1">
                    <input
                      id="lastName"
                      value={mobileNo}
                      onChange={(e) => setMobileNo(e.target.value)}
                      // onKeyDown={event => numericOnly(event)}
                      maxlength="12"
                      name="dob"
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label fn">Email</label>
                  <div className="input-group fn1">
                    <input
                      id="lastName"
                      value={emailId}
                      onChange={(e) => setEmailId(e.target.value)}
                      name="emailId"
                      // onKeyDown={event => emailPattern(event)}
                      maxLength="30"
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Country</label>
                  <select
                    className="form-select"
                    value={countryId}
                    onChange={(e) => setCountryId(e.target.value)}
                    name="countryId"
                    aria-label="Default select example"
                  >
                    <option value="630f516684310d4d2a98baf2">India</option>
                  </select>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-12">
                  <label className="form-label">Transaction Password</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Transaction password"
                      required="required"
                      value={transactionPassword}
                      onChange={(e) => setTransactionPasswords(e.target.value)}
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

export default Personaldetails;
