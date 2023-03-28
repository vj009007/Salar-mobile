/** @format */

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import CartSidebar from "../WebPages/CartSidebar";
import { getcarts, postcart } from "../../ApiData/AllapiData";
import { getAlldeals } from "../repo/products";

const ProductList = () => {
  const user_id = localStorage.getItem("usesr_id");
  const [getAllDealsAll, setGetAllDeals] = useState([]);
  const [getAllDealsAllPrd, setGetAllDealsPrd] = useState([]);
  const [sidebarcart, setGetCarts] = useState([]);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const getAllCategorydeals = async () => {
    const res = await getAlldeals(user_id);
    res.data.data.forEach(element => {
      setGetAllDeals(element.products);
    });
  };
  const getCartData = async () => {
    const responseJson = await getcarts();
    setGetCarts(responseJson.data);
  };

  useEffect(() => {
    getAllCategorydeals();
  }, []);

  let width = window.innerWidth;
  console.log(width);

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
  const addTocartGame = async (event, cates) => {
    const userId = localStorage.getItem("dataAuthUserID");
    console.log(event, cates);
    // return false;
    if (!!userId) {
      const user_id = localStorage.getItem("dataAuthUserID");
      if (cates === "ecomm_prod_id") {
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
        const responseJson = await postcart([dataS]);
      } else if (cates === "game_prod_id") {
        const game_prod_id = event._id;
        const quantity = 1;
        const unit_price = event.unit_price;
        const prod_image = event.prod_image;
        const name = event.name;
        const sku = event.sku;
        const dataS = {
          user_id,
          game_prod_id,
          quantity,
          unit_price,
          prod_image,
          name,
          sku,
        };
        const responseJson = await postcart([dataS]);
      }
      // return false;

      // console.log(responseJson);
    } else {
      navigate("/signin");
    }

    setIsVisible(false);
    // console.log(game);
  };
  const cardClear = async () => {
    setIsVisible((current) => !current);
  };

  const buyCartGame = async (event, cates) => {
    const userId = localStorage.getItem("dataAuthUserID");
    console.log(event, cates);
    // return false;
    if (!!userId) {
      const user_id = localStorage.getItem("dataAuthUserID");
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
      const responseJson = await postcart([dataS]);
      navigate("/checkout");
      // return false;

      // console.log(responseJson);
    } else {
      navigate("/signin");
    }
  };

  return (
    <>
      <Slider {...settings}>
        {getAllDealsAll.map((prds) => (
          <div className="col p-2">
            <div className="card mb-5 mb-lg-0">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <Link
                  to={`/product-detail/${prds._id}`}
                  id="imgfluidMain"
                  className=" d-block blur-shadow-image"
                >
                  <img
                    src={
                      prds.productId.prod_image
                        ? prds.productId.prod_image
                        : "https://via.placeholder.com/268x402"
                    }
                    alt="img-blur-shadow"
                    className="img-fluid border-radius-lg"
                    loading="lazy"
                  />
                </Link>
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
                {/* <h5 className="font-weight-bold mt-3">
                  <Link to={`/product-detail/${prds.productId._id}`}>
                    {prds.productId.name}
                  </Link>
                </h5>
                <p className="mb-0">{prds.productId.description}</p> */}
                <h5 className="font-weight-bold mt-3">
                  <a
                    onClick={() => navigate(`/product`)}
                    href="javascript:void('0');"
                  >
                    Dolce &amp; Gabbana
                  </a>
                </h5>
                <p className="mb-0">
                  Dolce &amp; Gabbana's 'Greta' tote has been crafted in Italy
                  from hard-wearing red textured-leather.
                </p>
              </div>
              <div className="card-footer d-flex pt-0 pb-0 ">
                <h5 className="font-weight-bold my-auto">
                  ₹{prds.productId.unit_price ? prds.productId.unit_price : 0}
                </h5>
                <h3 className="font-weight-bold my-auto crossDiscount">
                  ₹{prds.productId.final_price ? prds.productId.final_price : 0}
                </h3>

                <div className="ribbon-2">
                  Save{" "}
                  {Math.round(
                    100 -
                      (prds.productId.unit_price / prds.productId.final_price) *
                        100
                  ) ? Math.round(
                    100 -
                      (prds.productId.unit_price / prds.productId.final_price) *
                        100
                  ) : "0%"}
                </div>
                <i
                  className="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  favorite
                </i>
              </div>
              <div className="row mt-2 mb-3 all     ">
                <div className="col-lg-6 mt-2 AllIcons">
                  <button
                    onClick={() =>
                      addTocartGame(prds.productId, "ecomm_prod_id")
                    }
                    className="btn bg-info text-white mb-0 mt-lg-auto w-100"
                    type="button"
                    name="button"
                  >
                    Add to cart
                  </button>
                </div>
                <div className="col-lg-6  mt-2 margInrights">
                  <a
                    href="javascript:void(0)"
                    className="AllIcons"
                    title="Buy Now"
                  >
                    <button
                      onClick={() =>
                        buyCartGame(prds.productId, "ecomm_prod_id")
                      }
                      className="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
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
                  <i className=" far fa-star"></i>
                </span>
              </div>
              <h5 className="font-weight-bold mt-3">
                <a
                  onClick={() => navigate(`/product`)}
                  href="javascript:void('0');"
                >
                  Dolce &amp; Gabbana
                </a>
              </h5>
              <p className="mb-0">
                Dolce &amp; Gabbana's 'Greta' tote has been crafted in Italy
                from hard-wearing red textured-leather.
              </p>
            </div>
            <div className="card-footer d-flex pt-0 pb-0">
              <h5 className="font-weight-bold my-auto">₹1,549</h5>
              <h3 className="font-weight-bold my-auto crossDiscount">₹1,549</h3>

              <div className="ribbon-2">Save 20%</div>
              <i
                className="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                favorite
              </i>
            </div>
            <div className="row mt-2 mb-3">
              <div className="col-lg-6 mt-2 ">
                <Link to="/cart" className="AllIcons" title="Add to cart">
                  <button
                    className="btn bg-info text-white mb-0 mt-lg-auto w-100"
                    type="button"
                    name="button"
                  >
                    Add to cart
                  </button>
                </Link>
              </div>
              <div className="col-lg-6  mt-2 margInrights">
                <Link to="/checkout" className="AllIcons" title="Buy Now">
                  <button
                    className="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
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
                <a
                  onClick={() => navigate(`/product`)}
                  href="javascript:void('0');"
                >
                  Dolce &amp; Gabbana
                </a>
              </h5>
              <p className="mb-0">
                Dolce &amp; Gabbana's 'Greta' tote has been crafted in Italy
                from hard-wearing red textured-leather.
              </p>
            </div>
            <div className="card-footer d-flex pt-0 pb-0">
              <h5 className="font-weight-bold my-auto">₹1,549</h5>
              <h3 className="font-weight-bold my-auto crossDiscount">₹1,549</h3>

              <div className="ribbon-2">Save 20%</div>
              <i
                className="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                favorite
              </i>
            </div>
            <div className="row mt-2 mb-3">
              <div className="col-lg-6 mt-2 ">
                <Link to="/cart" className="AllIcons" title="Add to cart">
                  <button
                    className="btn bg-info text-white mb-0 mt-lg-auto w-100"
                    type="button"
                    name="button"
                  >
                    Add to cart
                  </button>
                </Link>
              </div>
              <div className="col-lg-6  mt-2 margInrights">
                <Link to="/checkout" className="AllIcons" title="Buy Now">
                  <button
                    className="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
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
                <a
                  onClick={() => navigate(`/product`)}
                  href="javascript:void('0');"
                >
                  Dolce &amp; Gabbana
                </a>
              </h5>
              <p className="mb-0">
                Dolce &amp; Gabbana's 'Greta' tote has been crafted in Italy
                from hard-wearing red textured-leather.
              </p>
            </div>
            <div className="card-footer d-flex pt-0 pb-0">
              <h5 className="font-weight-bold my-auto">₹1,549</h5>
              <h3 className="font-weight-bold my-auto crossDiscount">₹1,549</h3>

              <div className="ribbon-2">Save 20%</div>
              <i
                className="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                favorite
              </i>
            </div>
            <div className="row mt-2 mb-3">
              <div className="col-lg-6 mt-2 AllIcons">
                <button
                  onClick={() => addTocartGame()}
                  className="btn bg-info text-white mb-0 mt-lg-auto w-100"
                  type="button"
                  name="button"
                >
                  Add to cart
                </button>
              </div>
              <div className="col-lg-6  mt-2 margInrights">
                <Link to="/checkout" className="AllIcons" title="Buy Now">
                  <button
                    className="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
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
                <a
                  onClick={() => navigate(`/product`)}
                  href="javascript:void('0');"
                >
                  Dolce &amp; Gabbana
                </a>
              </h5>
              <p className="mb-0">
                Dolce &amp; Gabbana's 'Greta' tote has been crafted in Italy
                from hard-wearing red textured-leather.
              </p>
            </div>
            <div className="card-footer d-flex pt-0 pb-0">
              <h5 className="font-weight-bold my-auto">₹1,549</h5>
              <h3 className="font-weight-bold my-auto crossDiscount">₹1,549</h3>

              <div className="ribbon-2">Save 20%</div>
              <i
                className="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                favorite
              </i>
            </div>
            <div className="row mt-2 mb-3">
              <div className="col-lg-6 mt-2 AllIcons">
                <button
                  onClick={() => addTocartGame()}
                  className="btn bg-info text-white mb-0 mt-lg-auto w-100"
                  type="button"
                  name="button"
                >
                  Add to cart
                </button>
              </div>
              <div className="col-lg-6  mt-2 margInrights">
                <Link to="/checkout" className="AllIcons" title="Buy Now">
                  <button
                    className="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
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
                <a
                  onClick={() => navigate(`/product`)}
                  href="javascript:void('0');"
                >
                  Dolce &amp; Gabbana
                </a>
              </h5>
              <p className="mb-0">
                Dolce &amp; Gabbana's 'Greta' tote has been crafted in Italy
                from hard-wearing red textured-leather.
              </p>
            </div>
            <div className="card-footer d-flex pt-0 pb-0">
              <h5 className="font-weight-bold my-auto">₹1,549</h5>
              <h3 className="font-weight-bold my-auto crossDiscount">₹1,549</h3>

              <div className="ribbon-2">Save 20%</div>
              <i
                className="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
              >
                favorite
              </i>
            </div>
            <div className="row mt-2 mb-3">
              <div className="col-lg-6 mt-2 AllIcons">
                <button
                  onClick={() => addTocartGame()}
                  className="btn bg-info text-white mb-0 mt-lg-auto w-100"
                  type="button"
                  name="button"
                >
                  Add to cart
                </button>
              </div>
              <div className="col-lg-6  mt-2 margInrights">
                <Link to="/checkout" className="AllIcons" title="Buy Now">
                  <button
                    className="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
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
            <CartSidebar />
          </div>
        </div>
      )}
    </>
  );
};
export default ProductList;
