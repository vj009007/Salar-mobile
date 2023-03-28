/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  getAllproducts,
  productCatID,
  postcart,
} from "../../ApiData/AllapiData";
import CartSidebar from "../WebPages/CartSidebar";
const FilterPage = () => {
  const params = useParams();
  const ID = params.id;
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [fetchPrd, setFetchPrd] = useState([]);
  const [fetchPrdCat, setFetchPrdCat] = useState([]);
  const [cartDataPush, setCartDataPush] = useState([]);
  const [limit, setLimit] = useState();
  const [offset, setOffset] = useState();
  const [categorys, setCategory] = useState();

  const getIDProducts = async ID => {
    //  const authToken = localStorage.getItem("authToken");
    if (params.id) {
      try {
        const prdData = {
          category: params.id,
        };
        const responseJson = await productCatID(prdData);
        // console.log("console products : ", responseJson.data);
        setFetchPrd(responseJson.data);
        setFetchPrdCat(responseJson.data);
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  };

  useEffect(() => {
    console.log(localStorage.getItem("authToken"));
    getAllProducts();
    getIDProducts();
  }, [ID]);
  const getAllProducts = async () => {
    try {
      //  const authToken = localStorage.getItem("authToken");
      const responseJson = await getAllproducts();
      setProducts(responseJson.data);
      // console.log("datas", responseJson.data);
    } catch (err) {
      console.log(err);
      // message.error("Server error");
    }
  };

  const cardClear = async () => {
    setIsVisible(current => !current);
  };
  const addTocartGame = async event => {
    const userId = localStorage.getItem("dataAuthUserID");
    if (!!userId) {
      // const user_id = localStorage.getItem("dataAuthUserID");
      // const ecomm_prod_id = event._id;
      // const quantity = event.min_purchase_qty;
      const ecomm_prod_id = event._id;
      const quantity = event.min_purchase_qty;
      const unit_price = event.unit_price;
      const prod_image = event.prod_image;
      const name = event.name;
      const sku = event.sku;
      const dataS = {
        userId,
        ecomm_prod_id,
        quantity,
        unit_price,
        prod_image,
        name,
        sku,
      };
      cartDataPush.push(dataS);
      const responseJson = await postcart([dataS]);
      // console.log("he", event);
      // const responseJson = await postcart(JSON.stringify(cartDataPush));
      // console.log(responseJson);
    } else {
      navigate("/signin");
    }

    setIsVisible(current => !current);
  };

  const buyCartGame = async (event, cates) => {
    const userId = localStorage.getItem("dataAuthUserID");
    console.log(event, cates);
    // return false;
    if (!!userId) {
      // const user_id = localStorage.getItem("dataAuthUserID");
      // const ecomm_prod_id = event._id;
      // const quantity = event.min_purchase_qty;
      const ecomm_prod_id = event._id;
      const quantity = event.min_purchase_qty;
      const unit_price = event.unit_price;
      const prod_image = event.prod_image;
      const name = event.name;
      const sku = event.sku;
      const dataS = {
        userId,
        ecomm_prod_id,
        quantity,
        unit_price,
        prod_image,
        name,
        sku,
      };
      cartDataPush.push(dataS);
      const responseJson = await postcart([dataS]);
      // console.log("he", event);
      navigate("/checkout");
      // return false;

      // console.log(responseJson);
    } else {
      navigate("/signin");
    }
  };

  return (
    <>
      <div className="wrapper-filter silkDataFilter">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-md-2 px-2">
              <div className="category py-4">
                <h6 className="m-0">Categories</h6>
                <ul className="main">
                  <li className="categ">
                    Electronics
                    <ul className="sub-cat">
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Cameras & Photography</a>
                      </li>
                      <li>
                        <a href="#">Car & Vehicle Electronics</a>
                      </li>
                      <li>
                        <a href="#">Computers & Accessories</a>
                      </li>
                      <li>
                        <a href="#">GPS & Accessories</a>
                      </li>
                      <li>
                        <a href="#">Home Audio</a>
                      </li>
                      <li>
                        <a href="#">Tablets</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <h6 className="m-0">Brand</h6>
                <form action="" className="form">
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck1"
                    />
                    <label className="form-check-label" for="customCheck1">
                      Apple
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck2"
                    />
                    <label className="form-check-label" for="customCheck2">
                      Apple
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck3"
                    />
                    <label className="form-check-label" for="customCheck3">
                      Apple
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck4"
                    />
                    <label className="form-check-label" for="customCheck4">
                      Apple
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck5"
                    />
                    <label className="form-check-label" for="customCheck5">
                      Apple
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck6"
                    />
                    <label className="form-check-label" for="customCheck6">
                      Apple
                    </label>
                  </div>
                </form>
                <h6 className="m-0">Top Brands</h6>
                <form action="" className="form">
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck1"
                    />
                    <label className="form-check-label" for="customCheck1">
                      Apple
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck2"
                    />
                    <label className="form-check-label" for="customCheck2">
                      Apple
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck3"
                    />
                    <label className="form-check-label" for="customCheck3">
                      Apple
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck4"
                    />
                    <label className="form-check-label" for="customCheck4">
                      Apple
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck5"
                    />
                    <label className="form-check-label" for="customCheck5">
                      Apple
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck6"
                    />
                    <label className="form-check-label" for="customCheck6">
                      Apple
                    </label>
                  </div>
                </form>
                <h6 className="m-0">Top Brands</h6>
                <form action="" className="form">
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck2"
                    />
                    <label className="form-check-label" for="customCheck2">
                      <span>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                      </span>
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck3"
                    />
                    <label className="form-check-label" for="customCheck3">
                      <span>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                      </span>
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck3"
                    />
                    <label className="form-check-label" for="customCheck3">
                      <span>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                      </span>
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck4"
                    />
                    <label className="form-check-label" for="customCheck4">
                      <span>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                      </span>
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="customCheck5"
                    />
                    <label className="form-check-label" for="customCheck5">
                      <span>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                        <i className="far fa-star" aria-hidden="true"></i>
                      </span>
                    </label>
                  </div>
                </form>
                <h6 className="m-0">New Arrivals</h6>
                <form action="" className="form">
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="l30"
                    />
                    <label className="form-check-label" for="l30">
                      Last 30 Days
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="l40"
                    />
                    <label className="form-check-label" for="l40">
                      Last 40 Days
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="l50"
                    />
                    <label className="form-check-label" for="l50">
                      Last 50 Days
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="l60"
                    />
                    <label className="form-check-label" for="l60">
                      Last 60 Days
                    </label>
                  </div>
                </form>
                <h6 className="m-0">Colors</h6>
                <div className="color holder">
                  <div className="color select">
                    <div className="red color bar"></div>
                    <div className="color name">Red</div>
                  </div>
                  <div className="color select">
                    <div className="clay color bar"></div>
                    <div className="color name">Clay</div>
                  </div>
                  <div className="color select">
                    <div className="brown color bar"></div>
                    <div className="color name">Brown</div>
                  </div>
                  <div className="color select">
                    <div className="white color bar"></div>
                    <div className="color name">White</div>
                  </div>
                  <div className="color select">
                    <div className="black color bar"></div>
                    <div className="color name">Black</div>
                  </div>
                  <div className="color select">
                    <div className="blue color bar"></div>
                    <div className="color name">Blue</div>
                  </div>
                  <div className="color select">
                    <div className="burg color bar"></div>
                    <div className="color name">Burgandy</div>
                  </div>
                  <div className="color select">
                    <div className="green color bar"></div>
                    <div className="color name">Green</div>
                  </div>
                  <div className="color select">
                    <div className="beige color bar"></div>
                    <div className="color name">Beige</div>
                  </div>
                  <div className="color select">
                    <div className="tan color bar"></div>
                    <div className="color name">Tan</div>
                  </div>
                  <div className="color select">
                    <div className="dkgray color bar"></div>
                    <div className="color name">Dkgray</div>
                  </div>
                  <div className="color select">
                    <div className="gray color bar"></div>
                    <div className="color name">Gray</div>
                  </div>
                </div>
                <h6 className="m-0 pt-3">Size</h6>
                <form action="" className="form">
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss"
                    />
                    <label className="form-check-label" for="ss">
                      Small
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss1"
                    />
                    <label className="form-check-label" for="ss1">
                      Extra Small
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss2"
                    />
                    <label className="form-check-label" for="ss2">
                      Medium
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss3"
                    />
                    <label className="form-check-label" for="ss3">
                      large
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss4"
                    />
                    <label className="form-check-label" for="ss4">
                      Extra Large
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss5"
                    />
                    <label className="form-check-label" for="ss5">
                      XX Large
                    </label>
                  </div>
                </form>
                <h6 className="m-0 pt-3">Material</h6>
                <form action="" className="form">
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss"
                    />
                    <label className="form-check-label" for="ss">
                      Carten
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss1"
                    />
                    <label className="form-check-label" for="ss1">
                      Slik
                    </label>
                  </div>
                </form>
                <h6 className="m-0 pt-3">Price Range</h6>
                <form action="" className="form">
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss"
                    />
                    <label className="form-check-label" for="ss">
                      1000 - 2000
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss1"
                    />
                    <label className="form-check-label" for="ss1">
                      2000 - 4000
                    </label>
                  </div>
                </form>
                <h6 className="m-0 pt-3">Deals</h6>
                <form action="" className="form">
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss"
                    />
                    <label className="form-check-label" for="ss">
                      Hot Deal
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss1"
                    />
                    <label className="form-check-label" for="ss1">
                      Flash Deal
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss1"
                    />
                    <label className="form-check-label" for="ss1">
                      50%
                    </label>
                  </div>
                </form>
                <h6 className="m-0 pt-3">In Stock</h6>
                <div className="form-check is-filled">
                  <input className="form-check-input" type="checkbox" id="ss" />
                  <label className="form-check-label" for="ss">
                    In Stock
                  </label>
                </div>
                <h6 className="m-0 pt-3">Sellers</h6>
                <form action="" className="form">
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss"
                    />
                    <label className="form-check-label" for="ss">
                      Small
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss1"
                    />
                    <label className="form-check-label" for="ss1">
                      Extra Small
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss2"
                    />
                    <label className="form-check-label" for="ss2">
                      Medium
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss3"
                    />
                    <label className="form-check-label" for="ss3">
                      large
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss4"
                    />
                    <label className="form-check-label" for="ss4">
                      Extra Large
                    </label>
                  </div>
                  <div className="form-check is-filled">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="ss5"
                    />
                    <label className="form-check-label" for="ss5">
                      XX Large
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-10">
              <header>
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div
                        className="page-header min-vh-75"
                        style={{
                          backgroundImage:
                            "url('https://demos.creative-tim.com/material-kit-pro/assets/img/bg10.jpg')",
                        }}
                        loading="lazy"
                      >
                        <span className="mask bg-gradient-dark"></span>
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-6 my-auto">
                              <h4 className="text-white mb-0 fadeIn1 fadeInBottom">
                                Discover Stories
                              </h4>
                              <h1 className="text-white fadeIn2 fadeInBottom">
                                A Place for Entrepreneurs to Share
                              </h1>
                              <p className="lead text-white opacity-8 fadeIn3 fadeInBottom">
                                Wealth creation is an evolutionarily recent
                                positive-sum game. Status is an old zero-sum
                                game. Those attacking wealth creation are often
                                just seeking status.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div
                        className="page-header min-vh-75"
                        style={{
                          backgroundImage: "url('images/stay-home.jpeg')",
                        }}
                        loading="lazy"
                      >
                        <span className="mask bg-gradient-dark"></span>
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-6 my-auto">
                              <h4 className="text-white mb-0 fadeIn1 fadeInBottom">
                                Our Team
                              </h4>
                              <h1 className="text-white fadeIn2 fadeInBottom">
                                Work with the best
                              </h1>
                              <p className="lead text-white opacity-8 fadeIn3 fadeInBottom">
                                Free people make free choices. Free choices mean
                                you get unequal outcomes. You can have freedom,
                                or you can have equal outcomes. You can’t have
                                both.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div
                        className="page-header min-vh-75"
                        style={{ backgroundImage: "url('images/masala.jpeg')" }}
                        loading="lazy"
                      >
                        <span className="mask bg-gradient-dark"></span>
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-6 my-auto">
                              <h4 className="text-white mb-0 fadeIn1 fadeInBottom">
                                Office Places
                              </h4>
                              <h1 className="text-white fadeIn2 fadeInBottom">
                                Working on Wallstreet is Not So Easy
                              </h1>
                              <p className="lead text-white opacity-8 fadeIn3 fadeInBottom">
                                You’re spending time to save money when you
                                should be spending money to save time.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-vh-75 position-absolute w-100 top-0">
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleControls"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon position-absolute bottom-50"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleControls"
                      role="button"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon position-absolute bottom-50"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </a>
                  </div>
                </div>
              </header>

              {/* <!----header-->
                    <!------Banner Section--> */}
              <section>
                <div className="container-fluid">
                  <div className="row row-cols-md-5 row-cols-2 mt-n5 blur border-radius-xl shadow-blur position-relative overflow-hidden">
                    {fetchPrdCat.slice(0, 5).map(prds => (
                      <Link to={`/product-list/${prds.category._id}`}>
                        <div className="col position-relative my-auto bannerSectionHere">
                          <div className="p-3 text-center">
                            <img
                              src={prds.category.image}
                              alt="Cat"
                              className="img-fluid d-block mx-auto"
                            />
                            <h5 className="mt-3 mb-1">{prds.category.name}</h5>
                            <p className="mb-0">{prds.category.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              {/* <!----Cards----> */}

              <section className="py-5 pb-0">
                <div className="container-fluid">
                  <h3>Product List</h3>
                  <div className="row mt-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
                    {fetchPrd.map(prd => (
                      <div className="col">
                        <div className="card mb-5 mb-lg-0 mt-5">
                          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <Link
                              to={`/product-detail/${prd._id}`}
                              className="d-block blur-shadow-image"
                            >
                              <img
                                src={prd.prod_image}
                                alt="img-blur-shadow"
                                className="img-fluid border-radius-lg"
                                loading="lazy"
                              />
                            </Link>
                            <div
                              className="colored-shadow"
                              style={{
                                backgroundImage:
                                  "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg)",
                              }}
                            ></div>
                          </div>
                          <div className="card-body text-start">
                            <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                              Trending
                            </p>
                            <h5 className="font-weight-bold mt-3">
                              <a href="javascript:;">{prd.name}</a>
                            </h5>
                            <p className="mb-0">{prd.description}</p>
                          </div>
                          <div class="card-footer d-flex pt-0 pb-0">
                            <h5 class="font-weight-bold my-auto">
                              ₹ {prd.unit_price}
                            </h5>
                            <h3 class="font-weight-bold my-auto crossDiscount">
                              ₹ {prd.final_price}
                            </h3>

                            <div class="ribbon-2" style={{ top: "330px" }}>
                              Save{" "}
                              {Math.round(
                                100 - (prd.unit_price / prd.final_price) * 100,
                              )}
                              %
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
                                onClick={() => addTocartGame(prd)}
                                class="btn bg-gradient-primary mb-0 mt-lg-auto w-100"
                                type="button"
                                name="button"
                              >
                                Add to cart
                              </button>
                            </div>
                            <div class="col-lg-6  mt-2 margInrights">
                              <a
                                href="javascript:void(0)"
                                className="AllIcons"
                                title="Buy Now"
                              >
                                {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                                <button
                                  onClick={() => buyCartGame(prd)}
                                  class="btn bg-gray-900 text-white mb-0 mt-lg-auto w-100"
                                  type="button"
                                  name="button"
                                >
                                  Buy Now
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section class="py-7">
                <div class="container">
                  <div class="row justify-space-between py-2">
                    <div class="col-lg-4 mx-auto">
                      <ul class="pagination pagination-primary m-4">
                        <li class="page-item">
                          <a
                            class="page-link"
                            href="javascript:;"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">
                              <i class="material-icons" aria-hidden="true">
                                chevron_left
                              </i>
                            </span>
                          </a>
                        </li>
                        <li class="page-item active">
                          <a class="page-link" href="javascript:;">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:;">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:;">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:;">
                            4
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="javascript:;">
                            5
                          </a>
                        </li>
                        <li class="page-item">
                          <a
                            class="page-link"
                            href="javascript:;"
                            aria-label="Next"
                          >
                            <span aria-hidden="true">
                              <i class="material-icons" aria-hidden="true">
                                chevron_right
                              </i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {localStorage.getItem("authToken") == null ? (
          <div></div>
        ) : (
          <div
            className="row g-0 sideBarNavRight"
            style={{
              transform: isVisible ? "translateX(100%)" : "translateX(0%)",
            }}
          >
            <div
              className="col-md-12 leftcarts"
              style={{
                transform: isVisible ? "translateX(100%)" : "translateX(0%)",
              }}
            >
              <i
                onClick={() => cardClear()}
                className="material-icons removeIcons"
              >
                clear
              </i>
              <CartSidebar />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FilterPage;
