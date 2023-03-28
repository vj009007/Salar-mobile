/** @format */

import React, { useEffect, useState } from "react";
import "./add.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../user/assets/assets/img/salarlogos.png";
import {
  getUserShippingAddress,
  setDefaultAddress,
  RemoveAddress,
} from "../../repo/address";
import Dashboardheader from "../Dashboard/dashboardheader";
import { Alert } from "../../../alert/alert";
function Add1() {
  const nav = useNavigate();
  const [getShippingAddressall, setGetShippingAddressall] = useState([]);

  const getManagedAdress = async () => {
    let userid = localStorage.getItem("user_id");
    const res = await getUserShippingAddress(userid);
    setGetShippingAddressall(res.data.data);
  };

  useEffect(() => {
    getManagedAdress();
  }, []);

  const setDefaulttAddressINAddress = async (e, id) => {
    e.preventDefault();
    let userid = localStorage.getItem("user_id");
    let payload = {
      addressId: id,
    };
    const res = await setDefaultAddress(payload);
    Alert(res.data.message ? res.data.message : null).then((result) => {
      window.location.reload();
    });
  };

  const RemoveAdd = async (id) => {
    const res = await RemoveAddress({ addressId: id });
    Alert(res.data.message).then((result) => {
      nav("/user/Add1");
    });
  };

  return (
    <div className="myAccounts">
      <Dashboardheader />
      <div className="row">
        <div class="container-fluid py-5 ">
          <div className="row">
            <div class="container-fluid py-5 ">
              <h2>Your Address</h2>
              <br></br>
              <div className="row">
                <div class="container-fluid py-0 col-md-3 ">
                  <div class="card mt-4" id="manageaddress">
                    <div class="card border h-100">
                      <div
                        class="card-body d-flex flex-column justify-content-center text-center"
                        style={{ height: "200px" }}
                      >
                        <a href="/user/AddAddress">
                          <i
                            class="fa fa-plus text-secondary text-sm mb-1"
                            aria-hidden="true"
                          ></i>
                          <h6 class="text-secondary">New Address</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid py-0 col-md-3"></div>

                {getShippingAddressall &&
                  getShippingAddressall.map((address) => {
                    if (address.defaultAddress === true) {
                      return (
                        <div class="container-fluid py-0 col-md-4 ">
                          <div class="card mt-4" id="manageaddress">
                            <div class="card border h-100">
                              <div className="row mt-4"></div>
                              <h6 style={{ marginLeft: "20px" }}>
                                <b>Default - </b>
                                <Link
                                  className="navbar-brand font-weight-normal ms-sm-3 text-white text-uppercase addHeader"
                                  to="/ "
                                  rel="tooltip"
                                  title="Designed and Coded by Creative Tim"
                                  data-placement="bottom"
                                >
                                  <img
                                    src={logo}
                                    alt="salarlogos.png"
                                    style={{ width: "100px" }}
                                  />
                                </Link>
                              </h6>

                              <hr />
                              <div
                                class="card-body d-flex flex-column justify-content-center text-center"
                                style={{ height: "300px" }}
                              >
                                <p
                                  style={{
                                    textAlign: "initial",
                                    color: "black",
                                  }}
                                >
                                  {" "}
                                  <b>{address.name}</b>{" "}
                                </p>
                                <p style={{ textAlign: "initial" }}>
                                  {address.addressLine1},
                                  <br />
                                  {address.addressLine2},
                                  <br />
                                  {address.emailId},
                                  <br />
                                  {address.mobileNo},
                                  <br />
                                  {address.city},
                                  <br />
                                  {address.state}-{address.zipCode}
                                </p>
                                <div className="row mt-4"></div>

                                <div className="row">
                                  <div className="col-md-4">
                                    <Link
                                      to={`/user/ManageAddress/${address._id}`}
                                    >
                                      <span
                                        class=" badge badge- badge-sm"
                                        style={{
                                          textTransform: "initial",
                                          fontSize: "15px",
                                          color: "black",
                                          width: "100px",
                                        }}
                                      >
                                        <b>Edit</b>
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="col-md-4">
                                    <span
                                      class=" badge badge- badge-sm"
                                      style={{
                                        textTransform: "initial",
                                        fontSize: "15px",
                                        color: "black",
                                        width: "130px",
                                      }}
                                      disabled
                                    >
                                      <b>Remove</b>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}

                {getShippingAddressall &&
                  getShippingAddressall.map((address) => {
                    if (address.defaultAddress === false) {
                      return (
                        <div class="container-fluid py-0 col-md-5 ">
                          <div class="card mt-4" id="manageaddress">
                            <div class="card border h-100">
                              <div
                                class="card-body d-flex flex-column justify-content-center text-center"
                                style={{ height: "390px" }}
                              >
                                <p
                                  style={{
                                    textAlign: "initial",
                                    color: "black",
                                  }}
                                >
                                  {" "}
                                  <b>{address.name}</b>{" "}
                                </p>
                                <p style={{ textAlign: "initial" }}>
                                  {address.addressLine1},
                                  <br />
                                  {address.addressLine2},
                                  <br />
                                  {address.emailId},
                                  <br />
                                  {address.mobileNo},
                                  <br />
                                  {address.city},
                                  <br />
                                  {address.state}-{address.zipCode}
                                </p>
                                <div className="row">
                                  <div className="col-md-4">
                                    <span
                                      class=" badge badge- badge-sm"
                                      style={{
                                        textTransform: "initial",
                                        fontSize: "15px",
                                        color: "black",
                                        width: "120px",
                                        cursor: "pointer",
                                      }}
                                      onClick={(e) =>
                                        setDefaulttAddressINAddress(
                                          e,
                                          address._id
                                        )
                                      }
                                    >
                                      <b>Set as Default</b>
                                    </span>
                                  </div>
                                  <div className="col-md-4">
                                    <Link
                                      to={`/user/ManageAddress/${address._id}`}
                                    >
                                      <span
                                        class=" badge badge- badge-sm"
                                        style={{
                                          textTransform: "initial",
                                          fontSize: "15px",
                                          color: "black",
                                          width: "100px",
                                        }}
                                      >
                                        <b>Edit</b>
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="col-md-4">
                                    <span
                                      class=" badge badge- badge-sm"
                                      style={{
                                        textTransform: "initial",
                                        fontSize: "15px",
                                        color: "black",
                                        width: "130px",
                                        cursor: "pointer",
                                      }}
                                      onClick={() => RemoveAdd(address._id)}
                                    >
                                      <b>Remove</b>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add1;
