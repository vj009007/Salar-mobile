/** @format */

import React, { useState, useEffect } from "react";
import {
  getUserDashboardDatabyId,
  getNetworkTeamCount,
} from "../../repo/dashboard";
import { getsponserbyId } from "../../repo/sponserTeam";
import Dashboardheader from "./dashboardheader";
import "./Dashboard.css";

function Dashboard() {
  const [D, setD] = useState();
  const [a, setA] = useState([]);
  const [N, setN] = useState([]);
  const GetUserData = async () => {
    let userid = localStorage.getItem("user_id");
    let data = await getUserDashboardDatabyId(userid);
    let main = data.data.payload;
    setD(main);
  };

  const getSponserTeamByUser = async () => {
    let userid = localStorage.getItem("registerId");
    let data = await getsponserbyId(userid);
    setA(data.data.payload);
  };

  const getNetworkCount = async () => {
    let res = await getNetworkTeamCount();
    setN(res.data.data);
  };

  useEffect(() => {
    GetUserData();
    getSponserTeamByUser();
    getNetworkCount();
  }, []);

  if (N) {
    console.log(N.networkTeamCount);
  }
  return (
    <div className="myAccounts">
      <Dashboardheader />
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card overflow-scroll cardC">
              <div className="card-body d-flex">
                {a &&
                  a.map((item, i) => (
                    <div className="col-1 imgd">
                      {" "}
                      <a
                        href="javascript:;"
                        className="avatar avatar-lg border-1 rounded-circle border border-info"
                      >
                        <img
                          alt="Image placeholder"
                          className="p-1"
                          src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                        />
                      </a>
                      <p className="mb-0 text-sm">{item.user_name}</p>
                    </div>
                  ))}
                {/* <div className="col-1 imgs">
                  {" "}
                  <a
                    href="javascript:;"
                    className="avatar avatar-lg border-1 rounded-circle bg-gradient-info"
                  >
                    <i className="fas fa-plus text-white"></i>
                  </a>
                </div>
                <div className="col-1 imgd">
                  {" "}
                  <a
                    href="javascript:;"
                    className="avatar avatar-lg rounded-circle border border-info"
                  >
                    <img
                      alt="Image placeholder"
                      className="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                  <p className="mb-0 text-sm">Abbie W</p>
                </div>
                <div className="col-1 imgd">
                  {" "}
                  <a
                    href="javascript:;"
                    className="avatar avatar-lg rounded-circle border border-info"
                  >
                    <img
                      alt="Image placeholder"
                      className="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                  <p className="mb-0 text-sm">Abbie W</p>
                </div>
                <div className="col-1 imgd">
                  <a
                    href="javascript:;"
                    className="avatar avatar-lg rounded-circle border border-info"
                  >
                    <img
                      alt="Image placeholder"
                      className="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                  <p className="mb-0 text-sm">Abbie W</p>
                </div>
                <div className="col-1 imgd">
                  {" "}
                  <a
                    href="javascript:;"
                    className="avatar avatar-lg rounded-circle border border-info"
                  >
                    <img
                      alt="Image placeholder"
                      className="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                  <p className="mb-0 text-sm">Abbie W</p>
                </div>
                <div className="col-1 imgd">
                  {" "}
                  <a
                    href="javascript:;"
                    className="avatar avatar-lg rounded-circle border border-info"
                  >
                    <img
                      alt="Image placeholder"
                      className="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                  <p className="mb-0 text-sm">Abbie W</p>
                </div>
                <div className="col-1 imgd">
                  {" "}
                  <a
                    href="javascript:;"
                    className="avatar avatar-lg rounded-circle border border-info"
                  >
                    <img
                      alt="Image placeholder"
                      className="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                  <p className="mb-0 text-sm">Abbie W</p>
                </div>
                <div className="col-1 imgd">
                  <a
                    href="javascript:;"
                    className="avatar avatar-lg rounded-circle border border-info"
                  >
                    <img
                      alt="Image placeholder"
                      className="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                  <p className="mb-0 text-sm">Abbie W</p>
                </div>
                <div className="col-1 imgd">
                  {" "}
                  <a
                    href="javascript:;"
                    className="avatar avatar-lg rounded-circle border border-info"
                  >
                    <img
                      alt="Image placeholder"
                      className="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                  <p className="mb-0 text-sm">Abbie W</p>
                </div>
                <div className="col-1 imgd">
                  {" "}
                  <a
                    href="javascript:;"
                    className="avatar avatar-lg rounded-circle border border-info"
                  >
                    <img
                      alt="Image placeholder"
                      className="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                  <p className="mb-0 text-sm">Abbie W</p>
                </div>
                <div className="col-1 imgd">
                  {" "}
                  <a
                    href="javascript:;"
                    className="avatar avatar-lg rounded-circle border border-info"
                  >
                    <img
                      alt="Image placeholder"
                      className="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                  <p className="mb-0 text-sm">Abbie W</p>
                </div>
                <div className="col-1 imgd">
                  <a
                    href="javascript:;"
                    className="avatar avatar-lg rounded-circle border border-info"
                  >
                    <img
                      alt="Image placeholder"
                      className="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                  <p className="mb-0 text-sm">Abbie W</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-xl-7">
            <div className="card cardB">
              <div className="card-header d-flex pb-0 p-3">
                <h6 className="my-auto">Promotions</h6>
                <div className="nav-wrapper position-relative ms-auto w-50">
                  <ul className="nav nav-pills nav-fill p-1" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1 active"
                        data-bs-toggle="tab"
                        href="#cam1"
                        role="tab"
                        aria-controls="cam1"
                        aria-selected="true"
                      ></a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1"
                        data-bs-toggle="tab"
                        href="#cam2"
                        role="tab"
                        aria-controls="cam2"
                        aria-selected="false"
                      ></a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link mb-0 px-0 py-1"
                        data-bs-toggle="tab"
                        href="#cam3"
                        role="tab"
                        aria-controls="cam3"
                        aria-selected="false"
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown pt-2">
                  <a
                    href="javascript:;"
                    className="text-secondary ps-4"
                    id="dropdownCam"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-v"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end me-sm-n4 px-2 py-3"
                    aria-labelledby="dropdownCam"
                  >
                    <li>
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        Pause
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        Stop
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        Schedule
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item border-radius-md text-danger"
                        href="javascript:;"
                      >
                        Remove
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body p-3 mt-2">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show position-relative active height-400 border-radius-lg"
                    id="cam1"
                    role="tabpanel"
                    aria-labelledby="cam1"
                    style={{ backgroundSize: "cover" }}
                  >
                    <div className="position-absolute d-flex top-0 w-100">
                      <p className="text-white p-3 mb-0">17.05.2021 4:34PM</p>
                      <div className="ms-auto p-3"></div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade position-relative height-400 border-radius-lg"
                    id="cam2"
                    role="tabpanel"
                    aria-labelledby="cam2"
                    style={{ backgroundSize: "cover" }}
                  >
                    <div className="position-absolute d-flex top-0 w-100">
                      <p className="text-white p-3 mb-0">17.05.2021 4:35PM</p>
                      <div className="ms-auto p-3">
                        <span className="badge badge-secondary">
                          <i className="fas fa-dot-circle text-danger"></i>
                          Recording
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade position-relative height-400 border-radius-lg"
                    id="cam3"
                    role="tabpanel"
                    aria-labelledby="cam3"
                    style={{ backgroundSize: "cover" }}
                  >
                    <div className="position-absolute d-flex top-0 w-100">
                      <p className="text-white p-3 mb-0">17.05.2021 4:57PM</p>
                      <div className="ms-auto p-3">
                        <span className="badge badge-secondary">
                          <i className="fas fa-dot-circle text-danger"></i>
                          Recording
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 ms-auto mt-xl-0 mt-4">
            <div className="row">
              <div className="col-12">
                <div
                  className="card bg-gradient-info cardD"
                  style={{ height: "100px" }}
                >
                  <div className="card-body p-3">
                    <div className="row">
                      <div className="col-8 my-auto">
                        <div className="numbers">
                          <p className="text-white text-sm mb-0 text-capitalize font-weight-bold opacity-7">
                            Total Earnings
                          </p>
                          <h3 class="text-white font-weight-bolder mb-0">
                            {D && D.myearning.total
                              ? D.myearning.total.toFixed(2)
                              : "00"}
                          </h3>
                        </div>
                      </div>
                      <div className="col-4 text-end">
                        <h1>
                          <b style={{ color: "white" }}>₹</b>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 mt-md-0 mt-4">
                <div className="card cardF">
                  <div className="card-body text-center">
                    <h1 className="text-gradient text-info">
                      {" "}
                      <span id="status2" countto="44">
                        {D && D.myearning.member
                          ? D.myearning.member.toFixed(2)
                          : "00"}
                      </span>{" "}
                    </h1>
                    <h6 className="mb-0 font-weight-bolder">
                      <b>Available Comm</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-md-0 mt-4">
                <div className="card cardF">
                  <div className="card-body text-center">
                    <h1 className="text-gradient text-info">
                      {" "}
                      <span id="status2" countto="44">
                        {D && D.myearning.sponsor
                          ? D.myearning.sponsor.toFixed(2)
                          : "00"}
                      </span>{" "}
                    </h1>
                    <h6 className="mb-0 font-weight-bolder">
                      <b>Sponsor Comm</b>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="card cardG">
                  <div className="card-body text-center">
                    <h1 className="text-gradient text-info">
                      <span id="status3" countto="87">
                        {D && D.myearning.aur
                          ? D.myearning.aur.toFixed(2)
                          : "00"}
                      </span>{" "}
                    </h1>
                    <h6 className="mb-0 font-weight-bolder">
                      {" "}
                      <b> AUR Commission</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-md-0 mt-4">
                <div className="card cardH">
                  <div className="card-body text-center">
                    <h1 className="text-gradient text-info">
                      <span id="status4" countto="417">
                        {D && D.myearning.pro
                          ? D.myearning.pro.toFixed(2)
                          : "00"}
                      </span>{" "}
                    </h1>
                    <h6 className="mb-0 font-weight-bolder">
                      <b>Pro Commission</b>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-sm-4">
              <div className="card cardI">
                <div
                  className="card-body text-center"
                  style={{ height: "143px" }}
                >
                  {(() => {
                    switch (D && D.kyc ? D.kyc : null) {
                      case "Pending":
                        return (
                          <span className="badge badge-info badge-sm">
                            Pending
                          </span>
                        );
                      case "Approved":
                        return (
                          <span className="badge badge-success badge-sm">
                            Approved
                          </span>
                        );
                      case "Rejected":
                        return (
                          <span className="badge badge-danger badge-sm">
                            Rejected
                          </span>
                        );
                      default:
                        return (
                          <span class="badge badge-info badge-sm">Pending</span>
                        );
                    }
                  })()}
                  <h6 className="mb-0 font-weight-bolder">
                    {" "}
                    <b>KYC</b>{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card cardJ">
                <div className="card-body text-center">
                  <h1 className="text-gradient text-info">
                    <span id="status1" countto="21">
                      {D && D.myearning.team
                        ? D.myearning.team.toFixed(2)
                        : "00"}
                    </span>{" "}
                  </h1>
                  <h6 className="mb-0 font-weight-bolder">
                    <b>Team Income</b>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card cardK">
                <div
                  className="card-body text-center"
                  style={{ height: "143px" }}
                >
                  {(() => {
                    switch (
                      D && D.team_subcription ? D.team_subcription : "00"
                    ) {
                      case "active":
                        return (
                          <span className="badge badge-success badge-sm">
                            Active
                          </span>
                        );
                      case "Inactive":
                        return (
                          <span className="badge badge-danger badge-sm">
                            In-Active
                          </span>
                        );
                    }
                  })()}
                  <h6 className="mb-0 font-weight-bolder">
                    <b>Salar Subscription</b>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4">
              <div className="card cardL">
                <div className="card-body text-center">
                  <h1 className="text-gradient text-info">
                    <span id="status1" countto="21">
                      {D && D.sponsor_team ? D.sponsor_team : "00"}
                    </span>{" "}
                  </h1>
                  <h6 className="mb-0 font-weight-bolder">
                    {" "}
                    <b>My Sponsored Team</b>{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card cardM">
                <div className="card-body text-center">
                  <h1 className="text-gradient text-info">
                    {/* <span id="status1" countto="21">
                      {N.networkTeamCount}
                    </span>{" "} */}
                    <span id="status1" countto="21">
                      {D && D.sponsor_team ? D.sponsor_team : "00"}
                    </span>{" "}
                  </h1>
                  <h6 className="mb-0 font-weight-bolder">
                    {" "}
                    <b> My Network Team</b>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card cardN">
                <div className="card-body text-center">
                  <h1 className="text-gradient text-info">
                    <span id="status1" countto="21">
                      {D && D.withdrawls ? D.withdrawls : "00"}
                    </span>{" "}
                  </h1>
                  <h6 className="mb-0 font-weight-bolder">
                    {" "}
                    <b>Wallet</b>{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4">
              <div className="card cardO">
                <div className="card-body text-center">
                  <h1 className="text-gradient text-info">
                    <span id="status1" countto="21">
                      {D && D.shippingamount ? D.shippingamount : "00"}
                    </span>{" "}
                  </h1>
                  <h6 className="mb-0 font-weight-bolder">
                    {" "}
                    <b>Shopping Amount</b>{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card cardP">
                <div className="card-body text-center">
                  <h1 className="text-gradient text-info">
                    <span id="status1" countto="21">
                      {D && D.fund_transfer ? D.fund_transfer : "00"}
                    </span>{" "}
                  </h1>
                  <h6 className="mb-0 font-weight-bolder">
                    {" "}
                    <b>Funds Transfer</b>{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card cardQ">
                <div className="card-body text-center">
                  <h1 className="text-gradient text-info">
                    <span id="status1" countto="21">
                      {D && D.fund_recevied ? D.fund_recevied : "00"}
                    </span>{" "}
                  </h1>
                  <h6 className="mb-0 font-weight-bolder">
                    {" "}
                    <b> Funds Recieved</b>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4">
              <div className="card cardR">
                <div className="card-body text-center">
                  <h1 className="text-gradient text-info">
                    <span id="status1" countto="21">
                      {D && D.withdrawls ? D.withdrawls : "00"}
                    </span>{" "}
                  </h1>
                  <h6 className="mb-0 font-weight-bolder">
                    {" "}
                    <b>Withdrawls</b>{" "}
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card cardT">
                <div className="card-body text-center">
                  <h1 className="text-gradient text-info">
                    <span id="status1" countto="21">
                      {D && D.tickets ? D.tickets : "00"}
                    </span>{" "}
                  </h1>
                  <h6 className="mb-0 font-weight-bolder">
                    <b>Tickets</b>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card cardS">
                <div className="card-body text-center">
                  <h1 className="text-gradient text-info">
                    <span id="status1" countto="21">
                      21
                    </span>{" "}
                  </h1>
                  <h6 className="mb-0 font-weight-bolder">
                    <b>Hold</b>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4 mt-xl-0 mt-4">
          <div className="card h-60">
            <div className="card-header pb-0 p-3">
              <h6 className="mb-0">Total Orders</h6>
            </div>
            <div className="card-body p-3">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                  <div className="col-2">
                    {" "}
                    <a
                      href="javascript:;"
                      className="avatar avatar-sm rounded-circle border border-info"
                    >
                      <img
                        alt="Image placeholder"
                        className="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm">Orders</h6>
                  </div>
                  <a
                    className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                    href="javascript:;"
                  >
                    {D && D.order.order ? D.order.order : "00"}
                  </a>
                </li>
                {/* <li
                  className="list-group-item border-0 d-flex align-items-center px-0 mb-2"
                  style={{ marginTop: "-6px" }}
                >
                  <div className="col-2">
                    {" "}
                    <a
                      href="javascript:;"
                      className="avatar avatar-sm rounded-circle border border-info"
                    >
                      <img
                        alt="Image placeholder"
                        className="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm">Orders Processing</h6>
                  </div>
                  <a
                    className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                    href="javascript:;"
                  >
                    {D && D.order.OP ? D.order.OP : "00"}
                  </a>
                </li> */}
                {/* <li
                  className="list-group-item border-0 d-flex align-items-center px-0 mb-2"
                  style={{ marginTop: "-6px" }}
                >
                  <div className="col-2">
                    {" "}
                    <a
                      href="javascript:;"
                      className="avatar avatar-sm rounded-circle border border-info"
                    >
                      <img
                        alt="Image placeholder"
                        className="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm">Orders Dispatched</h6>
                  </div>
                  <a
                    className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                    href="javascript:;"
                  >
                    {D && D.order.ODP ? D.order.ODP : "00"}
                  </a>
                </li> */}
                {/* <li
                  className="list-group-item border-0 d-flex align-items-center px-0 mb-2"
                  style={{ marginTop: "-6px" }}
                >
                  <div className="col-2">
                    {" "}
                    <a
                      href="javascript:;"
                      className="avatar avatar-sm rounded-circle border border-info"
                    >
                      <img
                        alt="Image placeholder"
                        className="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm">Out for Delivery</h6>
                  </div>
                  <a
                    className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                    href="javascript:;"
                  >
                    {D && D.order.OFD ? D.order.OFD : "00"}
                  </a>
                </li> */}
                <li
                  className="list-group-item border-0 d-flex align-items-center px-0"
                  style={{ marginTop: "-6px" }}
                >
                  <div className="col-2">
                    {" "}
                    <a
                      href="javascript:;"
                      className="avatar avatar-sm rounded-circle border border-info"
                    >
                      <img
                        alt="Image placeholder"
                        className="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm">Delivered</h6>
                  </div>
                  <a
                    className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                    href="javascript:;"
                  >
                    {D && D.order.OD ? D.order.OD : "00"}
                  </a>
                </li>
                <li
                  className="list-group-item border-0 d-flex align-items-center px-0"
                  style={{ marginTop: "-6px" }}
                >
                  <div className="col-2">
                    {" "}
                    <a
                      href="javascript:;"
                      className="avatar avatar-sm rounded-circle border border-info"
                    >
                      <img
                        alt="Image placeholder"
                        className="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm">Cancelled</h6>
                  </div>
                  <a
                    className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                    href="javascript:;"
                  >
                    {D && D.order.OC ? D.order.OC : "00"}
                  </a>
                </li>
                <li
                  className="list-group-item border-0 d-flex align-items-center px-0"
                  style={{ marginTop: "-6px" }}
                >
                  <div className="col-2">
                    {" "}
                    <a
                      href="javascript:;"
                      className="avatar avatar-sm rounded-circle border border-info"
                    >
                      <img
                        alt="Image placeholder"
                        className="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm">Refund</h6>
                  </div>
                  <a
                    className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                    href="javascript:;"
                  >
                    {D && D.order.OR ? D.order.OR : "00"}
                  </a>
                </li>
                <li
                  className="list-group-item border-0 d-flex align-items-center px-0"
                  style={{ marginTop: "-6px" }}
                >
                  <div className="col-2">
                    {" "}
                    <a
                      href="javascript:;"
                      className="avatar avatar-sm rounded-circle border border-info"
                    >
                      <img
                        alt="Image placeholder"
                        className="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm">Return & Replacement</h6>
                  </div>
                  <a
                    className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                    href="javascript:;"
                  >
                    {D && D.order.ORR ? D.order.ORR : "00"}
                  </a>
                </li>
                {/* <li
                  className="list-group-item border-0 d-flex align-items-center px-0"
                  style={{ marginTop: "-6px" }}
                >
                  <div className="col-2">
                    {" "}
                    <a
                      href="javascript:;"
                      className="avatar avatar-sm rounded-circle border border-info"
                    >
                      <img
                        alt="Image placeholder"
                        className="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm"> Order Refused</h6>
                  </div>
                  <a
                    className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                    href="javascript:;"
                  >
                    {D && D.order.ORF ? D.order.ORF : "00"}
                  </a>
                </li>
                <li
                  className="list-group-item border-0 d-flex align-items-center px-0"
                  style={{ marginTop: "-6px" }}
                >
                  <div className="col-2">
                    {" "}
                    <a
                      href="javascript:;"
                      className="avatar avatar-sm rounded-circle border border-info"
                    >
                      <img
                        alt="Image placeholder"
                        className="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm">Undelivered</h6>
                  </div>
                  <a
                    className="btn btn-link pe-3 ps-0 mb-0 ms-auto"
                    href="javascript:;"
                  >
                    {D && D.order.OU ? D.order.OU : "00"}
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
