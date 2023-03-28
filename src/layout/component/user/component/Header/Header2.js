/** @format */

import React, {
  Suspense,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "../../assets/admin/assets/js/soft-ui-dashboard.js.map";
import Rightnav from "../Rightnavbar/Rightnav";

const Header2 = (handleClick, props) => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const handleClick2 = (e) => {
    //console.log("chile", e);
    if (e == "close") {
      setIsActives((current) => !current);
    }
    // 👇️ take parameter passed from Child component
    //setCount(current => current + num);
  };

  const handleClick3 = (e) => {
    //console.log("chile", e);
    if (e == "close") {
      setIsActivess((current) => !current);
    }
    // 👇️ take parameter passed from Child component
    //setCount(current => current + num);
  };

  const [isActives, setIsActives] = useState(false);
  const [isActivess, setIsActivess] = useState(false);

  const gotoSidenav = () => {
    console.log("Rightnav");
    setIsActives((current) => !current);
  };

  const gotoSidenavLeft = (props) => {
    console.log("Sidebar");
    setIsActivess((current) => !current);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
    //message.success("Logged out successfully");
  };

  useEffect(() => {
    const userId = localStorage.getItem("data");
    if (userId) {
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className={isActives ? "bg-salmon" : ""}>
        <Rightnav handleClicks3={handleClick2} />
      </div>
      <div className={isActivess ? "bg-salmons" : ""}>
        <Sidebar handleClicks4={handleClick3} />
      </div>
      <nav
        className="navbar navbar-main navbar-expand-lg position-sticky mt-0 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky"
        id="navbarBlur"
        data-scroll="true"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid py-1 px-3">
          <div className="sidenav-toggler sidenav-toggler-inner d-xl-block d-none ">
            <a href="" className="nav-link text-body p-0">
              <div className="sidenav-toggler-inner">
                <i className="sidenav-toggler-line"></i>
                <i className="sidenav-toggler-line"></i>
                <i className="sidenav-toggler-line"></i>
              </div>
            </a>
          </div>
          <span
            className="input-group-text "
            style={{
              marginLeft: "10px",
              width: "150px",
              justifyContent: "center",
              color: "black",
            }}
          >
            Download Broucher
          </span>
          <div
            className="collapse navbar-collapse mt-sm-0 mt-2 me-md-6 me-sm-4"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div className="input-group">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  // style={{ width: "125px" }}
                >
                  <option selected>Langauge</option>
                  <option value="1">Telugu</option>
                </select>{" "}
              </div>
            </div>
            <ul className="navbar-nav  justify-content-end">
              <li className="nav-item d-flex align-items-center">
                <a
                  href="javascript:void('0')"
                  onClick={() => logout()}
                  className="nav-link  font-weight-bold px-0"
                >
                  <i className="fa fa-user me-sm-1"></i>
                  <span className="d-sm-inline d-none">Logout</span>
                </a>
              </li>
              <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                <a
                  href="javascript:void('0');"
                  onClick={() => gotoSidenavLeft()}
                  className="nav-link p-0"
                  id="iconNavbarSidenav"
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                    <i className="sidenav-toggler-line"></i>
                  </div>
                </a>
              </li>
              <li className="nav-item px-3 d-flex align-items-center">
                <a
                  href="javascript:void('0');"
                  onClick={() => gotoSidenav()}
                  className="nav-link  p-0"
                >
                  <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                </a>
              </li>
              <li className="nav-item dropdown pe-2 d-flex align-items-center">
                <a
                  href="#"
                  className="nav-link p-0"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell cursor-pointer"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li className="mb-2">
                    <a className="dropdown-item border-radius-md" href="#">
                      <div className="d-flex py-1">
                        <div className="my-auto">
                          <img
                            src="{{url_for('static',filename='admin/assets/img/team-2.jpg')}}"
                            className="avatar avatar-sm  me-3 "
                            alt="user image"
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-sm font-weight-normal mb-1">
                            <span className="font-weight-bold">
                              New message
                            </span>{" "}
                            from Laur
                          </h6>
                          <p className="text-xs text-secondary mb-0">
                            <i className="fa fa-clock me-1"></i>
                            13 minutes ago
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <a
          onClick={() => gotoSidenav()}
          class="fixed-plugin-button addfixed-plugin-button text-dark position-fixed px-3 py-2"
        >
          <i class="fa fa-cog py-2" aria-hidden="true">
            {" "}
          </i>
        </a>
      </nav>
    </>
  );
};

export default Header2;
