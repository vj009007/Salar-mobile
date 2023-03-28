/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ProductList from "../footerPages/ProductList";
import { getcarts } from "../../ApiData/AllapiData";
const CartSidebar = () => {
  const [sidebarcart, setGetCarts] = useState([]);
  const [totalPrice, settotalPrice] = useState();

  const getCartData = async () => {
    const responseJson = await getcarts();
    setGetCarts(responseJson.data);
  };
  //  console.log(sidebarcart);

  //   console.log(sum)

  useEffect(() => {
    if (sidebarcart === undefined) {
      let sum = 0;
      settotalPrice(sum);
    } else {
      let sum = sidebarcart.reduce(function(prev, current) {
        return prev + +current.unit_price;
      }, 0);
      settotalPrice(sum);
    }
    getCartData();
  }, []);

  return (
    <>
      {sidebarcart === undefined ? (
        <></>
      ) : (
        <div className="cart">
          <h1>Subtotal</h1>
          <h2> ₹{totalPrice}</h2>

          <Link to="/checkout">
            <button
              className="btn bg-gradient-primary mb-0 mt-lg-auto w-100"
              type="button"
              name="button"
            >
              Check Out
            </button>
          </Link>
          <hr></hr>
          <div
            className="my-gallery cont-img d-flex flex-column h-100"
            itemscope=""
            itemtype="http://schema.org/ImageGallery"
            data-pswp-uid="1"
          >
            {sidebarcart.map(cat => (
              <figure
                itemprop="associatedMedia"
                className="ms-3"
                itemscope=""
                itemtype="http://schema.org/ImageObject"
              >
                <a to="#" itemprop="contentUrl" data-size="40*50">
                  <img
                    className="w-100 min-height-100 max-height-100 border-radius-lg"
                    src={cat.prod_image}
                    alt="Image description"
                    loading="lazy"
                  />
                </a>
                <span>₹{cat.unit_price}</span>
              </figure>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default CartSidebar;
