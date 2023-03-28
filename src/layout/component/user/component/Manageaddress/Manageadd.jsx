/** @format */

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Alert } from "../../../alert/alert";
import {
  addShippingAddress,
  getAddressOnly,
  UpdateAddress,
} from "../../repo/address";
import Dashboardheader from "../Dashboard/dashboardheader";
import { getAllCountry } from "../../../repo/country";

function Manageadd() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [address, setAddress] = useState({
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    zipCode: "",
    emailId: "",
    mobileNo: "",
    countryId: "",
    landmark: "",
    state: "",
  });

  const [countrysAll, setCountrys] = useState([]);

  const handlechange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const getAllcountryss = async () => {
    const responseJson = await getAllCountry();
    setCountrys(responseJson.data.data);
  };

  const getAddOnly = async () => {
    const res = await getAddressOnly(id);
    const resda = res.data.data;
    const a = resda.shippingAddresses;
    setAddress({
      ...address,
      name: a[0].name,
      addressLine1: a[0].addressLine1,
      addressLine2: a[0].addressLine2,
      city: a[0].city,
      zipCode: a[0].zipCode,
      emailId: a[0].emailId,
      mobileNo: a[0].mobileNo,
      countryId: a[0].countryId,
      landmark: a[0].landmark,
      state: a[0].state,
    });
  };

  useEffect(() => {
    getAllcountryss();
  }, []);

  useEffect(() => {
    getAddOnly();
  }, [id]);

  const Handleclick = async (e) => {
    e.preventDefault();
    if (id) {
      address.addressId = id;
      const res = await UpdateAddress(address);
      Alert(res.data.message).then((result) => {
        navigate("/user/Add1");
      });
    } else {
      const {
        name,
        addressLine1,
        addressLine2,
        city,
        zipCode,
        emailId,
        mobileNo,
        countryId,
        landmark,
        state,
      } = address;
      if (
        name === "" ||
        addressLine1 === "" ||
        addressLine2 === "" ||
        city === "" ||
        zipCode === "" ||
        emailId === "" ||
        mobileNo === "" ||
        countryId === "" ||
        landmark === "" ||
        state === ""
      ) {
        Alert("Please fill all the fields.");
      } else {
        const payload = {
          name: address.name,
          addressLine1: address.addressLine1,
          addressLine2: address.addressLine2,
          city: address.city,
          countryId: address.countryId,
          zipCode: address.zipCode,
          mobileNo: address.mobileNo,
          emailId: address.emailId,
          state: address.state,
          defaultAddress: false,
        };

        const res = await addShippingAddress(payload);
        Alert(res.data.message);
        if (res.data.status) {
          navigate("/user/Add1");
        }
      }
    }
  };
  return (
    <div className="myAccounts">
      <Dashboardheader />
      <div className="row">
        <div class="container-fluid py-5 col-md-10 ">
          <div
            class="container-fluid py-5 col-md-11 card mt-4"
            id="manageaddress"
          >
            <div class="card-header d-flex">
              <h3 class="mb-0">Manage Address</h3>
            </div>
            <div class="card-body pt-0">
              <div class="row">
                <div className="col-md-12">
                  <label class="form-label">Country</label>
                  <select
                    onChange={handlechange}
                    name="countryId"
                    className="form-select"
                    aria-label="Default select example"
                    value={address.countryId}
                  >
                    <option value="">Please Select</option>
                    {countrysAll.map((CN) => {
                      return (
                        <>
                          <option value={CN._id}>{CN.name}</option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="row mt-4">
                <div class="col-12">
                  <label class="form-label">Full Name</label>
                  <div class="input-group">
                    <input
                      name="name"
                      class="form-control"
                      type="text"
                      placeholder="Full Name"
                      required="required"
                      onChange={handlechange}
                      value={address.name}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div class="row">
                <div class="col-12">
                  <label class="form-label">Mobile Number</label>
                  <div class="input-group">
                    <input
                      name="mobileNo"
                      class="form-control"
                      type="text"
                      placeholder="Mobile no"
                      required="required"
                      onChange={handlechange}
                      value={address.mobileNo}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div class="col-12">
                  <label class="form-label">Email</label>
                  <div class="input-group">
                    <input
                      id="lastName"
                      name="emailId"
                      class="form-control"
                      type="text"
                      placeholder="Email Id"
                      required="required"
                      onChange={handlechange}
                      value={address.emailId}
                    />
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <label class="form-label">Address Line 1</label>
                  <div class="input-group">
                    <input
                      id="lastName"
                      name="addressLine1"
                      class="form-control"
                      type="text"
                      placeholder="Address Line 1"
                      required="required"
                      onChange={handlechange}
                      value={address.addressLine1}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div class="col-12">
                  <label class="form-label">Address Line 2</label>
                  <div class="input-group">
                    <input
                      id="lastName"
                      name="addressLine2"
                      class="form-control"
                      type="text"
                      placeholder="Address Line 2"
                      required="required"
                      onChange={handlechange}
                      value={address.addressLine2}
                    />
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <label class="form-label">Landmark</label>
                  <div class="input-group">
                    <input
                      id="lastName"
                      name="landmark"
                      class="form-control"
                      type="text"
                      placeholder="Landmark"
                      required="required"
                      onChange={handlechange}
                      value={address.landmark}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div class="col-12">
                  <label class="form-label">Pincode</label>
                  <div class="input-group">
                    <input
                      id="lastName"
                      name="zipCode"
                      class="form-control"
                      type="text"
                      placeholder="Pincode"
                      required="required"
                      onChange={handlechange}
                      value={address.zipCode}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div class="col-12">
                  <label class="form-label">City</label>
                  <div class="input-group">
                    <input
                      id="lastName"
                      name="city"
                      class="form-control"
                      type="text"
                      placeholder="City"
                      required="required"
                      onChange={handlechange}
                      value={address.city}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div class="col-12">
                  <label class="form-label">State</label>
                  <div class="input-group">
                    <input
                      id="lastName"
                      name="state"
                      class="form-control"
                      type="text"
                      placeholder="State"
                      required="required"
                      onChange={handlechange}
                      value={address.state}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="btnsubmit" style={{ textAlign: "center" }}>
                  <button
                    type="button"
                    class=" b1 btn color btn-lg"
                    style={{ marginLeft: "10px" }}
                    onClick={Handleclick}
                  >
                    Submit
                  </button>

                  <button
                    type="button"
                    class=" btn bg-gradient-light btn-lg"
                    style={{ marginLeft: "10px" }}
                  >
                    <b>Cancel</b>
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

export default Manageadd;
