/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getcarts,
  placeOrder,
  getShippingAddress,
  getShippingDefoultAddress,
} from "../../ApiData/AllapiData";
const ProceedToPay = () => {
  const [sidebarcart, setGetCarts] = useState([]);
  const [totalPrice, settotalPrice] = useState();
  const navigate = useNavigate();
  const [getShippingAddressall, setGetShippingAddressall] = useState([]);
  const [getShippingDAddressall, setGetDShippingAddressall] = useState("");
  const getCartData = async () => {
    const responseJson = await getcarts();
    setGetCarts(responseJson.data);
  };

  let sum =
    sidebarcart &&
    sidebarcart.reduce((prev, current) => {
      return prev + +current.unit_price;
    }, 0);
  //console.log(sum)

  const setAllcountryss = async () => {
    const responseJson = await getShippingAddress();
    // console.log(responseJson);
    setGetShippingAddressall(responseJson.data);
  };
  const getshipAddr = async () => {
    const responseJson = await getShippingDefoultAddress();
    // console.log(responseJson.data);
    setGetDShippingAddressall(responseJson.data);
  };

  const randomString = (length, chars) => {
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  };

  // document.write(randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));

  const payToprocced = async pay => {
    const productMain = {
      products: pay,
      refferal_id: randomString(12),
      tranx_fees: 100,
      trnx_method: "online",
    };

    // console.log(productMain);
    const responseJson = await placeOrder(productMain);
    console.log(responseJson);
    navigate("/successfull");
  };

  useEffect(() => {
    getCartData();
    getshipAddr();
    randomString();
    setAllcountryss();
    settotalPrice(sum);
  }, []);

  return (
    <>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-lg-8 ms-auto me-auto">
              <h3 className="text-black">Delivery Address</h3>
              <hr className="dark" />
              <div className="card shadow-lg mt-4">
                <div className="card-body">
                  <table className="table align-items-center mb-0 text-black">
                    <tbody>
                      {[getShippingDAddressall].map(addr => (
                        <>
                          <tr>
                            <td>{addr && addr.name ? addr.name : null}</td>
                          </tr>
                          <tr>
                            <td>
                              {addr && addr.addressLine1
                                ? addr.addressLine1
                                : null}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {addr && addr.addressLine2
                                ? addr.addressLine2
                                : null}
                            </td>
                          </tr>
                          <tr>
                            <td>{addr && addr.city ? addr.city : null}</td>
                          </tr>
                          <tr>
                            <td>
                              {addr && addr.zipCode ? addr.zipCode : null}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {addr && addr.mobileNo ? addr.mobileNo : null}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {addr && addr.emailId ? addr.emailId : null}
                            </td>
                          </tr>
                          <tr>
                            <td>{addr && addr.GST ? addr.GST : null}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="card card-pricing">
                <div className="bg-gray-900 text-center py-3 position-relative mx-3 mt-n4 border-radius-xl">
                  <div className="z-index-1 position-relative">
                    <h5 className="text-white">Order Summary </h5>
                  </div>
                </div>
                <div className="card-body text-start">
                  <ul className="list-unstyled max-width-300 mx-auto text-black">
                    <li>
                      <i
                        className="fas fa-check text-dark opacity-6 text-sm"
                        aria-hidden="true"
                      ></i>{" "}
                      Price ({sidebarcart && sidebarcart.length}
                      Items) :<b>₹</b>.
                    </li>
                    <li>
                      <i
                        className="fas fa-check text-dark opacity-6 text-sm"
                        aria-hidden="true"
                      ></i>{" "}
                      Discount Points :<b>₹</b>.
                    </li>
                    <li>
                      <i
                        className="fas fa-check text-dark opacity-6 text-sm"
                        aria-hidden="true"
                      ></i>
                      Packaging Charges : <b>₹</b>.
                    </li>
                    <li>
                      <i
                        className="fas fa-check text-dark opacity-6 text-sm"
                        aria-hidden="true"
                      ></i>
                      Handling Charges : <b>₹</b>.
                    </li>
                    <li>
                      <i
                        className="fas fa-check text-dark opacity-6 text-sm"
                        aria-hidden="true"
                      ></i>
                      Shipping Charges : <b>₹</b>.
                    </li>
                  </ul>
                  <div className="row my-3">
                    <button
                      className="btn bg-gradient-primary mb-0 mt-4 w-100"
                      type="button"
                      name="button"
                    >
                      Payment Type
                    </button>
                  </div>
                  <ul className="list-unstyled max-width-300 mx-auto text-black">
                    <li className="row">
                      <div className="col-8">
                        <span className="form-check ps-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Wallet : &nbsp;&nbsp;
                          </label>
                        </span>
                      </div>
                      <div className="col-4">
                        <b>₹</b>.
                      </div>
                    </li>
                    <li className="row">
                      <div className="col-8">
                        <span className="form-check ps-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Shopping Amount :
                          </label>
                        </span>
                      </div>
                      <div className="col-2">
                        <b>₹</b>.
                      </div>
                    </li>
                    <li className="row">
                      <div className="col-8">
                        <i
                          className="fas fa-check text-dark opacity-6 text-sm"
                          aria-hidden="true"
                        ></i>
                        <label className="form-check-label">
                          Admin Fee (5%)
                        </label>{" "}
                        : &nbsp;&nbsp;
                      </div>
                      <div className="col-4">
                        <b>₹</b>.
                      </div>
                    </li>
                    <li className="row">
                      <div className="col-8">
                        <span className="form-check ps-0">
                          <input
                            className="form-check-input m-0"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault3"
                          >
                            Online Payment : &nbsp;&nbsp;
                          </label>
                        </span>
                      </div>
                      <div className="col-4">
                        <b>₹</b>.
                      </div>
                    </li>
                    <li className="row">
                      <div className="col-8">
                        <i
                          className="fas fa-check text-dark opacity-6 text-sm"
                          aria-hidden="true"
                        ></i>
                        <label className="form-check-label">
                          Transaction Fee{" "}
                        </label>{" "}
                        : &nbsp;&nbsp;
                      </div>
                      <div className="col-4">
                        <b>₹</b>.
                      </div>
                    </li>
                  </ul>
                  <div className="text-center">
                    <div className="grand">
                      <b>Grand Total : ₹.{totalPrice}</b>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <button
                      className="btn bg-gradient-primary mb-0 mt-4 w-100"
                      type="button"
                      onClick={() => payToprocced(sidebarcart)}
                      name="button"
                    >
                      PROCEED TO PAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProceedToPay;
