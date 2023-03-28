/** @format */

import React from "react";
import Dashboardheader from "../Dashboard/dashboardheader";
function Cashbackcommission() {
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
                  <h2>Cashback Commission</h2>
                  <div class="ms-auto my-auto mt-lg-0 mt-4">
                    <div class="ms-auto my-auto">
                      <button
                        class="bt btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1"
                        data-type="csv"
                        type="button"
                        name="button"
                      >
                        CSV
                      </button>
                      <button
                        class="btn btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1"
                        data-type="csv"
                        type="button"
                        name="button"
                      >
                        Export
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-md-1">
                  <select
                    class="input form-select"
                    aria-label="Default select example"
                  >
                    <option selected>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <input
                    class="date form-control"
                    type="date"
                    value="2018-11-23"
                    id="example-date-input"
                  ></input>
                </div>
                <div className="col-md-3">
                  <input
                    class="date form-control"
                    type="date"
                    value="2018-11-23"
                    id="example-date-input"
                  ></input>
                </div>
                <div className="col-md-2">
                  <button
                    class="btn bg-gradient-secondary btn-sm export mb-0 mt-sm-0 mt-1"
                    data-type="csv"
                    type="button"
                    name="button"
                  >
                    Submit
                  </button>
                </div>
                <div className="col-md-2">
                  <input
                    class="for form-control"
                    type="search"
                    placeholder="Search....."
                  />
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
                        <th>S No</th>
                        <th>Date</th>
                        <th>Order No</th>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Final Price</th>
                        <th>Grand Total</th>
                        <th>Cashback Commission</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-sm">1</td>
                        <td class="text-sm">Date</td>
                        <td class="text-sm">Order No</td>
                        <td class="text-sm">Product Name</td>
                        <td class="text-sm">Qty</td>
                        <td class="text-sm">Final Price</td>
                        <td class="text-sm">Grand Total</td>
                        <td class="text-sm">Cashback Commission</td>
                        <td class="text-sm">Status</td>
                      </tr>
                      <tr>
                        <td class="text-sm">1</td>
                        <td class="text-sm">Date</td>
                        <td class="text-sm">Order No</td>
                        <td class="text-sm">Product Name</td>
                        <td class="text-sm">Qty</td>
                        <td class="text-sm">Final Price</td>
                        <td class="text-sm">Grand Total</td>
                        <td class="text-sm">Cashback Commission</td>
                        <td class="text-sm">Status</td>
                      </tr>
                      <tr>
                        <td class="text-sm">1</td>
                        <td class="text-sm">Date</td>
                        <td class="text-sm">Order No</td>
                        <td class="text-sm">Product Name</td>
                        <td class="text-sm">Qty</td>
                        <td class="text-sm">Final Price</td>
                        <td class="text-sm">Grand Total</td>
                        <td class="text-sm">Cashback Commission</td>
                        <td class="text-sm">Status</td>
                      </tr>
                      <tr>
                        <td class="text-sm">1</td>
                        <td class="text-sm">Date</td>
                        <td class="text-sm">Order No</td>
                        <td class="text-sm">Product Name</td>
                        <td class="text-sm">Qty</td>
                        <td class="text-sm">Final Price</td>
                        <td class="text-sm">Grand Total</td>
                        <td class="text-sm">Cashback Commission</td>
                        <td class="text-sm">Status</td>
                      </tr>
                      <tr>
                        <td class="text-sm">1</td>
                        <td class="text-sm">Date</td>
                        <td class="text-sm">Order No</td>
                        <td class="text-sm">Product Name</td>
                        <td class="text-sm">Qty</td>
                        <td class="text-sm">Final Price</td>
                        <td class="text-sm">Grand Total</td>
                        <td class="text-sm">Cashback Commission</td>
                        <td class="text-sm">Status</td>
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

export default Cashbackcommission;
