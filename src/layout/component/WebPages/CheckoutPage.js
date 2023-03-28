/** @format */

import React, { useEffect, useState } from "react";
import AddressAdd from "./Address";
import { Link, useNavigate } from "react-router-dom";
import {
  getShippingAddress,
  getcarts,
  getShippingDefoultAddress,
  placeOrder,
} from "../../ApiData/AllapiData";

import {
  getUserManageShippingAddress,
  getUserShippingAddress,
  getProductById,
  getGameProductById,
} from "../repo/checkout";

import { createOrder } from "../repo/razorpay";
import { useSelector, useDispatch } from "react-redux";
import { randomString } from "../../../utils/common";

import { payment } from "../../redux/stateSlice";
const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state);

  let gid, eid;
  if (cart.state.cart.game_prod_id) {
    gid = cart.state.cart.game_prod_id;
  } else {
    eid = cart.state.cart.ecomm_prod_id;
  }
  const [isVisible, setIsVisible] = useState(true);
  const [getShippingAddressall, setGetShippingAddressall] = useState([]);
  const [getShippingDAddressall, setGetDShippingAddressall] = useState("");
  const [sidebarcart, setGetCarts] = useState([]);
  const [totalPrice, settotalPrice] = useState();
  const [p, setP] = useState();
  const [gp, setGp] = useState();
  const addressUp = async (e) => {
    console.log(e);
    if (e === "new") {
      setIsVisible(false);
    } else if (e === "newTwo") {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
  };

  const id = localStorage.getItem("user_id")
    ? localStorage.getItem("user_id")
    : localStorage.getItem("dataAuthUserID");
  const setAllcountryss = async () => {
    const res = await getUserManageShippingAddress(id);
    setGetShippingAddressall(res.data.data);
  };

  const getshipAddr = async () => {
    const res = await getUserShippingAddress(id);
    setGetDShippingAddressall(res.data.data);
  };

  const getCartData = async () => {
    const responseJson = await getcarts();
    setGetCarts(responseJson.data);
  };

  let sum =
    sidebarcart &&
    sidebarcart.reduce(function (prev, current) {
      return prev + +current.unit_price;
    }, 0);
  //console.log(sum)

  useEffect(() => {
    getshipAddr();
    setAllcountryss();
    getCartData();
    setIsVisible(isVisible);
    settotalPrice(sum);
  }, []);

  //
  const getProduct = async (id) => {
    const res = await getProductById(id);
    setP(res.data.data);
  };

  const getGameProduct = async (id) => {
    const res = await getGameProductById(id);
    setGp(res.data.data);
  };
  useEffect(() => {
    if (eid) {
      getProduct(eid);
    }

    if (gid) {
      getGameProduct(gid);
    }
  }, [eid, gid]);

  let grand_total =
    (sidebarcart && sidebarcart.length) * (p && p.unit_price) -
    (p && p.discout_point_aplicable) +
    +(p && p.pck_chrgs) +
    +(p && p.handling_chrgs) +
    +(p && p.courier_chr) +
    +10;

  if (gid) {
    grand_total = (gp && gp.unit_price) + +10;
  } else {
    grand_total =
      (p && p.length) * (p && p.unit_price) -
      (p && p.discout_point_aplicable) +
      +(p && p.pck_chrgs) +
      +(p && p.handling_chrgs) +
      +(p && p.courier_chr) +
      +10;
  }

  const payToprocced = async () => {
    let productsData;

    if (cart.state.cart.ecomm_prod_id) {
      productsData = {
        ecomm_prod_id: p._id,
      };
    }

    const productMain = {
      products: sidebarcart,
      refferal_id: randomString(12),
      tranx_fees: 10,
      trnx_method: "online",
    };
    const responseJson = await placeOrder(productMain);
    console.log(responseJson.data);
    if (responseJson.data) {
      const data = {
        amount: grand_total * 100,
        currency: "INR",
        receipt: productMain.refferal_id,
        notes: {
          order_data: responseJson.data[0]._id,
        },
      };
      const order = await createOrder(data);
      console.log(order.data.data.id);
      // if (order.data.data.id) {
      let idD = order.data.data.id ? order.data.data.id : "";
      let amount = order.data.data.amount ? order.data.data.amount : "";
      new window.Razorpay({
        key: "rzp_test_NKB8R4mtU3w1pL",
        redirect: true,
      });
      var data1 = {
        order_id: idD,
        amount: amount * 100,
        email: "salartest123@gmail.com",
        contact: 9999999999,
        description: "salar create order",
        handler: (res) => {
          dispatch(payment(res));
          navigate("/successfull");
        },
      };

      var rzp1 = new window.Razorpay(data1);
      rzp1.on("payment.failed", function (response) {
        dispatch(payment(response));
      });

      rzp1.open();
      // }
    }
    // navigate("/successfull");
  };

  return (
    <>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 ms-auto me-auto">
              <h3 className="text-black">Your Address</h3>
              <hr className="dark" />
              <div className="my-4">
                {[getShippingDAddressall].map((addr) => (
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      onClick={() => addressUp("newTwo")}
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault6"
                      checked
                    />
                    <label className="form-check-label" for="flexRadioDefault6">
                      {addr && addr.addressLine1 ? addr.addressLine1 : null}
                      {", "}
                      {addr && addr.addressLine2 ? addr.addressLine2 : null}
                    </label>
                  </div>
                ))}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onClick={() => addressUp("new")}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault7"
                  />
                  <label className="form-check-label" for="flexRadioDefault7">
                    Add New Address
                  </label>
                </div>
              </div>
              <hr className="dark" />
              {!isVisible ? (
                <AddressAdd />
              ) : (
                <div className="row">
                  <div className="col-md-4">
                    <button
                      className="btn bg-gradient-warning mb-0 mt-4 w-100 text-black"
                      type="button"
                      name="button"
                    >
                      Use This Address
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-3 mt-5 mt-lg-0 orderCheckout">
              <div className="card card-pricing">
                <div className="bg-gray-600 text-center py-3 position-relative mx-3 mt-n4 border-radius-xl">
                  <div className="z-index-1 position-relative">
                    <h5 className="text-white">Order Summary </h5>
                  </div>
                </div>
                <div className="card-body text-start">
                  {cart.state.cart.game_prod_id ? (
                    <>
                      {" "}
                      <ul className="list-unstyled max-width-300 mx-auto text-black">
                        <li className="row">
                          <div className="col-8">
                            <i
                              className="fas fa-check text-dark opacity-6 text-sm"
                              aria-hidden="true"
                            ></i>{" "}
                            Price :
                          </div>
                          <div className="col-4">
                            {" "}
                            <b>₹ {gp && gp.unit_price}</b>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-8">
                            <i
                              className="fas fa-check text-dark opacity-6 text-sm"
                              aria-hidden="true"
                            ></i>{" "}
                            Discount Points :
                          </div>
                          <div className="col-4">
                            <b>₹ {p && p.discout_point_aplicable}</b>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-8">
                            {" "}
                            <i
                              className="fas fa-check text-dark opacity-6 text-sm"
                              aria-hidden="true"
                            ></i>
                            Packaging Charges :
                          </div>
                          <div className="col-4">
                            <b>₹{p && p.pck_chrgs}</b>.
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-8">
                            {" "}
                            <i
                              className="fas fa-check text-dark opacity-6 text-sm"
                              aria-hidden="true"
                            ></i>
                            Handling Charges :
                          </div>
                          <div className="col-4">
                            {" "}
                            <b>₹ {p && p.handling_chrgs}</b>.
                          </div>
                        </li>

                        <li className="row">
                          <div className="col-8">
                            {" "}
                            <i
                              className="fas fa-check text-dark opacity-6 text-sm"
                              aria-hidden="true"
                            ></i>
                            Shipping Charges :{" "}
                          </div>
                          <div className="col-4">
                            <b>₹ {p && p.courier_chr}</b>.
                          </div>
                        </li>
                      </ul>
                      <div className="row my-3">
                        <button
                          className="btn bg-gradient-info mb-0 mt-4 w-100"
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
                            </span>{" "}
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
                            ></i>{" "}
                            <label className="form-check-label">
                              Transaction Fee{" "}
                            </label>{" "}
                            : &nbsp;&nbsp;
                          </div>
                          <div className="col-4">
                            <b>₹</b> 10
                          </div>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <ul className="list-unstyled max-width-300 mx-auto text-black">
                        <li className="row">
                          <div className="col-8">
                            {" "}
                            <i
                              className="fas fa-check text-dark opacity-6 text-sm"
                              aria-hidden="true"
                            ></i>{" "}
                            Price ({p && p.length} Items) :
                          </div>
                          <div className="col-4">
                            {" "}
                            <b>₹ {p && p.length * (p && p.unit_price)}</b>.
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-8">
                            {" "}
                            <i
                              className="fas fa-check text-dark opacity-6 text-sm"
                              aria-hidden="true"
                            ></i>{" "}
                            Discount Points :
                          </div>
                          <div className="col-4">
                            {" "}
                            <b>₹ {p && p.discout_point_aplicable}</b>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-8">
                            {" "}
                            <i
                              className="fas fa-check text-dark opacity-6 text-sm"
                              aria-hidden="true"
                            ></i>
                            Packaging Charges :
                          </div>
                          <div className="col-4">
                            {" "}
                            <b>₹{p && p.pck_chrgs}</b>.
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-8">
                            <i
                              className="fas fa-check text-dark opacity-6 text-sm"
                              aria-hidden="true"
                            ></i>
                            Handling Charges :
                          </div>
                          <div className="col-4">
                            <b>₹ {p && p.handling_chrgs}</b>.
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-8">
                            {" "}
                            <i
                              className="fas fa-check text-dark opacity-6 text-sm"
                              aria-hidden="true"
                            ></i>
                            Shipping Charges :
                          </div>
                          <div className="col-4">
                            {" "}
                            <b>₹ {p && p.courier_chr}</b>.
                          </div>
                        </li>
                      </ul>
                      <div className="row my-3">
                        <button
                          className="btn bg-gradient-info mb-0 mt-4 w-100"
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
                            </span>{" "}
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
                            ></i>{" "}
                            <label className="form-check-label">
                              Transaction Fee{" "}
                            </label>{" "}
                            : &nbsp;&nbsp;
                          </div>
                          <div className="col-4">
                            <b>₹</b> 10
                          </div>
                        </li>
                      </ul>
                    </>
                  )}
                  <div className="text-center">
                    <div className="grand">
                      <b>Grand Total : ₹{grand_total}</b>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <button
                      className="btn bg-gradient-success mb-0 mt-4 w-100"
                      type="button"
                      name="button"
                      onClick={payToprocced}
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
export default CheckoutPage;
