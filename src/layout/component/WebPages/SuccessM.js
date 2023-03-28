/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrder } from "../../ApiData/AllapiData";

import { useSelector, useDispatch } from "react-redux";

const SuccessM = () => {
  // const orderAll = async () => {
  //   const responseJson = await getOrder();
  //   console.log(responseJson.data);
  //   // setOrderGet(responseJson.data[0]);
  //   // console.log(orderGet);
  // };

  // useEffect(() => {
  //   orderAll();
  // }, []);

  const payment = useSelector(state => state);

  let order_id = payment.state.payment.razorpay_order_id
    ? payment.state.payment.razorpay_order_id
    : "";

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-auto">
            <h3 className="display-6 text-bolder text-gradient text-success">
              Your Order Placed Successfully
            </h3>
            <h3 className="text-normal">
              Order No.{" "}
              <span className="text-bolder text-success">
                {order_id ? order_id : null}
              </span>{" "}
            </h3>
            <p className="lead">
              We suggest you to go to the homepage while we solve this issue.
            </p>
            <Link to="/">
              <button type="button" className="btn bg-gradient-dark mt-4">
                Go to Homepage
              </button>
            </Link>
          </div>
          <div className="col-lg-6 my-auto position-relative">
            <img
              className="w-100 position-relative"
              src="../images/orders.jpg"
              alt="orders"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SuccessM;
