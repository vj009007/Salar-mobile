/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AddShippingAddress } from "../../ApiData/AllapiData";
const AddressAdd = () => {
  const [name, setName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [countryId, setCountryId] = useState("");
  const [GST, setGST] = useState("");

  const navigate = useNavigate();

  const addNewAddress = async () => {
    const newSignUp = {
      name,
      addressLine1,
      addressLine2,
      city,
      zipCode,
      countryId,
      emailId,
      mobileNo,
      GST,
      countryId: "630f516684310d4d2a98baf2",
    };
    //  console.log(newSignUp);
    //  return false;
    try {
      if (!name || !addressLine1 || !emailId) {
        return alert("Please fill all the fields");
      } else {
        // alert("hello");
        const responseJson = AddShippingAddress(newSignUp);
        // console.log(responseJson);

        // setIsVisible(current => !current);
        //   localStorage.setItem("data", responseJson);

        // console.log(data.access_token);
        navigate("/checkout");
      }
    } catch (err) {
      // console.log(err.message);
      // message.error("Invalid Credentials", 10);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div class="row">
        <div class="col-12 col-lg-8">
          <form class="multisteps-form__form mb-8 formdatas">
            <div
              class="card multisteps-form__panel p-3 border-radius-xl bg-white js-active"
              data-animation="FadeIn"
            >
              <h5 class="font-weight-bolder">Address</h5>
              <div class="multisteps-form__content">
                <div class="row mt-3">
                  <div class="col">
                    <label>Name</label>
                    <input
                      class="multisteps-form__input form-control"
                      type="text"
                      placeholder="Enter Name"
                      onChange={e => setName(e.target.value)}
                      name="name"
                    />
                  </div>
                  <div class="col">
                    <label>Mobile No</label>
                    <input
                      class="multisteps-form__input form-control"
                      type="text"
                      placeholder="Enter mobileNo"
                      onChange={e => setMobileNo(e.target.value)}
                      name="MobileNo"
                    />
                  </div>

                  <div class="row mt-3">
                    <div class="col">
                      <label>Email Id</label>
                      <input
                        class="multisteps-form__input form-control"
                        type="text"
                        placeholder="Enter emailId"
                        onChange={e => setEmailId(e.target.value)}
                        name="emailId"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col">
                      <label>Address 1</label>
                      <input
                        class="multisteps-form__input form-control"
                        type="text"
                        placeholder="eg. Street 111"
                        onChange={e => setAddressLine1(e.target.value)}
                        name="AddressLine1"
                      />
                    </div>
                    <div class="col">
                      <label>Address 2</label>
                      <input
                        class="multisteps-form__input form-control"
                        type="text"
                        placeholder="eg. Street 221"
                        onChange={e => setAddressLine2(e.target.value)}
                        name="AddressLine2"
                      />
                    </div>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col">
                    <label>City</label>
                    <input
                      class="multisteps-form__input form-control"
                      type="text"
                      placeholder="eg. Tokyo"
                      onChange={e => setCity(e.target.value)}
                      name="City"
                    />
                  </div>
                  <div class="col">
                    <label>State</label>
                    <select class="multisteps-form__select form-control">
                      <option selected="selected">...</option>
                      <option value="1">State 1</option>
                      <option value="2">State 2</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div class="col">
                    <label>Zip</label>
                    <input
                      class="multisteps-form__input form-control"
                      type="text"
                      placeholder="7 letters"
                      onChange={e => setZipCode(e.target.value)}
                      name="ZipCode"
                    />
                  </div>
                  <div class="col">
                    <label>GST</label>
                    <input
                      class="multisteps-form__input form-control"
                      type="text"
                      placeholder="GST"
                      name="GST"
                      onChange={e => setGST(e.target.value)}
                    />
                  </div>
                </div>
                <div class="button-row d-flex mt-4">
                  <button
                    onClick={() => addNewAddress()}
                    class="btn bg-gradient-primary ms-auto mb-0 js-btn-next"
                    type="button"
                    title="Next"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddressAdd;
