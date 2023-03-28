/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { addAndUpdateBankDetailss } from "../../../../ApiData/AllapiData";
import { allbanks } from "../../../../AllBanks";
import Dashboardheader from "../Dashboard/dashboardheader";
import { getUser } from "../../repo/user";

function Bankdetails() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [fullName, setFullName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  const [IFSCCode, setIFSCCodes] = useState("");
  const [branchName, setBranchName] = useState("");
  const [bankStatement, setBankStatement] = useState("");
  const [IBANNumber, setIBANNumbers] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [panCard, setPanCard] = useState("");
  const [nomineeName, setNomineeName] = useState("");
  const [nomineeRelation, setNomineeRelation] = useState("");
  const [nomineeMobileNo, setNomineeMobileNo] = useState("");
  const [nomineeEmailId, setNomineeEmailId] = useState("");
  const [transactionPassword, setTransactionPassword] = useState("");
  const [allbankss, setAllbankss] = useState([]);
  //     const [file, setFile] = useState("");
  // const [files, setFiles] = useState();
  // const [fileName, setFileName] = useState("");
  const [conditionProfile, setConditionProfile] = useState([]);

  let userid = localStorage.getItem("user_id");
  //   };
  const saveData = async () => {
    var newData = {
      userId,
      fullName,
      bankName,
      accountNumber,
      accountType,
      IFSCCode,
      branchName,
      bankStatement,
      IBANNumber,
      swiftCode,
      panCard,
      nomineeName,
      nomineeRelation,
      nomineeMobileNo,
      nomineeEmailId,
    };
    try {
      if (!userId || !fullName || !bankName) {
        return alert("Please fill all the fields");
      } else {
        const responseJson = await addAndUpdateBankDetailss(newData);
        if (responseJson.status == 0) {
          alert(responseJson.message);
        } else {
          alert(responseJson.message);
          // console.log(data.access_token);
          navigate("/user/Bankdetails");
        }
      }
    } catch (err) {
      // console.log(err.message);
      // message.error("Invalid Credentials", 10);
    }
  };

  const dataOfbank = async () => {
    const responseJson = await allbanks();
    setAllbankss(responseJson);
    // console.log(responseJson);
  };

  const getProfiles = async () => {
    const user_id = localStorage.getItem("user_id");
    const res = await getUser(user_id);
    setConditionProfile(res.data.data);
  };

  useEffect(() => {
    setUserId(userid);
    dataOfbank();
    getProfiles();
  }, []);

  return (
    <>
      <div className="myAccounts">
        <Dashboardheader />
        <div className="row mt-4"></div>
        <div>
          <div className="container-fluid py-5 col-md-10 card mt-4" id="bank">
            <div className="card-header">
              <h3>Bank Details</h3>
            </div>
            <div className="card-body pt-0">
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">Country</label>
                  <div className="input-group">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>India</option>
                      <option value="1">USA</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Bank Name</label>
                  <div className="input-group">
                    <select
                      onChange={(e) => setBankName(e.target.value)}
                      name="BankName"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      {allbankss.map((data) => (
                        <option value={data}>{data}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <label className="form-label">Name In Account</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      onChange={(e) => setFullName(e.target.value)}
                      name="fullName"
                      value={fullName}
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Account Type</label>
                  <div className="input-group">
                    <select
                      className="form-select"
                      onChange={(e) => setAccountType(e.target.value)}
                      name="accountType"
                      value={accountType}
                      aria-label="Default select example"
                    >
                      <option value="Saving">Savings</option>
                      <option value="Current">Current</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <label className="form-label">Account Number</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      onChange={(e) => setAccountNumber(e.target.value)}
                      name="accountNumber"
                      value={accountNumber}
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">IFSC Code</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      onChange={(e) => setIFSCCodes(e.target.value)}
                      name="IFSCCode"
                      value={IFSCCode}
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
                  <label className="form-label">Branch Name</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      onChange={(e) => setBranchName(e.target.value)}
                      name="branchName"
                      value={branchName}
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">PAN Card No</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      onChange={(e) => setPanCard(e.target.value)}
                      name="panCard"
                      value={panCard}
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div>
                {conditionProfile && conditionProfile.role === "regular" ? (
                  <>
                    <div className="card-header ">
                      <h4>Nominee Details</h4>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label">Nominee Name</label>
                        <div className="input-group">
                          <input
                            id="lastName"
                            onChange={(e) => setNomineeName(e.target.value)}
                            name="nomineeName"
                            value={nomineeName}
                            className="form-control"
                            type="text"
                            placeholder=""
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Nominee Mobile No</label>
                        <div className="input-group">
                          <input
                            id="lastName"
                            onChange={(e) => setNomineeMobileNo(e.target.value)}
                            name="nomineeMobileNo"
                            value={nomineeMobileNo}
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
                        <label className="form-label">Nominee Relation</label>
                        <div className="input-group">
                          <input
                            id="lastName"
                            onChange={(e) => setNomineeRelation(e.target.value)}
                            name="nomineeRelation"
                            value={nomineeRelation}
                            className="form-control"
                            type="text"
                            placeholder=""
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Nominee Email</label>
                        <div className="input-group">
                          <input
                            id="lastName"
                            onChange={(e) => setNomineeEmailId(e.target.value)}
                            name="nomineeEmailId"
                            value={nomineeEmailId}
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
                        <label className="form-label">
                          Transaction Password
                        </label>
                        <div className="input-group">
                          <input
                            id="lastName"
                            name="transactionPassword"
                            onChange={(e) =>
                              setTransactionPassword(e.target.value)
                            }
                            value={transactionPassword}
                            className="form-control"
                            type="text"
                            placeholder=""
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>

              <br></br>
              <div className="btnsubmit" style={{ textAlign: "center" }}>
                <button
                  onClick={() => saveData()}
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

export default Bankdetails;
