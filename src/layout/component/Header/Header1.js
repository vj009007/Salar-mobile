import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/img/logo.png";
import NavbarAfterSignUp from "./AfterSignUp";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import {
  getAllCategorys,
  getcarts,
  getShippingAddress,
  getLogout,
} from "../../ApiData/AllapiData";
const Header1 = (props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [cartData, setCartData] = useState();
  const userId = localStorage.getItem("data");
  const [getShippingAddressall, setGetShippingAddressall] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const logout = async () => {
    await getLogout();
    localStorage.clear();
    navigate("/");
    //message.success("Logged out successfully");
  };

  const [category, setCategory] = useState([]);
  const getAllcart = async () => {
    const responseJson = await getcarts();
    setCartData(responseJson.data);
    // console.log("cart data", responseJson.data);
  };

  const setAllcountryss = async () => {
    const responseJson = await getShippingAddress();
    console.log(responseJson);
    if (responseJson === undefined || null) {
    } else {
      setGetShippingAddressall(responseJson.data);
    }
  };

  const openCate = async () => {
    setIsVisible(true);
  };
  const openClose = async () => {
    setIsVisible(false);
  };

  useEffect(() => {
    getAllcart();
    setAllcountryss();
    const getAllCategory = async () => {
      //  const authToken = localStorage.getItem("authToken");

      const responseJson = await getAllCategorys();
      setCategory(responseJson.data);
    };
    getAllCategory();
  }, []);

  const gotoMyac = () => {
    navigate("/user/dashboard");
  };

  return (
    <>
      {pathname == "/after-signup" ? (
        <NavbarAfterSignUp />
      ) : (
        <nav
          className="navbar navbar-expand-lg navbar-dark newAddBg z-index-3 py-2 text-sm fixed-header"
          style={{ height: "50px" }}
        >
          <Link
            className="navbar-brand font-weight-normal ms-sm-3 text-white text-uppercase addHeader"
            to="/ "
            rel="tooltip"
            title="Designed and Coded by Creative Tim"
            data-placement="bottom"
          >
            <img src={logo} alt="logo.png" style={{ width: "100px" }} />
          </Link>
          <div
            type="button"
            className="bg-transparent p-0 m-0 text-black font-weight-normal text-normal"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalNotification"
          >
            Deliver to ....{" "}
            {getShippingAddressall === undefined ? (
              <></>
            ) : (
              getShippingAddressall.map((prd) => (
                <>{prd.defaultAddress === true ? prd.zipCode : ""}</>
              ))
            )}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>
          <div className="mx-3 w-md-60 d-lg-block d-none">
            <input
              className="form-control bg-white addNewBoder px-3"
              type="text"
              placeholder="What're you Looking For"
            />
            <i className="material-icons searchIcons">search</i>
          </div>
          <div className="dropdown">
            <button
              className="btn bg-transparent dropdown-toggle m-0 text-black p-0 font-weight-normal"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              English
            </button>
            <ul
              className="dropdown-menu px-2 py-3"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a
                  className="dropdown-item border-radius-md"
                  href="javascript:;"
                >
                  Hindi
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item border-radius-md"
                  href="javascript:;"
                >
                  Tamil
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item border-radius-md"
                  href="javascript:;"
                >
                  Talugu
                </a>
              </li>
            </ul>
          </div>
      
          {/* <div className="dropdown">
                        <button className="btn bg-transparent dropdown-toggle m-0 text-black font-weight-normal" type="button"
                            id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            INR
                        </button>
                        <ul className="dropdown-menu px-2 py-3" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item border-radius-md" href="javascript:;">RUBL</a></li>
                            <li><a className="dropdown-item border-radius-md" href="javascript:;">USD</a></li>
                            <li><a className="dropdown-item border-radius-md" href="javascript:;">EUR</a></li>
                        </ul>
                    </div> */}
          {userId ? (
            <>
              <ul className="navbar-nav navbar-nav-hover ms-auto d-ffff">
                <li className="nav-item mx-2 d-none d-lg-block">
                  <Link
                    to={{
                      pathname: "/user/dashboard",
                      state: { stateParam: true },
                    }}
                    className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-white"
                  >
                    My Account
                  </Link>
                </li>
                <li className="nav-item mx-2 d-none d-lg-block">
                  <Link
                    to={{
                      pathname: "/user/dashboard",
                      state: { stateParam: true },
                    }}
                    className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-white"
                  >
                    Wallet
                  </Link>
                </li>
                <li className="nav-item mx-2 d-none d-lg-block">
                  <Link
                    to={{
                      pathname: "/user/dashboard",
                      state: { stateParam: true },
                    }}
                    className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-white"
                  >
                    Withdrawal
                  </Link>
                </li>
                <li className="nav-item mx-2 d-none d-lg-block">
                  <Link
                    to="/cart"
                    className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-warning"
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                    <sup class="Bags font-weight-bolder">
                      {cartData === undefined ? "0" : cartData.length}
                    </sup>
                  </Link>
                </li>
                <li
                  className="nav-item mx-2 d-none d-lg-block"
                  onClick={() => logout()}
                >
                  <a
                    className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-white"
                    role="button"
                  >
                    Logout
                  </a>
                </li>
              </ul>
              <div className="mobile-bottom-nav">
                <div class="mobile-bottom-nav__item mobile-bottom-nav__item--active">
                  <div class="mobile-bottom-nav__item-content">
                    <i class="material-icons">home</i> Home
                  </div>
                </div>
                <div class="mobile-bottom-nav__item">
                  <div class="mobile-bottom-nav__item-content">
                    <i class="material-icons">category</i> Category
                  </div>
                </div>
                <div class="mobile-bottom-nav__item">
                  <div
                    class="mobile-bottom-nav__item-content"
                    onClick={() => gotoMyac()}
                  >
                    <i class="material-icons">account_circle</i> My Account
                  </div>
                </div>
                <div class="mobile-bottom-nav__item">
                  <div class="mobile-bottom-nav__item-content">
                    <i class="material-icons">account_balance_wallet</i>Wallet
                  </div>
                </div>
                <div class="mobile-bottom-nav__item">
                  <div class="mobile-bottom-nav__item-content">
                    <i class="material-icons"> currency_rupee</i> Withdrawl
                  </div>
                </div>
                <div class="mobile-bottom-nav__item">
                  <div class="mobile-bottom-nav__item-content">
                    <i class="material-icons"> shopping_cart</i> Cart
                  </div>
                </div>
              </div>
            </>
          ) : (
            <ul className="navbar-nav navbar-nav-hover ms-auto d-ffff">
              <li className="nav-item mx-2">
                <Link
                  to="/signin"
                  classNameName="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-white"
                  role="button"
                >
                  Sign In
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  classNameName="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-white"
                  to="/signup"
                  role="button"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-warning cartBags"
                  role="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart-check-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                  <sup class="Bags">0</sup>
                </a>
              </li>
            </ul>
          )}
          <div className="ms-0 w-100 d-lg-none d-block d-none d-sm-block d-sm-none d-md-block">
            <input
              className="form-control bg-white px-3 mobileSearch"
              type="text"
              placeholder="What're you Looking For"
            />
          </div>
        </nav>
      )}
      {/* <!-- Navbar Dark --> */}
    
      <nav className="navbar navbar-expand-lg navbar-dark newBalckBg z-index-3 py-1">
        <div className="container-fluid px-0">
        <div className="ms-0 w-100 d-lg-none d-block">
            <input
              className="form-control bg-white px-3 mobileSearch d-block .d-sm-none .d-none .d-sm-block .d-md-none"
              type="text"
              placeholder="What're you Looking For"
            />
          </div>
          <button  onClick={() => openCate("ecomm_prod_id")}
            className="navbar-toggler shadow-none px-0 mobileDots"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon mt-2">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <ul className="nav nav-pills mobileNavs nav-fill p-1 d-lg-none d-block" role="tablist">
            <li className="nav-item border-right">
              <a className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center active" data-bs-toggle="tab" href="#profile-tabs-icons" role="tab" aria-controls="preview" aria-selected="true">
             Salar
              </a>
            </li>
            <li className="nav-item border-end">
              <a className="nav-link mb-0 px-0 py-1 d-flex align-items-center justify-content-center" data-bs-toggle="tab" href="#dashboard-tabs-icons" role="tab" aria-controls="code" aria-selected="false">
              Grocery
              </a>
            </li>
          </ul>
          <div
            className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
            id="navigation"
          >
            <ul className="navbar-nav navbar-nav-hover mx-auto sec-nav ms-0 
            d-none d-sm-flex d-sm-none d-md-flex">
              <li className="nav-item dropdown dropdown-hover mx-2">
                <a
                  onClick={() => openCate("ecomm_prod_id")}
                  className="nav-link ps-2 d-flex cursor-pointer align-items-center show"
                  id="dropdownMenuPages6"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                  role="button"
                >
                  All Category
                  <img
                    src="https://demos.creative-tim.com/material-kit-pro/assets/img/down-arrow-dark.svg"
                    alt=""
                    className="arrow ms-auto ms-md-2"
                  />
                </a>
              </li>
              <li className="nav-item mx-2">
                <Link
                  to="/"
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  role="button"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  to="http://www.skya.in/"
                  role="button"
                  target="_blank"
                >
                  Grocery
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  to="http://www.skya.in/"
                  role="button"
                  target="_blank"
                >
                  Electronics
                </Link>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  role="button"
                >
                  Mobiles
                </a>
              </li>

              <li className="nav-item mx-2">
                <a
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  role="button"
                >
                  Health
                </a>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  to="http://www.skya.in/"
                  role="button"
                  target="_blank"
                >
                  Fashion
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  to="http://www.skya.in/"
                  role="button"
                  target="_blank"
                >
                  Personal Care
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  to="http://www.skya.in/"
                  role="button"
                  target="_blank"
                >
                  Cosmetics
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  to="http://www.skya.in/"
                  role="button"
                  target="_blank"
                >
                  Appliances
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  to="http://www.skya.in/"
                  role="button"
                  target="_blank"
                >
                  Medical
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  to="http://www.skya.in/"
                  role="button"
                  target="_blank"
                >
                  Top Offers
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  to="http://www.skya.in/"
                  role="button"
                  target="_blank"
                >
                  Baby
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-hover  sec-nav ms-0 mx-8 
            ">
              <li className="nav-item mx-2 d-flex justify-content-end">
                <Link
                  to="/sell-on-salar"
                  className="
                  d-none d-sm-flex d-sm-none d-md-flex nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                  role="button"
                >
                  BECOME A SELLER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="menuSidebar"
        style={{ left: isVisible ? "-12px" : "-400px" }}
      >
        <nav className="navbar navbar-expand-lg navbar-dark newBalckBg z-index-3 py-1">
          <h4 className="welcomePara">
            <div id="hmenu-customer-profile">
              <div id="hmenu-customer-profile-left" class="hmenu-avatar-icon">
                <div id="hmenu-customer-avatar-icon" class="nav-sprite"></div>
              </div>
              <div id="hmenu-customer-profile-right">
                <div id="hmenu-customer-name">
                  <b>Hello, SALAR</b>
                  <i
                    onClick={() => openClose("ecomm_prod_id")}
                    class="fa fa-close"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </h4>
          <div className="container-fluid px-0 pt-5">
            <div
              className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
              id="navigation"
            >
              <ul className="navbar-nav navbar-nav-hover mx-auto sec-nav ms-0">
                <li className="nav-item mx-2">
                  {category.map((cat) => (
                    <div className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                      <Link
                        onClick={() => openClose("ecomm_prod_id")}
                        className="font-weight-bold"
                        to={`/product-list/${cat._id}`}
                      >
                        {" "}
                        {cat.categoryName}
                      </Link>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header1;
