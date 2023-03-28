/** @format */

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { getcarts, deleteOrder } from "../../ApiData/AllapiData";

const CartPage = () => {
  const [sidebarcart, setGetCarts] = useState([]);
  const [totalPrice, settotalPrice] = useState();

  const getCartData = async () => {
    const responseJson = await getcarts();
    setGetCarts(responseJson.data);
  };

  let sum = sidebarcart.reduce(function (prev, current) {
    return prev + +current.unit_price;
  }, 0);
  //console.log(sum)

  const deleteCartData = async (data) => {
    console.log(data);
    const responseJson = await deleteOrder(data);
    // console.log(responseJson);
  };

  useEffect(() => {
    getCartData();
    settotalPrice(sum);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 pb-4">
              <h3 className="">
                {" "}
                <b>Shopping Cart</b>{" "}
              </h3>
              <a href="#">Select All Items</a> <hr className="dark" />
            </div>

            <div className="col-lg-9 ms-auto me-auto">
              {sidebarcart.map((cat) => (
                // console.log(cat),
                <div className="card card-plain card-blog">
                  <div className="row align-items-center">
                    <div className="col-1 text-black pe-0">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="customRadio2"
                        />
                      </div>
                    </div>
                    <div className="col-md-2 ps-0">
                      <div className="card-image position-relative border-radius-lg">
                        <div className="blur-shadow-image">
                          <img
                            className="img border-radius-lg"
                            src={cat.prod_image}
                            alt="Image description"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-7 my-auto ms-md-3 mt-md-auto mt-4">
                      <h5 className="mb-0">
                        <div className="col-md-9">
                          <a
                            href="javascript:;"
                            className="text-black font-weight-bold font-weight-normal"
                          >
                            {cat.name}
                          </a>
                        </div>
                      </h5>
                      <small className="badge badge-success">In Stock</small>{" "}
                      <div className="row mt-2"></div>
                      &nbsp;
                      <h6 className="text-black font-weight-bold d-inline-block">
                        <b> Price</b>
                      </h6>
                      &nbsp;&nbsp;:&nbsp;&nbsp; ₹{cat.unit_price}
                      &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                      <small className="text-black font-weight-bold d-inline-block">
                        Color
                      </small>
                      &nbsp;&nbsp;:&nbsp;&nbsp; Blue &nbsp;&nbsp; &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      <small className="text-black font-weight-bold d-inline-block">
                        Size
                      </small>
                      &nbsp;&nbsp;:&nbsp;&nbsp; 8 Ram &nbsp;&nbsp; &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      <small className="text-black font-weight-bold d-inline-block">
                        Weight
                      </small>
                      &nbsp;&nbsp;:&nbsp;&nbsp; 350gms &nbsp;&nbsp; &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      <div className="mt-3"></div>
                      <small className="text-black font-weight-bold d-inline-block">
                        Sponsor Comm
                      </small>
                      &nbsp;&nbsp;:&nbsp;&nbsp;50 &nbsp;&nbsp; &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      <small className="text-black font-weight-bold d-inline-block">
                        Upline Comm
                      </small>
                      &nbsp;&nbsp;:&nbsp;&nbsp;50&nbsp;&nbsp; &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      <small className="text-black font-weight-bold d-inline-block">
                        Downline Comm
                      </small>
                      &nbsp;&nbsp;:&nbsp;&nbsp;50 &nbsp;&nbsp; &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      <div className="row mt-3">
                        <div className="col-lg-2 col-3 pe-0">
                          {" "}
                          <small className="text-black font-weight-bold d-inline-block mt-1">
                            Sponsor ID
                          </small>
                        </div>
                        <div className="col-lg-3 col-6 ps-0">
                          <div className="input-group input-group-outline w-100">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Sponsoer Id"
                            />
                          </div>
                        </div>
                        <div className="col-2 ps-0">
                          <a
                            href="#"
                            className="btn btn-sm  bg-gradient-info  mb-0 me-1"
                          >
                            Apply
                          </a>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-lg-2 col-3 pe-0">
                          {" "}
                          <small className="text-black font-weight-bold d-inline-block mt-1">
                            Promo Code{" "}
                          </small>
                        </div>
                        <div className="col-lg-3 col-6 ps-0">
                          <div className="input-group input-group-outline w-100">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Promo Code"
                            />
                          </div>
                        </div>
                        <div className="col-2 ps-0">
                          <a
                            href="#"
                            className="btn btn-sm  bg-gradient-info  mb-0 me-1"
                          >
                            Apply
                          </a>
                        </div>
                      </div>
                      <div className="row align-items-end">
                        <div className="col-3">
                          <div className="dropdown">
                            <button
                              className="btn cartBtn bg-gradient-transparent dropdown-toggle cartBtns"
                              type="button"
                              id="dropdownMenuButton"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Qty : 1
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <li>
                                <a className="dropdown-item" href="#">
                                  2
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  3
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  4
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-2 border-r1 px-0 py-3">
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => deleteCartData(cat._id)}
                            to={`#`}
                          >
                            Delete{" "}
                            <div className="d-lg-inline-block d-none">
                              &nbsp;&nbsp; &nbsp;&nbsp;
                            </div>{" "}
                            |
                          </span>
                        </div>
                        <div className="col-3 border-r1 px-0 py-3">
                          <span style={{ cursor: "pointer" }}>
                            {" "}
                            Save for later{" "}
                            <div className="d-lg-inline-block d-none">
                              &nbsp;&nbsp; &nbsp;&nbsp;
                            </div>{" "}
                            |
                          </span>
                        </div>
                        <div className="col3 border-r1 px-0 py-3">
                          <span style={{ cursor: "pointer" }}>
                            {" "}
                            Add to list{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2"></div>
                  <hr className="dark" />
                  <div className="mt-4"></div>
                </div>
              ))}
            </div>

            <div className="col-lg-3 mt-5 mt-lg-0 sidebarCartsP">
              <div className="card card-pricing">
                <div className="bg-gray-600 text-center py-3 position-relative mx-3 mt-n4 border-radius-xl">
                  <div className="z-index-1 position-relative">
                    <h5 className="text-white">Order Summary </h5>
                  </div>
                </div>
                <div className="card-body text-start">
                  <ul className="list-unstyled max-width-300 mx-auto text-black paymentTypes">
                    <li className="row">
                      <div className="col-8">
                        <i
                          className="fas fa-check text-dark opacity-6 text-sm"
                          aria-hidden="true"
                        ></i>{" "}
                        Price ({sidebarcart.length} Items):
                      </div>
                      <div className="col-4">
                        <b>₹{totalPrice}</b>.
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
                        {" "}
                        <b>₹</b>.
                      </div>
                    </li>
                    <li className="row">
                      <div className="col-8">
                        <i
                          className="fas fa-check text-dark opacity-6 text-sm"
                          aria-hidden="true"
                        ></i>
                        Packaging Charges :
                      </div>{" "}
                      <div className="col-4">
                        {" "}
                        <b>₹</b>.
                      </div>
                    </li>
                    <li className="row">
                      <div className="col-8">
                        <i
                          className="fas fa-check text-dark opacity-6 text-sm"
                          aria-hidden="true"
                        ></i>
                        Handling Charges :{" "}
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
                        Shipping Charges :{" "}
                      </div>
                      <div className="col-4">
                        <b>₹</b>.
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
                  <ul className="list-unstyled max-width-300 mx-auto text-black paymentTypes">
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
                        <b>₹</b>.
                      </div>
                    </li>
                  </ul>
                  <div className="text-center">
                    <div className="grand">
                      <b>Grand Total : ₹{totalPrice}</b>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <Link to="/checkout">
                      <button
                        className="btn bg-gradient-success mb-0 mt-4 w-100"
                        type="button"
                        name="button"
                      >
                        Proceed to Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END Blogs w/ 3 rows w/ image on left & title, text, author on end-->
                                        <!------Banner Section-->

                                        <!----Cards----> */}
      <section className="py-5 pb-0">
        <div className="container-fluid silkData">
          <h3 className="">Recommended Products</h3>
          <div className="row mt-5 ">
            <Slider {...settings}>
              <div className="col p-2">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Dolce &amp; Gabbana</a>
                    </h5>
                    <p className="mb-0">
                      Dolce &amp; Gabbana's 'Greta' tote has been crafted in
                      Italy from hard-wearing red textured-leather.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h3 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h3>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Dolce &amp; Gabbana</a>
                    </h5>
                    <p className="mb-0">
                      Dolce &amp; Gabbana's 'Greta' tote has been crafted in
                      Italy from hard-wearing red textured-leather.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h3 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h3>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col p-2">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Balmain</a>
                    </h5>
                    <p className="mb-0">
                      Balmain's mid-rise skinny jeans are cut with stretch to
                      ensure they retain skin fit but move comfortably.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h3 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h3>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product4.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product4.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Balenciaga</a>
                    </h5>
                    <p className="mb-0">
                      Balenciaga's black textured-leather wallet is finished
                      with the label's iconic 'Giant' studs.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h3 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h3>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product2.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product2.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Burberry</a>
                    </h5>
                    <p className="mb-0">
                      Burberry's black textured-cottom bomber is finished with
                      the label's iconic 'Weareable' jacket.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h3 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h3>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product2.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product2.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Burberry</a>
                    </h5>
                    <p className="mb-0">
                      Burberry's black textured-cottom bomber is finished with
                      the label's iconic 'Weareable' jacket.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h3 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h3>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* <!----Cards---->
                                        <!----Cards----> */}
      <section className="py-5 pb-0">
        <div className="container-fluid silkData">
          <h3 className=""> Your Browser History</h3>
          <div className="row mt-5 ">
            <Slider {...settings}>
              <div className="col p-2">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Dolce &amp; Gabbana</a>
                    </h5>
                    <p className="mb-0">
                      Dolce &amp; Gabbana's 'Greta' tote has been crafted in
                      Italy from hard-wearing red textured-leather.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h3 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h3>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Dolce &amp; Gabbana</a>
                    </h5>
                    <p className="mb-0">
                      Dolce &amp; Gabbana's 'Greta' tote has been crafted in
                      Italy from hard-wearing red textured-leather.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h3 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h3>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col p-2">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Balmain</a>
                    </h5>
                    <p className="mb-0">
                      Balmain's mid-rise skinny jeans are cut with stretch to
                      ensure they retain skin fit but move comfortably.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h3 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h3>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product4.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product4.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Balenciaga</a>
                    </h5>
                    <p className="mb-0">
                      Balenciaga's black textured-leather wallet is finished
                      with the label's iconic 'Giant' studs.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h3 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h3>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product2.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product2.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Burberry</a>
                    </h5>
                    <p className="mb-0">
                      Burberry's black textured-cottom bomber is finished with
                      the label's iconic 'Weareable' jacket.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h3 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h3>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product2.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product2.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Burberry</a>
                    </h5>
                    <p className="mb-0">
                      Burberry's black textured-cottom bomber is finished with
                      the label's iconic 'Weareable' jacket.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h3 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h3>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default CartPage;
