/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  addAndUpdateKycDetailss,
  fileUploads,
} from "../../../../ApiData/AllapiData";
import Dashboardheader from "../Dashboard/dashboardheader";
function Kyc() {
  const navigate = useNavigate();
  const [selectId, setSelectId] = useState("");
  const [numberProof, setNumberProof] = useState("");
  const [frontImage, setFrontImage] = useState("");
  const [backImage, setBackImage] = useState("");
  const [remarks, setRemarks] = useState("");
  const [userId, setUserId] = useState("");
  const [transactionPassword, setTransactionPassword] = useState("");
  const [file, setFile] = useState("");
  const [files, setFiles] = useState();
  const [fileName, setFileName] = useState("");

  let userid = localStorage.getItem("user_id");

  const saveFile = (e) => {
    setFiles(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("files", files);
    formData.append("fileName", fileName);
    const responseJson = await fileUploads(formData);
    setFrontImage(responseJson.data);
    console.log(responseJson.data);
    // console.log(responseJson);
  };

  const uploadFile2 = async (e) => {
    const formData = new FormData();
    formData.append("files", files);
    formData.append("fileName", fileName);
    const responseJson = await fileUploads(formData);
    //setFile(responseJson.data);
    setBackImage(responseJson.data);
    console.log(responseJson.data);
    // console.log(file);
    // console.log(responseJson);
  };
  const signUp = async () => {
    // console.log(addAge);

    var newSignUp = {
      userId,
      selectId,
      numberProof,
      frontImage,
      backImage,
      remarks,
      transactionPassword,
    };

    //console.log(newSignUp);
    try {
      if (!selectId || !numberProof || !transactionPassword) {
        return alert("Please fill all the fields");
      } else {
        // alert("hello");
        const responseJson = await addAndUpdateKycDetailss(newSignUp);
        //  console.log(data);
        if (responseJson.status == 0) {
          alert(responseJson.message);
        } else {
          alert(responseJson.message);
          // console.log(data.access_token);
          navigate("/user/Kyc");
        }
      }
    } catch (err) {
      // console.log(err.message);
      // message.error("Invalid Credentials", 10);
    }
  };

  useEffect(() => {
    setUserId(userid);
  }, []);

  return (
    <>
      <div className="myAccounts">
        <Dashboardheader />
        <div className="row mt-4"></div>
        <div>
          <div className="container-fluid py-5 col-md-10 card mt-4" id="Kyc">
            <div className="card-header">
              <h3>KYC</h3>
            </div>
            <div className="card-body pt-0">
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">Select ID</label>
                  <select
                    onChange={(e) => setNumberProof(e.target.value)}
                    name="numberProof"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Driving License">Driving License</option>
                    <option value="Aadhar Card">Aadhar Card</option>
                    <option value="Passport">Passport</option>
                    <option value="Voter ID">Voter Id</option>
                    <option value="SSN">SSN</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fn">Enter ID No</label>
                  <div className="input-group fn1">
                    <input
                      id="lastName"
                      onChange={(e) => setSelectId(e.target.value)}
                      name="selectId"
                      value={selectId}
                      className="form-control"
                      type="text"
                      placeholder="Enter Your ID No"
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <br></br>

              <div className="row mt-2">
                <label className="form-label fn"> ID Front Image</label>
                <div className="col-10">
                  {/* <input type="file" onChange={saveFile} /> */}
                  {/* <button type="button" onClick={uploadFile}>Upload</button> */}
                  <input
                    className="form-control"
                    onChange={saveFile}
                    type="file"
                    name="file"
                    id="formFile"
                  />
                </div>
                <div className="col-2 ">
                  <button
                    onClick={uploadFile}
                    style={{ cursor: "pointer" }}
                    className="btn color input-group-text justify-content-center"
                    id=""
                  >
                    Upload
                  </button>
                </div>
              </div>
              <div className="row mt-2">
                <label className="form-label fn">ID Back Image</label>
                <div className="col-10">
                  {/* <input type="file" onChange={saveFile} /> */}
                  {/* <button type="button" onClick={uploadFile}>Upload</button> */}
                  <input
                    className="form-control"
                    onChange={saveFile}
                    type="file"
                    name="file"
                    id="formFile"
                  />
                </div>
                <div className="col-2">
                  <span
                    onClick={uploadFile2}
                    style={{ cursor: "pointer" }}
                    className="btn color input-group-text justify-content-center"
                    id=""
                  >
                    Upload
                  </span>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-6">
                  <label className="form-label">Rejection Remarks</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      onChange={(e) => setRemarks(e.target.value)}
                      name="remarks"
                      value={remarks}
                      className="form-control"
                      type="text"
                      placeholder=""
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Transaction Password</label>
                  <div className="input-group">
                    <input
                      id="lastName"
                      onChange={(e) => setTransactionPassword(e.target.value)}
                      name="transactionPassword"
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
                  onClick={() => signUp()}
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

export default Kyc;
