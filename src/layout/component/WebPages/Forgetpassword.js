/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { forgotPasswords } from "../../ApiData/AllapiData";
const Forgot = () => {
  const [userId, setUsername] = useState("");
  const navigate = useNavigate();
  const [year, setYear] = useState(new Date().getFullYear());
  const gotoOverview = async () => {
    try {
      if (!userId) {
        return alert("Please fill all the fields", 10);
      } else {
        const data = { userId };
        const responseJson = await forgotPasswords(data);

        console.log(responseJson);

        if (responseJson.status == 1) {
          alert(responseJson.message);
          navigate("/signin");
        } else {
          alert(responseJson.message);
        }
        //localStorage.setItem("data", responseJson.data.fullName);
        //localStorage.setItem("authToken", responseJson.access_token);
        // console.log(data.access_token);
        //
      }
    } catch (err) {
      // message.error("Invalid Credentials", 10);
    }
  };

  return (
    <>
      <div>
        <div
          className="page-header min-vh-100"
          style={{ backgroundImage: "url('images/forgot.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5 col-md-6 d-flex flex-column">
                <div className="card card-plain">
                  <div className="card-header pb-0 text-start">
                    <h3 className="font-weight-bolder text-primary text-gradient">
                      Forgot Password
                    </h3>
                    <p
                      className="mb-0"
                      style={{ fontWeight: "600", color: "black" }}
                    >
                      You will receive an sms / e-mail
                    </p>
                  </div>
                  <div
                    className="card-body"
                    style={{ backgroundColor: "white" }}
                  >
                    <form role="form" className="text-start">
                      <label style={{ fontWeight: "600", color: "black" }}>
                        Enter your registered User ID
                      </label>
                      <div className="mb-3 input-group input-group-outline">
                        <input
                          type="text"
                          className="form-control"
                          name="userId"
                          placeholder="UserId"
                          value={userId}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>

                      <div className="text-center">
                        <button
                          onClick={() => gotoOverview()}
                          type="button"
                          className="btn bg-gradient-dark w-100 mt-4 mb-0"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Forgot;
