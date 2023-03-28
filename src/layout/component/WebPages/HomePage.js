/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartSidebar from "../WebPages/CartSidebar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductList from "../footerPages/ProductList";
import {
  getAllCategorys,
  getAllgames,
  getFeatureproduct,
  postcart,
} from "../../ApiData/AllapiData";
import {getUiCategories} from "../repo/categories";
import {getwebSiteProducts} from "../repo/webSiteProducts"

import { useSelector, useDispatch } from "react-redux";
import { orderSummary, cart, StateManagement } from "../../redux/stateSlice";


import Card from "./card/card";
const HomePage = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [gameProduct, setgameProduct] = useState([]);
  const [cartDataPush, setCartDataPush] = useState([]);
  const [electrinicsProduct, setElectrinicsProduct] = useState([]);
  const [uiCategory, setUiCategory] = useState([]);
  const [webSiteProducts, setWebSiteProducts] = useState([]);
  const [webSiteGames, setWebSiteGames] = useState([]);

  const [isVisible, setIsVisible] = useState(true);
  const getAllecomHome = async () => {
    const responseJson = await getFeatureproduct();
    setElectrinicsProduct(responseJson.data);
    // console.log("ecomprd", responseJson.data);
  };
  const getProducts = async () => {
    const responseJson = await getwebSiteProducts();
    let data =responseJson.data
    setWebSiteProducts(data.products)
    setWebSiteGames(data.game)
  }


console.log(webSiteProducts,"pro");

  const getUi = async () => {
    const responseJson = await getUiCategories();
    let data =responseJson.data.data
    setUiCategory(data)
  }

const isEcommerce=uiCategory.filter((e)=>e.isEcommerce == true)

const isGame = uiCategory.filter((e)=>e.isGame == true)

const isFood=uiCategory.filter((e)=>e.isFood == true)

const isVegetables=uiCategory.filter((e)=>e.isVegetables == true)



  useEffect(() => {
    // console.log(sessionStorage.removeItem("authTokens"));
    getAllecomHome();
    // getAllCategorydeals();
    const getAllCategory = async () => {
      const responseJson = await getAllCategorys();
      setCategory(responseJson.data);
      // console.log(responseJson.data);
    };
    getAllCategory();
    // second
    const getAllgame = async () => {
      const responseJson = await getAllgames();
      setgameProduct(responseJson.data);
      //   console.log(responseJson.data);
    };
    getAllgame();

    
    getUi();

    getProducts();
  }, []);
  const dispatch = useDispatch();



  //   third
  const editcategory = cat => {
    //   console.log(cat);
    localStorage.setItem("catId", cat._id);
    navigate("/product-list/" + cat._id);
  };

  const cardClear = async () => {
    setIsVisible(current => !current);
  };
  const addTocartGame = async (event, cates) => {
    await dispatch(cart("123", "456"));
    await dispatch(orderSummary());
    // const userId = localStorage.getItem("dataAuthUserID");
    // // console.log(event, cates);
    // // return false;
    // console.log(cart, "landkjakjkjagkjabg");
    // if (!!userId) {
    //   const user_id = localStorage.getItem("dataAuthUserID");
    //   if (cates === "ecomm_prod_id") {
    //     const ecomm_prod_id = event._id;
    //     const quantity = event.min_purchase_qty;
    //     const unit_price = event.unit_price;
    //     const prod_image = event.prod_image;
    //     const name = event.name;
    //     const sku = event.sku;
    //     const dataS = {
    //       user_id,
    //       ecomm_prod_id,
    //       quantity,
    //       unit_price,
    //       prod_image,
    //       name,
    //       sku,
    //     };
    //     // const responseJson = await postcart([dataS]);
    //   } else if (cates === "game_prod_id") {
    //     const game_prod_id = event._id;
    //     const quantity = 1;
    //     const unit_price = event.unit_price;
    //     const prod_image = event.prod_image;
    //     const name = event.name;
    //     const sku = event.sku;
    //     const dataS = {
    //       user_id,
    //       game_prod_id,
    //       quantity,
    //       unit_price,
    //       prod_image,
    //       name,
    //       sku,
    //     };
    //     const responseJson = await postcart([dataS]);
    //   }
    // } else {
    //   navigate("/signin");
    // }

    // setIsVisible((current) => !current);
  };

  const buyCartGame = async (event, cates) => {
    const userId = localStorage.getItem("user_id");
    console.log(event, cates);
    // return false;
    if (event.prod_type === "games") {
      if (!!userId) {
        const user_id = localStorage.getItem("user_id");
        const game_prod_id = event._id;
        const plan = event.plan;
        const quantity = event.min_purchase_qty;
        const unit_price = event.unit_price;
        const prod_image = event.prod_image;
        const name = event.name;
        const sku = event.sku;
        const dataS = {
          user_id,
          game_prod_id,
          plan,
          quantity,
          unit_price,
          prod_image,
          name,
          sku,
        };
        await postcart([dataS]);
        await dispatch(cart(dataS));
        navigate("/checkout");
      } else {
        navigate("/signin");
      }
    } else {
      if (!!userId) {
        const user_id = localStorage.getItem("user_id");
        const ecomm_prod_id = event._id;
        const quantity = event.min_purchase_qty;
        const unit_price = event.unit_price;
        const prod_image = event.prod_image;
        const name = event.name;
        const sku = event.sku;
        const dataS = {
          user_id,
          ecomm_prod_id,
          quantity,
          unit_price,
          prod_image,
          name,
          sku,
        };
        await postcart([dataS]);
        await dispatch(cart(dataS));
        navigate("/checkout");
      } else {
        navigate("/signin");
      }
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
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
      <header>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="page-header min-vh-80"
                style={{
                  backgroundImage: "url('images/banner2.jpg')",
                }}
                loading="lazy"
              >
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
                        Wealth creation is an evolutionarily recent positive-sum
                        game. Status is an old zero-sum game. Those attacking
                        wealth creation are often just seeking status.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div
                className="page-header min-vh-80"
                style={{
                  backgroundImage: "url('images/banner4.jpg')",
                }}
                loading="lazy"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 my-auto">
                      <h4 className="text-white mb-0 fadeIn1 fadeInBottom">
                        Your Perfect Place{" "}
                      </h4>
                      <h1 className="text-white fadeIn2 fadeInBottom">
                        Explore our products in Salar store
                      </h1>
                      <p className="lead text-white opacity-8 fadeIn3 fadeInBottom">
                        For being a bright color. For standing out. But the time
                        is now to be okay to be the greatest you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="page-header min-vh-80"
                style={{ backgroundImage: "url('images/banner3.jpg')" }}
                loading="lazy"
              >
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
                        Free people make free choices. Free choices mean you get
                        unequal outcomes. You can have freedom, or you can have
                        equal outcomes. You can’t have both.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="page-header min-vh-80"
                style={{ backgroundImage: "url('images/banner5.jpg')" }}
                loading="lazy"
              >
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
                        Free people make free choices. Free choices mean you get
                        unequal outcomes. You can have freedom, or you can have
                        equal outcomes. You can’t have both.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="page-header min-vh-80"
                style={{ backgroundImage: "url('images/banner6.jpg')" }}
                loading="lazy"
              >
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
                        Free people make free choices. Free choices mean you get
                        unequal outcomes. You can have freedom, or you can have
                        equal outcomes. You can’t have both.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div
                className="page-header min-vh-80"
                style={{ backgroundImage: "url('images/banner1.jpg')" }}
                loading="lazy"
              >
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
                        You’re spending time to save money when you should be
                        spending money to save time.
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
      {/* <!----header-->*/}
      <section>
        <div className="container-fluid silkSlidesMain">
          <div className="row row-col-md-12  mt-n5 blur border-radius-xl shadow-blur position-relative overflow-hidden">
            <Slider {...settings}>
              {category.map(cat => (
                <div
                  onClick={() => editcategory(cat)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="col position-relative my-auto">
                    <div
                      className="p-3 text-center"
                      style={{ cursor: "pointer", marginTop: "50px" }}
                    >
                      <img
                        src={cat.image}
                        alt="Cat"
                        className="img-fluid d-block mx-auto"
                      />
                      <h5 className="mt-3 mb-1">{cat.name}</h5>
                      <p className="mb-0">{cat.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="py-5 pb-0">
        <div className="container-fluid silkData">
          <h3 className="">Today Deal</h3>

          <div className="row">
          <div className="row mt-5 ">
            <Slider {...settings}>
              {webSiteProducts && webSiteProducts.map(cat => (
                <div className="col p-2" id="arrows">
                  <div className="card mb-5 mb-lg-0">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <Link
                        to={`/product-detail/${cat._id}`}
                        className="d-block blur-shadow-image"
                      >
                        <img
                          src="https://via.placeholder.com/268x402"
                          alt="img-blur-shadow"
                          className="img-fluid border-radius-lg"
                          loading="lazy"
                        /> 
                        
                      </Link>
                      <div
                        className="colored-shadow"
                        style={{ backgroundImage: "url({cat.productImage})" }}
                      ></div>
                    </div>
                    <div className="card-body text-start ">
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
                        <a href="javascript:;">{cat.name}</a>
                      </h5>
                      <p className="mb-0">{cat.description}</p>
                    </div>
                    <div class="card-footer d-flex pt-0 pb-0 ">
                      <h5 class="font-weight-bold my-auto">
                        ₹ {cat.unitPrice ? cat.unitPrice : 0}
                      </h5>
                      <h3 class="font-weight-bold my-auto crossDiscount">
                        ₹ {cat.finalPrice ? cat.finalPrice : 0}
                      </h3>

                      <div class="ribbon-2">
                        Save{" "}
                        {Math.round(
                          100 - (cat.unitPrice / cat.finalPrice) * 100,
                        ) ? Math.round(
                          100 - (cat.unitPrice / cat.finalPrice) * 100,
                        ) : 0}
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
                    <div class="row mt-2 mb-3 all ">
                      <div class="col-lg-6 mt-2 AllIcons">
                        <button
                          onClick={() => addTocartGame(cat, "ecomm_prod_id")}
                          class="btn bg-info text-white mb-0 mt-lg-auto w-100"
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
                            onClick={() => buyCartGame(cat, "ecomm_prod_id")}
                            class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
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
            </Slider>
          </div>
            {/* <div className="col-md-12 "> */}
              {/* {<ProductList />} */}
              
            {/* </div> */}
          </div>
        </div>
      </section>

      <section className="py-5 pb-0">
        <div className="container-fluid silkData">
          <h3 className=""></h3>
          <div className="row mt-5 ">
            <Slider {...settings}>
              {electrinicsProduct.map(cat => (
                <div className="col p-2" id="arrows">
                  <div className="card mb-5 mb-lg-0">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <Link
                        to={`/product-detail/${cat._id}`}
                        className="d-block blur-shadow-image"
                      >
                        <img
                          src={cat.prod_image}
                          alt="img-blur-shadow"
                          className="img-fluid border-radius-lg"
                          loading="lazy"
                        />
                      </Link>
                      <div
                        className="colored-shadow"
                        style={{ backgroundImage: "url({cat.prod_image})" }}
                      ></div>
                    </div>
                    <div className="card-body text-start ">
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
                        <a href="javascript:;">{cat.name}</a>
                      </h5>
                      <p className="mb-0">{cat.description}</p>
                    </div>
                    <div class="card-footer d-flex pt-0 pb-0 ">
                      <h5 class="font-weight-bold my-auto">
                        ₹ {cat.unit_price}
                      </h5>
                      <h3 class="font-weight-bold my-auto crossDiscount">
                        ₹ {cat.final_price}
                      </h3>

                      <div class="ribbon-2">
                        Save{" "}
                        {Math.round(
                          100 - (cat.unit_price / cat.final_price) * 100,
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
                    <div class="row mt-2 mb-3 all ">
                      <div class="col-lg-6 mt-2 AllIcons">
                        <button
                          onClick={() => addTocartGame(cat, "ecomm_prod_id")}
                          class="btn bg-info text-white mb-0 mt-lg-auto w-100"
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
                            onClick={() => buyCartGame(cat, "ecomm_prod_id")}
                            class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
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
            </Slider>
          </div>
        </div>
      </section>
      {/* <!----Cards---->// */}
      <section className="position-relative mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 mx-auto">
              <div
                id="carouselExampleTestimonials-11"
                className="carousel carousel-fade slide shadow-lg"
                data-bs-ride="carousel"
              >
                <ol className="carousel-indicators z-index-2">
                  <li
                    data-bs-target="#carouselExampleTestimonials-11"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                  ></li>
                  <li
                    data-bs-target="#carouselExampleTestimonials-11"
                    data-bs-slide-to="1"
                    className=""
                  ></li>
                </ol>
                <div className="carousel-inner border-radius-lg">
                  <div
                    className="carousel-item bg-cover max-height-400 active"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1620266757065-5814239881fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1952&amp;q=80')",
                    }}
                    loading="lazy"
                  >
                    <div className="z-index-1 my-md-8 my-6 position-relative z-index-2">
                      <div className="row h-100">
                        <div className="col-xl-6 my-auto px-6">
                          <h5 className="text-white font-weight-normal mb-3">
                            "Decisions: If you can’t decide, the answer is no.
                            If two equally difficult paths, choose the one more
                            painful in the short term(pain avoidance is creating
                            an illusion of equality)."
                          </h5>
                          <p className="text-white font-weight-bold">
                            Michael Lerson,{" "}
                            <span className="text-xs font-weight-normal">
                              Project Manager{" "}
                            </span>
                          </p>
                        </div>
                        <div className="col-xl-6 my-auto px-7 mt-md-auto mt-4">
                          <img
                            src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/white-logos/logo-behance-white.svg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <span className="mask bg-gradient-faded-dark opacity-10 z-index-0 border-radius-lg"></span>
                  </div>
                  <div
                    className="carousel-item bg-cover max-height-400"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1614727187346-ec3a009092b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1957&amp;q=80')",
                    }}
                    loading="lazy"
                  >
                    <div className="z-index-1 my-md-8 my-6 position-relative z-index-2">
                      <div className="row h-100">
                        <div className="col-xl-6 my-auto px-6">
                          <h5 className="text-white font-weight-normal mb-3">
                            " Knowledge is either from direct experience or from
                            verifiable, falsifiable science. There is knowledge
                            that is transmitted but not verifiable /
                            falsifiable. They're slowed down by their perception
                            of themselves. "
                          </h5>
                          <p className="text-white font-weight-bold">
                            Louis Miriam,{" "}
                            <span className="text-xs font-weight-normal">
                              COO
                            </span>
                          </p>
                        </div>
                        <div className="col-xl-6 my-auto px-7 mt-md-auto mt-4">
                          <img
                            src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/white-logos/logo-nasa-white.svg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <span className="mask bg-gradient-faded-warning opacity-10 z-index-0 border-radius-lg"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!----Cards----> */}
      <section className="py-5 pb-0">
        <div className="container-fluid silkData">
          <h3 className="">Electronics</h3>
          <div className="row mt-5 ">
            <Slider {...settings}>
              {webSiteProducts && webSiteProducts.map(cat => (
                <div className="col p-2" id="arrows">
                  <div className="card mb-5 mb-lg-0">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <Link
                        to={`/product-detail/${cat._id}`}
                        className="d-block blur-shadow-image"
                      >
                        <img
                          src="https://via.placeholder.com/268x402"
                          alt="img-blur-shadow"
                          className="img-fluid border-radius-lg"
                          loading="lazy"
                        /> 
                        
                      </Link>
                      <div
                        className="colored-shadow"
                        style={{ backgroundImage: "url({cat.productImage})" }}
                      ></div>
                    </div>
                    <div className="card-body text-start ">
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
                        <a href="javascript:;">{cat.name}</a>
                      </h5>
                      <p className="mb-0">{cat.description}</p>
                    </div>
                    <div class="card-footer d-flex pt-0 pb-0 ">
                      <h5 class="font-weight-bold my-auto">
                        ₹ {cat.unitPrice ? cat.unitPrice : 0}
                      </h5>
                      <h3 class="font-weight-bold my-auto crossDiscount">
                        ₹ {cat.finalPrice ? cat.finalPrice : 0}
                      </h3>

                      <div class="ribbon-2">
                        Save{" "}
                        {Math.round(
                          100 - (cat.unitPrice / cat.finalPrice) * 100,
                        ) ? Math.round(
                          100 - (cat.unitPrice / cat.finalPrice) * 100,
                        ) : 0}
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
                    <div class="row mt-2 mb-3 all ">
                      <div class="col-lg-6 mt-2 AllIcons">
                        <button
                          onClick={() => addTocartGame(cat, "ecomm_prod_id")}
                          class="btn bg-info text-white mb-0 mt-lg-auto w-100"
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
                            onClick={() => buyCartGame(cat, "ecomm_prod_id")}
                            class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
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
            </Slider>
          </div>
        </div>
      </section>
      {/* <!----Cards---->
    <!----Cards----> */}
      <section className="py-5 pb-0">
        <div className="container-fluid silkData">
          <h3 className="">Games</h3>
          <div className="row mt-5 ">
            <Slider {...settings}>
              {webSiteGames && webSiteGames.map((game) => (
                <div className="col p-2" id="arrows">
                  <div className="card mb-5 mb-lg-0">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <Link
                        to={`/gamingproduct-detail/${game._id}`}
                        className="d-block blur-shadow-image"
                      >
                        <img
          
                          src="https://via.placeholder.com/268x402"
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
                    <div className="card-body text-start ">
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
                        <a href="javascript:;">{game.name}</a>
                      </h5>
                      <p className="mb-0">{game.description}</p>
                    </div>
                    <div class="card-footer d-flex pt-0 pb-0 ">
                      <h5 class="font-weight-bold my-auto">
                      ₹ {game.unitPrice ? game.unitPrice : 0}
                      </h5>
                      <h3 class="font-weight-bold my-auto crossDiscount">
                        ₹ {game.finalPrice ? game.finalPrice : 0}
                      </h3>

                      <div class="ribbon-2">
                        Save{" "}
                        {Math.round(
                          100 - (game.unitPrice / game.finalPrice) * 100
                        ) ? Math.round(
                          100 - (game.unitPrice / game.finalPrice) * 100
                        ) : 0}
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
                    <div class="row mt-2 mb-3 all ">
                      <div class="col-lg-6 mt-2 AllIcons">
                        <button
                          onClick={() => addTocartGame(game, "game_prod_id")}
                          class="btn bg-info text-white mb-0 mt-lg-auto w-100"
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
                          <i
                            class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                          >
                            shopping_basket
                          </i>
                          <button
                            onClick={() => buyCartGame(game, "game_prod_id")}
                            class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
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
            </Slider>
          </div>
        </div>
      </section>
      {/* <!----Cards---->
    <!----Cards----> */}
      <section className="py-5 pb-0">
        <div className="container-fluid silkData">
          <h3 className="">Grocery</h3>
          <div className="row mt-5 ">
            <Slider {...settings}>
              {webSiteProducts && webSiteProducts.map(cat => (
                <div className="col p-2" id="arrows">
                  <div className="card mb-5 mb-lg-0">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <Link
                        to={`/product-detail/${cat._id}`}
                        className="d-block blur-shadow-image"
                      >
                        <img
                          src="https://via.placeholder.com/268x402"
                          alt="img-blur-shadow"
                          className="img-fluid border-radius-lg"
                          loading="lazy"
                        /> 
                        
                      </Link>
                      <div
                        className="colored-shadow"
                        style={{ backgroundImage: "url({cat.productImage})" }}
                      ></div>
                    </div>
                    <div className="card-body text-start ">
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
                        <a href="javascript:;">{cat.name}</a>
                      </h5>
                      <p className="mb-0">{cat.description}</p>
                    </div>
                    <div class="card-footer d-flex pt-0 pb-0 ">
                      <h5 class="font-weight-bold my-auto">
                        ₹ {cat.unitPrice ? cat.unitPrice : 0}
                      </h5>
                      <h3 class="font-weight-bold my-auto crossDiscount">
                        ₹ {cat.finalPrice ? cat.finalPrice : 0}
                      </h3>

                      <div class="ribbon-2">
                        Save{" "}
                        {Math.round(
                          100 - (cat.unitPrice / cat.finalPrice) * 100,
                        ) ? Math.round(
                          100 - (cat.unitPrice / cat.finalPrice) * 100,
                        ) : 0}
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
                    <div class="row mt-2 mb-3 all ">
                      <div class="col-lg-6 mt-2 AllIcons">
                        <button
                          onClick={() => addTocartGame(cat, "ecomm_prod_id")}
                          class="btn bg-info text-white mb-0 mt-lg-auto w-100"
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
                            onClick={() => buyCartGame(cat, "ecomm_prod_id")}
                            class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
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
            </Slider>
          </div>
        </div>
      </section>
      {/* <!----Cards----> */}
      <section className="py-5 pb-0">
        <div className="container-fluid silkData">
          <h3 className="">Clothing/Sarees</h3>
          <div className="row mt-5 ">
            <Slider {...settings}>
              {webSiteProducts && webSiteProducts.map(cat => (
                <div className="col p-2" id="arrows">
                  <div className="card mb-5 mb-lg-0">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <Link
                        to={`/product-detail/${cat._id}`}
                        className="d-block blur-shadow-image"
                      >
                        <img
                          src="https://via.placeholder.com/268x402"
                          alt="img-blur-shadow"
                          className="img-fluid border-radius-lg"
                          loading="lazy"
                        /> 
                        
                      </Link>
                      <div
                        className="colored-shadow"
                        style={{ backgroundImage: "url({cat.productImage})" }}
                      ></div>
                    </div>
                    <div className="card-body text-start ">
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
                        <a href="javascript:;">{cat.name}</a>
                      </h5>
                      <p className="mb-0">{cat.description}</p>
                    </div>
                    <div class="card-footer d-flex pt-0 pb-0 ">
                      <h5 class="font-weight-bold my-auto">
                        ₹ {cat.unitPrice ? cat.unitPrice : 0}
                      </h5>
                      <h3 class="font-weight-bold my-auto crossDiscount">
                        ₹ {cat.finalPrice ? cat.finalPrice : 0}
                      </h3>

                      <div class="ribbon-2">
                        Save{" "}
                        {Math.round(
                          100 - (cat.unitPrice / cat.finalPrice) * 100,
                        ) ? Math.round(
                          100 - (cat.unitPrice / cat.finalPrice) * 100,
                        ) : 0}
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
                    <div class="row mt-2 mb-3 all ">
                      <div class="col-lg-6 mt-2 AllIcons">
                        <button
                          onClick={() => addTocartGame(cat, "ecomm_prod_id")}
                          class="btn bg-info text-white mb-0 mt-lg-auto w-100"
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
                            onClick={() => buyCartGame(cat, "ecomm_prod_id")}
                            class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
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
            </Slider>
          </div>
        </div>
      </section>

      {localStorage.getItem("authToken") === null ? (
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
    </>
  );
};
export default HomePage;
