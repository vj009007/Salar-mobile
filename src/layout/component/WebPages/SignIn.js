/** @format */

import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { postSign } from "../../ApiData/AllapiData";

const SignIn = () => {
  const [userId, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [grantType, seGrantType] = useState("password");
  const [tokenAccess, setTokenAccess] = useState();
  const [passwordVisible, setPasswordVisible] = useState("password");
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const [year, setYear] = useState(new Date().getFullYear());
  const gotoOverview = async () => {
    try {
      if (!userId || !password) {
        return alert("Please fill all the fields", 10);
      } else {
        const data = { userId, password, grantType };
        //console.log("he", data);
        const responseJson = await postSign(data);

        alert(responseJson.message);
        localStorage.setItem("data", responseJson.data._id);
        setTokenAccess(
          localStorage.setItem("dataAuthUserID", responseJson.data._id)
        );
        setTokenAccess(localStorage.setItem("user_id", responseJson.data._id));
        setTokenAccess(
          localStorage.setItem("authToken", responseJson.access_token)
        );

        localStorage.setItem("registerId", responseJson.data.registerId);

        localStorage.setItem("SId", responseJson.data.sponserId);
        localStorage.setItem("fullname", responseJson.data.fullName);
        localStorage.setItem("doj", responseJson.data.createdAt);
        // console.log(data.access_token);
        //
        // navigate("/");
        window.location.href = "/";
      }
    } catch (err) {
      // message.error("Invalid Credentials", 10);
    }
  };

  const viewHide = async () => {
    setPasswordVisible("text");
    setHidden(false);
  };
  const viewHides = async () => {
    setPasswordVisible("password");
    setHidden(true);
  };

  // useEffect(() => {
  //   numericPatternSign();
  // }, [tokenAccess]);

  return (
    <>
      <div>
        <div
          className="page-header min-vh-90"
          style={{ backgroundImage: "url('images/signin.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-8 col-12 pt-5 pb-4">
                <div className="card z-index-0 fadeIn3 ">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2"></div>
                  <div
                    className="card card-body"
                    style={{ backgroundColor: "white" }}
                  >
                    <h3 className=" font-weight-bolder text-center mb-0">
                      Welcome{" "}
                      <img
                        src={logo}
                        alt="logo.png"
                        style={{ width: "110px", justifyContent: "center" }}
                      />
                    </h3>

                    <div className="mt-5"></div>
                    <form role="form" className="text-start ">
                      <label>
                        {" "}
                        <b style={{ fontWeight: "600", color: "black" }}>
                          {" "}
                          Enter your User ID
                        </b>
                      </label>
                      <div className="mb-3 input-group input-group-outline">
                        <input
                          type="text"
                          className="form-control"
                          name="userId"
                          placeholder="User Id"
                          value={userId}
                          // maxlength="30"
                          // onKeyDown={event => alphaOnly(event)}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                      <label>
                        {" "}
                        <b style={{ fontWeight: "600", color: "black" }}>
                          {" "}
                          Enter your Password
                        </b>
                      </label>
                      <div className="mb-3 input-group input-group-outline">
                        <input
                          type={passwordVisible}
                          className="form-control Signs"
                          name="password"
                          placeholder="Password"
                          value={password}
                          maxlength="15"
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span class="input-group-text">
                          <i
                            hidden={!hidden}
                            onClick={(e) => viewHide(e.target.value)}
                            class="fa fa-eye-slash "
                            style={{ marginRight: "10px", cursor: "pointer" }}
                            aria-hidden="true"
                          ></i>
                          <i
                            hidden={hidden}
                            onClick={(e) => viewHides(e.target.value)}
                            class="fa fa-eye "
                            style={{ marginRight: "10px", cursor: "pointer" }}
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>

                      <div className="mt-4"></div>
                      <div className="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                        />
                        <label class="form-check-label" for="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <div className="text-center">
                        <button
                          onClick={() => gotoOverview()}
                          type="button"
                          className="btn w-100 my-4 mb-2"
                          style={{ backgroundColor: "#8b558b", color: "white" }}
                        >
                          Sign in
                        </button>
                        <br></br>
                        <div class="card-footer text-center pt-0 px-sm-4 px-1">
                          <div class="row px-xl-5 px-sm-4 px-3">
                            <div class="mt-3 mb-4 position-relative text-center">
                              <p class="text-sm font-weight-bold text-secondary text-border d-inline z-index-2 bg-white px-3">
                                Don't have an account?{" "}
                                <Link
                                  to="/signup"
                                  className="text-primary text-gradient font-weight-bold"
                                >
                                  Sign up
                                </Link>
                              </p>

                              <p class="mb-0 mt-3 text-sm mx-auto">
                                <Link
                                  to="/forgetpassword"
                                  className="text-info text-gradient font-weight-bold"
                                >
                                  Forgot Password
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
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
export default SignIn;
