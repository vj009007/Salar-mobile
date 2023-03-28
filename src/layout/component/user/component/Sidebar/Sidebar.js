/** @format */

import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import "../../assets/admin/assets/js/soft-ui-dashboard.js.map";
import { getUser } from "../../repo/user";

const Sidebar = () => {
  const location = useLocation();
  // console.log(location.pathname);
  const [conditionProfile, setConditionProfile] = useState([]);
  const getProfiles = async () => {
    const user_id = localStorage.getItem("user_id");
    const res = await getUser(user_id);
    setConditionProfile(res.data.data);
  };

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <aside
      className="sidenav newAddSidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-0 fixed-start ms-3"
      id="sidenav-main"
      style={{ backgroundColor: "white" }}
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>

        <a
          className="navbar-brand text-lg m-0 font-weight-bolds"
          href="/user/dashboard"
        >
          <img
            src="../images/salarlogo.jpeg"
            alt=""
            style={{ width: "auto", marginLeft: "20px" }}
          />
        </a>
      </div>
      <hr className="horizontal dark mt-0" />

      {location.pathname.includes("/user/") ? (
        <div
          className="collapse navbar-collapse  w-auto h-auto"
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/user/dashboard"
                className="nav-link active"
                aria-controls="dashboardsExamples"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "35px",
                    width: "40px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5H575.8zM288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM256 320C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Dashboard
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#account"
                className="nav-link "
                aria-controls="account"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "30px",
                    width: "35px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M208 80C208 53.49 229.5 32 256 32H320C346.5 32 368 53.49 368 80V144C368 170.5 346.5 192 320 192H312V232H464C494.9 232 520 257.1 520 288V320H528C554.5 320 576 341.5 576 368V432C576 458.5 554.5 480 528 480H464C437.5 480 416 458.5 416 432V368C416 341.5 437.5 320 464 320H472V288C472 283.6 468.4 280 464 280H312V320H320C346.5 320 368 341.5 368 368V432C368 458.5 346.5 480 320 480H256C229.5 480 208 458.5 208 432V368C208 341.5 229.5 320 256 320H264V280H112C107.6 280 104 283.6 104 288V320H112C138.5 320 160 341.5 160 368V432C160 458.5 138.5 480 112 480H48C21.49 480 0 458.5 0 432V368C0 341.5 21.49 320 48 320H56V288C56 257.1 81.07 232 112 232H264V192H256C229.5 192 208 170.5 208 144V80z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  My Account
                </span>
              </a>
              <div className="collapse " id="account">
                <ul className="nav ms-4 ps-3">
                  {conditionProfile && conditionProfile.role === "regular" ? (
                    <>
                      <li className="nav-item ">
                        <Link className="nav-link " to="/user/Personaldetails">
                          <span
                            className="sidenav-normal"
                            style={{ color: "black", fontWeight: "500" }}
                          >
                            Personal Details
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link className="nav-link " to="/user/Kyc">
                          <span
                            className="sidenav-normal"
                            style={{ color: "black", fontWeight: "500" }}
                          >
                            KYC
                          </span>
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item ">
                        <Link
                          className="nav-link "
                          to="/user/Personaldetailsorg"
                        >
                          <span
                            className="sidenav-normal"
                            style={{ color: "black", fontWeight: "500" }}
                          >
                            Personal Details (ORG)
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item ">
                        <Link className="nav-link " to="/user/Kycorg">
                          <span
                            className="sidenav-normal"
                            style={{ color: "black", fontWeight: "500" }}
                          >
                            KYC (ORG)
                          </span>
                        </Link>
                      </li>
                    </>
                  )}
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Bankdetails">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Bank Details
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Changepass">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Change Password
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Changetxnpass">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Change Txn Password
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                to="/user/Add1"
                className="nav-link "
                aria-controls="team"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "30px",
                    width: "35px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Manage Address
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/user/Myteam"
                className="nav-link "
                aria-controls="team"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "30px",
                    width: "35px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  My Sponsored Team
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#team"
                className="nav-link "
                aria-controls="team"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "30px",
                    width: "35px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M208 80C208 53.49 229.5 32 256 32H320C346.5 32 368 53.49 368 80V144C368 170.5 346.5 192 320 192H312V232H464C494.9 232 520 257.1 520 288V320H528C554.5 320 576 341.5 576 368V432C576 458.5 554.5 480 528 480H464C437.5 480 416 458.5 416 432V368C416 341.5 437.5 320 464 320H472V288C472 283.6 468.4 280 464 280H312V320H320C346.5 320 368 341.5 368 368V432C368 458.5 346.5 480 320 480H256C229.5 480 208 458.5 208 432V368C208 341.5 229.5 320 256 320H264V280H112C107.6 280 104 283.6 104 288V320H112C138.5 320 160 341.5 160 368V432C160 458.5 138.5 480 112 480H48C21.49 480 0 458.5 0 432V368C0 341.5 21.49 320 48 320H56V288C56 257.1 81.07 232 112 232H264V192H256C229.5 192 208 170.5 208 144V80z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  My Network Team
                </span>
              </a>
              <div className="collapse " id="team">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Addteam">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Add Team
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Teambonuslevel">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Team Tree
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to="/user/Productcommission"
                className="nav-link "
                aria-controls="team"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "30px",
                    width: "35px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Product Commission
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#Myorders"
                className="nav-link "
                aria-controls="Myorders"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "30px",
                    width: "35px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  My Orders
                </span>
              </a>
              <div className="collapse " id="Myorders">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Orders">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Orders
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Refund">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Refund
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Returnreplace">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Return & Replacement
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Productchats">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Product Chats
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Productreview">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Product Review & Ratting
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Ordertrack">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Track Order
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#mystuff"
                className="nav-link "
                aria-controls="mystuff"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "30px",
                    width: "35px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M191.9 448.6c-9.766 0-19.48-2.969-27.78-8.891L32 340.2V480c0 17.62 14.38 32 32 32h256c17.62 0 32-14.38 32-32v-139.8L220.2 439.5C211.7 445.6 201.8 448.6 191.9 448.6zM192 192c0-35.25 28.75-64 64-64h224V32c0-17.62-14.38-32-32-32H128C110.4 0 96 14.38 96 32v192h96V192zM320 256H64C46.38 256 32 270.4 32 288v12.18l151 113.8c5.25 3.719 12.7 3.734 18.27-.25L352 300.2V288C352 270.4 337.6 256 320 256zM576 160H256C238.4 160 224 174.4 224 192v32h96c33.25 0 60.63 25.38 63.75 57.88L384 416h192c17.62 0 32-14.38 32-32V192C608 174.4 593.6 160 576 160zM544 288h-64V224h64V288z" />
                  </svg>{" "}
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  My Stuff
                </span>
              </a>
              <div className="collapse " id="mystuff">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Points">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Points
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Rewards">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Rewards
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Offers">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Offers
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Creditdebit">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Credit / Debit
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Shoppingamount">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Shopping Amount
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#myearning"
                className="nav-link "
                aria-controls="myearning"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "30px",
                    width: "35px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M416 176C416 78.8 322.9 0 208 0S0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4c-16.39 32.76-39.23 57.32-39.59 57.68c-2.1 2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 343.1 169.8 352 208 352C322.9 352 416 273.2 416 176zM269.8 218.3C266.2 239.2 250.4 252.1 228 257.7V268c0 11.03-8.953 20-20 20s-20-8.969-20-20V257.2c-8.682-1.922-17.3-4.723-25.06-7.512l-4.266-1.5C148.3 244.5 142.8 233.1 146.5 222.7c3.688-10.41 15.11-15.81 25.52-12.22l4.469 1.625c7.844 2.812 16.72 6 23.66 7.031C213.8 221.3 229 219.3 230.4 211.5C231.3 206.4 231.8 203.6 202.5 195.2L196.7 193.5c-17.33-5.094-57.92-17-50.52-59.84C149.8 112.8 165.6 98.76 188 93.99V84c0-11.03 8.953-20 20-20s20 8.969 20 20v10.63c5.453 1.195 11.34 2.789 18.56 5.273C257 103.5 262.5 114.9 258.9 125.4C255.3 135.8 243.8 141.3 233.4 137.7c-5.859-2.031-12-4-17.59-4.844C202.2 130.8 186.1 132.7 185.6 140.5C184.8 144.1 184.3 148.2 207.1 155.2L213.5 156.8C235.8 163.1 277.3 175 269.8 218.3zM599.6 443.7C624.8 413.9 640 376.6 640 336C640 238.8 554 160 448 160c-.3145 0-.6191 .041-.9336 .043C447.5 165.3 448 170.6 448 176c0 98.62-79.68 181.2-186.1 202.5C282.7 455.1 357.1 512 448 512c33.69 0 65.32-8.008 92.85-21.98C565.2 502 596.1 512 632.3 512c3.059 0 5.76-1.725 7.02-4.605c1.229-2.879 .6582-6.148-1.441-8.354C637.6 498.7 615.9 475.3 599.6 443.7z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  My Earnings
                </span>
              </a>
              <div className="collapse " id="myearning">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Sponsorcommission">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Sponsor Commission{" "}
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/AURCommission">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        AUR Commission{" "}
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Procommission">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Pro Commission{" "}
                      </span>
                    </Link>
                  </li>
                  {/* <li className="nav-item ">
                    <Link className="nav-link " to="/user/Cashbackcommission">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black" }}
                      >
                        Cashback Commission{" "}
                      </span>
                    </Link>
                  </li> */}
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Membership">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Membership Commission{" "}
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Teambonus">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Team Income
                      </span>
                    </Link>
                  </li>
                  {/* <li className="nav-item ">
                    <Link className="nav-link " to="/user/Tree">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black" }}
                      >
                       Tree{" "}
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Viewtable">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black" }}
                      >
                       View{" "}
                      </span>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#mywallet"
                className="nav-link "
                aria-controls="mywallet"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "30px",
                    width: "35px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  My Wallet
                </span>
              </a>
              <div className="collapse " id="mywallet">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Transferwallet">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Transfer to Wallet
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Fundtransfer">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Fund Transfer{" "}
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Fundsrecieved">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Funds Recieved
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Fundstransferhis">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Funds Transfer History{" "}
                      </span>
                    </Link>
                  </li>
                  {/* <li className="nav-item ">
                      <Link className="nav-link " to="/user/Selftransferwall">
                        <span className="sidenav-normal" style={{color:"black"}}>Self Transfer Wallet History</span>
                      </Link>
                    </li> */}
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Mywallhistory">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        My wallet History
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#Withdrawl"
                className="nav-link "
                aria-controls="Withdrawl"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "30px",
                    width: "35px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M535 7.03C544.4-2.343 559.6-2.343 568.1 7.029L632.1 71.02C637.5 75.52 640 81.63 640 87.99C640 94.36 637.5 100.5 632.1 104.1L568.1 168.1C559.6 178.3 544.4 178.3 535 168.1C525.7 159.6 525.7 144.4 535 135L558.1 111.1L384 111.1C370.7 111.1 360 101.2 360 87.99C360 74.74 370.7 63.99 384 63.99L558.1 63.1L535 40.97C525.7 31.6 525.7 16.4 535 7.03V7.03zM104.1 376.1L81.94 400L255.1 399.1C269.3 399.1 279.1 410.7 279.1 423.1C279.1 437.2 269.3 447.1 255.1 447.1L81.95 448L104.1 471C114.3 480.4 114.3 495.6 104.1 504.1C95.6 514.3 80.4 514.3 71.03 504.1L7.029 440.1C2.528 436.5-.0003 430.4 0 423.1C0 417.6 2.529 411.5 7.03 407L71.03 343C80.4 333.7 95.6 333.7 104.1 343C114.3 352.4 114.3 367.6 104.1 376.1H104.1zM95.1 64H337.9C334.1 71.18 332 79.34 332 87.1C332 116.7 355.3 139.1 384 139.1L481.1 139.1C484.4 157.5 494.9 172.5 509.4 181.9C511.1 184.3 513.1 186.6 515.2 188.8C535.5 209.1 568.5 209.1 588.8 188.8L608 169.5V384C608 419.3 579.3 448 544 448H302.1C305.9 440.8 307.1 432.7 307.1 423.1C307.1 395.3 284.7 371.1 255.1 371.1L158.9 372C155.5 354.5 145.1 339.5 130.6 330.1C128.9 327.7 126.9 325.4 124.8 323.2C104.5 302.9 71.54 302.9 51.23 323.2L31.1 342.5V128C31.1 92.65 60.65 64 95.1 64V64zM95.1 192C131.3 192 159.1 163.3 159.1 128H95.1V192zM544 384V320C508.7 320 480 348.7 480 384H544zM319.1 352C373 352 416 309 416 256C416 202.1 373 160 319.1 160C266.1 160 223.1 202.1 223.1 256C223.1 309 266.1 352 319.1 352z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Withdrawl
                </span>
              </a>

              <div className="collapse " id="Withdrawl">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Withdrawreq">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        Withdraw Request
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Withdrawhistory">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        {" "}
                        Withdraw History{" "}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#Ticket"
                className="nav-link "
                aria-controls="Ticket"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "30px",
                    width: "35px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M128 160H448V352H128V160zM512 64C547.3 64 576 92.65 576 128V208C549.5 208 528 229.5 528 256C528 282.5 549.5 304 576 304V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V304C26.51 304 48 282.5 48 256C48 229.5 26.51 208 0 208V128C0 92.65 28.65 64 64 64H512zM96 352C96 369.7 110.3 384 128 384H448C465.7 384 480 369.7 480 352V160C480 142.3 465.7 128 448 128H128C110.3 128 96 142.3 96 160V352z" />
                  </svg>
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Support Ticket
                </span>
              </a>

              {/* <div className="collapse " id="Ticket">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Addticket">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black" }}
                      >
                        {" "}
                        Ticket
                      </span>
                    </Link>
                  </li>
                </ul>
              </div> */}
              <div className="collapse " id="Ticket">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <Link className="nav-link " to="/user/Ticketlist">
                      <span
                        className="sidenav-normal"
                        style={{ color: "black", fontWeight: "600" }}
                      >
                        {" "}
                        Ticket List
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to="/user/Playgames"
                className="nav-link "
                aria-controls="team"
                role="button"
                aria-expanded="false"
              >
                <div
                  class="icon ico icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2"
                  style={{
                    height: "30px",
                    width: "35px",
                    color: "#6dd5ed",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M448 64H192C85.96 64 0 149.1 0 256s85.96 192 192 192h256c106 0 192-85.96 192-192S554 64 448 64zM247.1 280h-32v32c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24v-32L136 279.1C122.8 279.1 111.1 269.2 111.1 256c0-13.2 10.85-24.01 24.05-24.01L167.1 232v-32c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24v32h32c13.2 0 24.02 10.8 24.02 24C271.1 269.2 261.2 280 247.1 280zM431.1 344c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40s39.1 17.88 39.1 40S454.1 344 431.1 344zM495.1 248c-22.12 0-39.1-17.87-39.1-39.1s17.87-40 39.1-40c22.12 0 39.1 17.88 39.1 40S518.1 248 495.1 248z" />
                  </svg>{" "}
                </div>
                <span
                  className="nav-link-text ms-1"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Play Games
                </span>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div
          className="collapse navbar-collapse  w-auto h-auto"
          id="sidenav-collapse-main"
        ></div>
      )}
    </aside>
  );
};

export default Sidebar;
