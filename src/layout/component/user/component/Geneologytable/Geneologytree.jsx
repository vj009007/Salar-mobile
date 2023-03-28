/** @format */

import React from "react";
import Dashboardheader from "../Dashboard/dashboardheader";
function Geneologytree() {
  return (
    <>
      <div className="myAccounts">
        <Dashboardheader />
        <div className="row mt-4">
          <div class="col-12 col-xl-12 mt-xl-0 mt-4">
            <div class="card h-100">
              <div className="row mt-4"></div>
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <input
                    type="text"
                    class="form-control input1"
                    placeholder="Search here"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    style={{ textAlign: "center" }}
                  />
                </div>
              </div>
              <div class="card-header pb-0 p-3" style={{ height: "500px" }}>
                <h3 class="mb-0" style={{ textAlign: "center" }}>
                  Geneology
                </h3>
                <div className="row mt-4"></div>
                <div className="col-12" style={{ textAlign: "center" }}>
                  {" "}
                  <a
                    href="javascript:;"
                    class="avatar avatar-xl rounded-circle border border-primary"
                  >
                    <img
                      alt="Image placeholder"
                      class="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-1" style={{ textAlign: "center" }}>
                    {" "}
                    {/* <a
                    href="javascript:;"
                    class="avatar avatar-lg rounded-circle border border-primary"
                  >
                    <img
                      alt="Image placeholder"
                      class="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a> */}{" "}
                  </div>
                  <div className="col-2" style={{ textAlign: "center" }}>
                    {" "}
                    <a
                      href="javascript:;"
                      class="avatar avatar-lg rounded-circle border border-primary"
                    >
                      <img
                        alt="Image placeholder"
                        class="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="col-2" style={{ textAlign: "center" }}>
                    {" "}
                    <a
                      href="javascript:;"
                      class="avatar avatar-lg rounded-circle border border-primary"
                    >
                      <img
                        alt="Image placeholder"
                        class="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="col-2" style={{ textAlign: "center" }}>
                    {" "}
                    <a
                      href="javascript:;"
                      class="avatar avatar-lg rounded-circle border border-primary"
                    >
                      <img
                        alt="Image placeholder"
                        class="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="col-2" style={{ textAlign: "center" }}>
                    {" "}
                    <a
                      href="javascript:;"
                      class="avatar avatar-lg rounded-circle border border-primary"
                    >
                      <img
                        alt="Image placeholder"
                        class="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="col-2" style={{ textAlign: "center" }}>
                    {" "}
                    <a
                      href="javascript:;"
                      class="avatar avatar-lg rounded-circle border border-primary"
                    >
                      <img
                        alt="Image placeholder"
                        class="p-1"
                        src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                      />
                    </a>
                  </div>
                  <div className="col-1" style={{ textAlign: "center" }}>
                    {" "}
                    {/* <a
                    href="javascript:;"
                    class="avatar avatar-lg rounded-circle border border-primary"
                  >
                    <img
                      alt="Image placeholder"
                      class="p-1"
                      src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                    />
                  </a> */}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Geneologytree;
