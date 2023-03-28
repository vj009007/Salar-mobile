/** @format */

import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";

import { signUps, getSponserIdDetails } from "../../ApiData/AllapiData";

import { getAllCountry } from "../repo/country";

import { Alert } from "../alert/alert";
import "antd/dist/reset.css";
import { Select, Input, DatePicker, Checkbox } from "antd";

import Flag from "react-world-flags";
// Email validation
export const emailValidation = text => {
  let regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g;
  if (regex.test(text)) {
    return true;
  }
  return false;
};

// mobile number validation
export const mobileNumberValidation = text => {
  let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (regex.test(text)) {
    return true;
  }
  return false;
};

export const calAge = dob => {
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);
  return age;
};
const SignUp = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const [countrysAll, setCountrys] = useState([]);

  const navigate = useNavigate();

  const [Sd, setSp] = useState();

  const [user, setUser] = useState({
    fullname: "",
    dob: "",
    gender: "",
    age: "",
    email: "",
    country: "",
    mobile: "",
    password: "",
    cpassword: "",
    sponserId: urlParams.get("id") ? urlParams.get("id") : "",
    tandc: false,
    role: "regular",
    year: new Date().getFullYear(),
  });

  const { fullName } = user;
  const [register, setRegister] = useState("regular");
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const Selectchange = value => [
    setUser({
      ...user,
      gender: value,
    }),
  ];

  const CountryChange = value => {
    setUser({
      ...user,
      country: value,
    });
  };

  const CheckBoxChecked = e => {
    setUser({
      ...user,
      tandc: e.target.checked,
    });
  };
  useEffect(() => {
    getAllcountryss();
    if (urlParams.has("id")) {
      getsponser();
    }
  }, []);

  const getsponser = async () => {
    let getdata = await getSponserIdDetails(
      urlParams.get("id") ? urlParams.get("id") : "",
    );
    setSp(getdata.payload);
  };
  const signUp = async e => {
    e.preventDefault();

    let register;
    const {
      fullname,
      dob,
      gender,
      email,
      sponserId,
      country,
      mobile,
      password,
      cpassword,
      tandc,
      role,
    } = user;
    if (role === "regular") {
      if (fullname === "") {
        Alert("Please enter the fullname");
      } else if (dob === "") {
        Alert("Please fill the Date of Birth");
      } else if (gender === "") {
        Alert("Please select the gender");
      } else if (emailValidation(email) === false) {
        Alert("Enter valid Email Id");
      } else if (sponserId === "") {
        Alert("Please select the Country");
      } else if (country === "") {
        Alert("Please select the Country");
      } else if (mobileNumberValidation(mobile) === false) {
        Alert("Please enter valid mobile number");
      } else if (password === "") {
        Alert("Please enter password");
      } else if (password !== cpassword) {
        Alert("Password mismatch");
      } else if (tandc === false) {
        Alert("Please accept the terms And Conditions");
      } else {
        register = {
          fullName: fullname,
          dob: dob,
          gender: gender,
          age: calAge(new Date(dob)),
          emailId: email,
          countryId: country,
          mobileNo: mobile,
          password: password,
          sponserId: sponserId,
          termsAndConditions: tandc === "on" ? true : false,
          role: role,
        };
      }
    } else if (role === "organisation") {
      if (fullname === "") {
        Alert("Please fill the organization fullname");
      } else if (dob === "") {
        Alert("Please update the registered Year");
      } else if (sponserId === "") {
        Alert("Please enter sponser ID");
      } else if (country === "") {
        Alert("Please select the Country");
      } else if (emailValidation(email) === false) {
        Alert("Enter valid Email Id");
      } else if (mobileNumberValidation(mobile) === false) {
        Alert("Please enter valid mobile number");
      } else if (password === "") {
        Alert("Please enter password");
      } else if (password !== cpassword) {
        Alert("Password mismatch");
      } else if (tandc === false) {
        Alert("Please accept the terms And Conditions");
      } else {
        register = {
          organisationName: fullname,
          registeredYear: dob,
          emailId: email,
          countryId: country,
          mobileNo: mobile,
          password: password,
          sponserId: sponserId,
          termsAndConditions: tandc === "on" ? true : false,
          role: role,
        };
      }
    }

    if (register) {
      const responseJson = await signUps(register);
      if (responseJson.status == 0) {
        Alert(responseJson.message);
      } else {
        Alert(responseJson.message);
        // setIsVisible(current => !current);
        localStorage.setItem("data", responseJson);
        navigate("/");
      }
    }
  };

  const getAllcountryss = async () => {
    const responseJson = await getAllCountry();
    setCountrys(responseJson.data.data);
  };

  var iso = "";

  if (countrysAll) {
    countrysAll &&
      countrysAll.map(item => {
        if (user.country === item._id) {
          iso = item.iso;
        }
      });
  }

  return (
    <>
      <div>
        <div
          className="page-header min-vh-90"
          style={{ backgroundImage: "url('images/signup.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12 pb-4">
                <div className="card z-index-0">
                  <div className="card-body">
                    <h3 className=" font-weight-bolder text-center mb-0">
                      Welcome{" "}
                      <img
                        src={logo}
                        alt="logo.png"
                        style={{ width: "110px", justifyContent: "center" }}
                      />
                    </h3>
                    <div class="NormalUser">
                      <div className="row">
                        <div class="container py-0">
                          <div class="row">
                            <div class="col-md-6 mx-auto">
                              <button
                                type="button"
                                class="btn bg-gradient-light w-100 mt-4 mb-2"
                                onClick={() =>
                                  setUser({
                                    ...user,
                                    role: "regular",
                                  })
                                }
                              >
                                User (Individual)
                              </button>
                            </div>
                            <div class="col-md-6 mx-auto">
                              <button
                                type="button"
                                class="btn btn bg-gradient-dark w-100 mt-4 mb-2"
                                onClick={() =>
                                  setUser({
                                    ...user,
                                    role: "organisation",
                                  })
                                }
                              >
                                User (Organisation)
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form role="form">
                        <div className="form-check form-check-info text-left Iagree">
                          <div>
                            {user.role === "regular" ? (
                              <form>
                                <div>
                                  <label className="form-label">
                                    Name (As per Government Id)
                                  </label>
                                  <div className="input-group input-group-outline">
                                    <Input
                                      className="form-control"
                                      name="fullname"
                                      type="text"
                                      onChange={handleChange}
                                      value={user.fullname}
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">DOB</label>
                                    <div className="input-group input-group-outline">
                                      <Input
                                        className="form-control"
                                        name="dob"
                                        type="date"
                                        onChange={handleChange}
                                        value={user.dob}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Sponsor Id
                                    </label>
                                    <div className="input-group input-group-outline">
                                      <Input
                                        className="form-control"
                                        name="sponserId"
                                        type="text"
                                        onChange={handleChange}
                                        value={user.sponserId}
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">Gender</label>
                                    <Select
                                      onChange={Selectchange}
                                      style={{
                                        width: "-webkit-fill-available",
                                      }}
                                    >
                                      <option value="">Select</option>
                                      <option value="female">Female</option>
                                      <option value="male">Male</option>
                                    </Select>
                                  </div>

                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Country
                                    </label>

                                    <Select
                                      onChange={CountryChange}
                                      aria-label="Default select example"
                                      style={{
                                        width: "-webkit-fill-available",
                                      }}
                                    >
                                      <option value="">Please Select</option>
                                      {countrysAll.map(CN => (
                                        <option value={CN._id}>
                                          <span>
                                            <Flag
                                              code={CN.nickname}
                                              width="15"
                                              height="15"
                                            />
                                          </span>{" "}
                                          {CN.name}
                                        </option>
                                      ))}
                                    </Select>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Email Id
                                    </label>
                                    <div className="input-group input-group-outline">
                                      <Input
                                        className="form-control"
                                        name="email"
                                        type="text"
                                        onChange={handleChange}
                                        value={user.email}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Mobile No
                                    </label>
                                    <div className="input-group input-group-outline">
                                      <Input.Group compact>
                                        <Input
                                          style={{ width: "20%" }}
                                          className="form-control"
                                          value={iso}
                                          type="text"
                                        />
                                        <Input
                                          style={{ width: "80%" }}
                                          className="form-control"
                                          name="mobile"
                                          onChange={handleChange}
                                          value={user.mobile}
                                          required
                                        />
                                      </Input.Group>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Password
                                    </label>
                                    <div className="input-group input-group-outline">
                                      <Input
                                        className="form-control"
                                        name="password"
                                        type="password"
                                        maxLength="15"
                                        onChange={handleChange}
                                        value={user.password}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Confirm Password
                                    </label>
                                    <div className="input-group input-group-outline">
                                      <Input
                                        className="form-control"
                                        name="cpassword"
                                        maxLength="15"
                                        type="password"
                                        onChange={handleChange}
                                        value={user.cpassword}
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-2"></div>
                                <div className="form-check form-check-info text-left Iagree">
                                  <Checkbox
                                    onChange={CheckBoxChecked}
                                    name="tandc"
                                    checked={user.tandc}
                                  />
                                  <label
                                    className="form-check-label"
                                    for="flexCheckDefault"
                                  >
                                    I agree the
                                    <a
                                      href=""
                                      className="text-dark font-weight-bolder"
                                    >
                                      Terms and Conditions
                                    </a>
                                  </label>
                                </div>
                                <div className="mt-2"></div>
                                <button
                                  className="btn bg-gradient-warning w-100  mb-0"
                                  onClick={signUp}
                                >
                                  SignUp
                                </button>
                              </form>
                            ) : (
                              <form>
                                <div>
                                  <label className="form-label">
                                    Organisation Name (As per Government Id)
                                  </label>
                                  <div className="input-group input-group-outline">
                                    <Input
                                      className="form-control"
                                      name="fullname"
                                      type="text"
                                      onChange={handleChange}
                                      value={user.fullname}
                                      required
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="form-label">
                                    Sponsor Id
                                  </label>
                                  <div className="input-group input-group-outline">
                                    <Input
                                      className="form-control"
                                      name="sponserId"
                                      type="text"
                                      onChange={handleChange}
                                      value={user.sponserId}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Year Of Registered
                                    </label>
                                    <div className="input-group input-group-outline">
                                      <Input
                                        className="form-control"
                                        name="dob"
                                        type="date"
                                        onChange={handleChange}
                                        value={user.dob}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Country
                                    </label>
                                    <Select
                                      onChange={CountryChange}
                                      aria-label="Default select example"
                                      style={{
                                        width: "-webkit-fill-available",
                                      }}
                                    >
                                      <option value="">Please Select</option>
                                      {countrysAll.map(CN => (
                                        <option value={CN._id}>
                                          <span>
                                            <Flag
                                              code={CN.nickname}
                                              width="15"
                                              height="15"
                                            />
                                          </span>{" "}
                                          {CN.name}
                                        </option>
                                      ))}
                                    </Select>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Email Id
                                    </label>
                                    <div className="input-group input-group-outline">
                                      <Input
                                        className="form-control"
                                        name="email"
                                        type="text"
                                        onChange={handleChange}
                                        value={user.email}
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Mobile No
                                    </label>
                                    <div className="input-group input-group-outline">
                                      <Input.Group compact>
                                        <Input
                                          style={{ width: "20%" }}
                                          className="form-control"
                                          value={iso}
                                          type="text"
                                        />
                                        <Input
                                          style={{ width: "80%" }}
                                          className="form-control"
                                          name="mobile"
                                          onChange={handleChange}
                                          value={user.mobile}
                                          required
                                        />
                                      </Input.Group>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Password
                                    </label>
                                    <div className="input-group input-group-outline">
                                      <Input
                                        className="form-control"
                                        name="password"
                                        type="password"
                                        maxLength="15"
                                        onChange={handleChange}
                                        value={user.password}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="form-label">
                                      Confirm Password
                                    </label>
                                    <div className="input-group input-group-outline">
                                      <Input
                                        className="form-control"
                                        name="cpassword"
                                        maxLength="15"
                                        type="password"
                                        onChange={handleChange}
                                        value={user.cpassword}
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-2"></div>
                                <div className="form-check form-check-info text-left Iagree">
                                  <Checkbox
                                    onChange={CheckBoxChecked}
                                    name="tandc"
                                    checked={user.tandc}
                                  />
                                  <label
                                    className="form-check-label"
                                    for="flexCheckDefault"
                                  >
                                    I agree the
                                    <a
                                      href=""
                                      className="text-dark font-weight-bolder"
                                    >
                                      Terms and Conditions
                                    </a>
                                  </label>
                                </div>
                                <div className="mt-2"></div>
                                <button
                                  className="btn bg-gradient-warning w-100 mb-0"
                                  onClick={signUp}
                                >
                                  SignUp
                                </button>
                              </form>
                            )}
                          </div>
                          <div className="mt-2"></div>
                          <div className="card-footer text-center pt-0 px-sm-4 px-1">
                            <p class="text-sm font-weight-bold text-secondary text-border d-inline z-index-2 bg-white px-3">
                              Already have an account? &nbsp;&nbsp;
                              <Link
                                to="/signin"
                                className="text-primary text-gradient font-weight-bold"
                              >
                                Sign in
                              </Link>
                            </p>
                            <br />
                            {/* <Link to='' className="text-primary text-gradient font-weight-bold">Forgot Password</Link> */}
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
      </div>
    </>
  );
};
export default SignUp;
