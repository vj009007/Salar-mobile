/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Dashboardheader from "../Dashboard/dashboardheader";
function Tree() {
  return (
    <div className="myAccounts">
     <Dashboardheader />
      <div class="container-fluid py-4">
        <br></br>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header pb-0">
                <div class="d-lg-flex">
                  <h2>Geneology</h2>
                </div>
              </div>
              <br></br>
              <div className="row" style={{ justifyContent: "start" }}>
                <div className="col-md-2">
                  <input
                    class="for form-control"
                    type="search"
                    placeholder="Search....."
                  />
                </div>
                <div className="row mt-4">
                  <div class="d-flex align-items-center ms-6 mt-3 ps-1">
                    <div>
                      <p class="text-xs mb-0 text-secondary font-weight-bold">
                        Order No:
                      </p>
                    </div>
                    <div className="margin">
                      <p class="text-xs mb-0 text-secondary font-weight-bold"></p>
                    </div>
                    <div className="margin">
                      <p class="text-xs mb-0 text-secondary font-weight-bold">
                        Order Upline Id:
                      </p>
                    </div>
                    <div className="margin">
                      <p class="text-xs mb-0 text-secondary font-weight-bold"></p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-body px-0 pb-0">
                <div class="container table-responsive">
                  <table
                    class=" table table-bordered table table-flush"
                    id="products-list"
                  >
                    <thead class="thead-light">
                      <tr>
                        <th>Level</th>
                        <th>Required Members</th>
                        <th>Joined Members</th>
                        <th>Commission Earned</th>
                        <th>Status</th>
                        <th>Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-sm">Level</td>
                        <td class="text-sm">Required Members</td>
                        <td class="text-sm">Joined Members</td>
                        <td class="text-sm">Commission Earned</td>
                        <td class="text-sm">Team</td>
                        <Link to="/user/Viewtable">
                          <td>
                            <span class="badge badge-danger badge-sm">
                              View Team
                            </span>
                          </td>
                        </Link>
                      </tr>
                      <tr>
                        <td class="text-sm">Level</td>
                        <td class="text-sm">Required Members</td>
                        <td class="text-sm">Joined Members</td>
                        <td class="text-sm">Commission Earned</td>
                        <td class="text-sm">Team</td>
                        <Link to="/user/Viewtable">
                          <td>
                            <span class="badge badge-danger badge-sm">
                              View Team
                            </span>
                          </td>
                        </Link>
                      </tr>
                      <tr>
                        <td class="text-sm">Level</td>
                        <td class="text-sm">Required Members</td>
                        <td class="text-sm">Joined Members</td>
                        <td class="text-sm">Commission Earned</td>
                        <td class="text-sm">Team</td>
                        <Link to="/user/Viewtable">
                          <td>
                            <span class="badge badge-danger badge-sm">
                              View Team
                            </span>
                          </td>
                        </Link>
                      </tr>
                      <tr>
                        <td class="text-sm">Level</td>
                        <td class="text-sm">Required Members</td>
                        <td class="text-sm">Joined Members</td>
                        <td class="text-sm">Commission Earned</td>
                        <td class="text-sm">Team</td>
                        <Link to="/user/Viewtable">
                          <td>
                            <span class="badge badge-danger badge-sm">
                              View Team
                            </span>
                          </td>
                        </Link>
                      </tr>
                      <tr>
                        <td class="text-sm">Level</td>
                        <td class="text-sm">Required Members</td>
                        <td class="text-sm">Joined Members</td>
                        <td class="text-sm">Commission Earned</td>
                        <td class="text-sm">Team</td>
                        <Link to="/user/Viewtable">
                          <td>
                            <span class="badge badge-danger badge-sm">
                              View Team
                            </span>
                          </td>
                        </Link>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row mt-4">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination" style={{ justifyContent: "end" }}>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="javascript:;"
                          aria-label="Previous"
                        >
                          <i class="fa fa-angle-left"></i>
                          <span class="sr-only">Previous</span>
                        </a>
                      </li>
                      <li class="page-item">
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
                        <a
                          class="page-link"
                          href="javascript:;"
                          aria-label="Next"
                        >
                          <i class="fa fa-angle-right"></i>
                          <span class="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tree;
