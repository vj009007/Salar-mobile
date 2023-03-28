/** @format */

import React from "react";

function Cashbackoffer() {
  return (
    <div className="myAccounts">
      <div class="container-fluid">
        <div
          class="page-header min-height-300 border-radius-xl mt-4"
          style={{ backgroundPositionY: "50%" }}
        >
          <span class="mask bg-gradient-info opacity-6"></span>
          <img
            src="../../../public/../"
            alt=""
            class="w-100 border-radius-lg shadow-sm"
          />
        </div>
        <div class="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden cd1 ">
          <div class="row gx-4 ">
            <div class="col-auto">
              <div className="col-3">
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
            </div>
            <div class="col-auto">
              <div class="h-100 nm1">
                <h5 class="mb-1 wr ">Name</h5>
              </div>
            </div>
            <div class="col-auto">
              <div class="h-100  ">
                <h5 class="mb-1"></h5>
              </div>
            </div>
            <div class="col-auto">
              <div class="h-100 nm2">
                <h5 class="mb-1 wr">Register ID</h5>
              </div>
            </div>
            <div class="col-auto">
              <div class="h-100 ">
                <h5 class="mb-1"></h5>
              </div>
            </div>
            <div class="col-auto ">
              <div class="h-100 nm3">
                <h5 class="mb-1 wr">Date Of Joining</h5>
              </div>
            </div>
            <div class="col-auto ">
              <div class="h-100">
                <h5 class="mb-1 "></h5>
              </div>
            </div>
            <div class=" col-auto">
              <div class="h-100 nm4">
                <h5 class="mb-1 wr">Sponsor ID</h5>
              </div>
            </div>
            <div class="col-auto ">
              <div class="h-100">
                <h5 class="mb-1 "></h5>
              </div>
            </div>
            <div class="col-auto">
              <div class="h-100 nm5">
                <h5 class="mb-1 wr">Sponsor Name</h5>
              </div>
            </div>
            <div class="col-auto ">
              <div class="h-100">
                <h5 class="mb-1"></h5>
              </div>
            </div>
            <div className="row spc">
              <div class=" refer input-group mb-0 ">
                <input
                  type="text"
                  class="form-control input1"
                  placeholder="Sponser Link"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-primary mb-0 input2"
                  type="button"
                  id="button-addon2"
                >
                  Copy
                </button>
              </div>
              <button
                type="button"
                class="btn btn-facebook btn-icon-only rounded-circle fb"
              >
                <span class="btn-inner--icon">
                  <i class="fab fa-facebook"></i>
                </span>
              </button>
              <button
                type="button"
                class="btn btn-success btn-icon-only rounded-circle wts"
              >
                <i class="fab fa-whatsapp"></i>
              </button>
              <button
                type="button"
                class="btn btn-dribbble  btn-icon-only rounded-circle int"
              >
                <i class="fab fa-instagram"></i>
              </button>
              <button
                type="button"
                class="btn btn-twitter btn-icon-only rounded-circle twt"
              >
                <i class="fab fa-twitter "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid py-4">
        <br></br>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header pb-0">
                <div class="d-lg-flex">
                  <h2>Cashback Offers</h2>
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
                <div class="table-responsive">
                  <table
                    class=" table table-bordered table table-flush"
                    id="products-list"
                  >
                    <thead class="thead-light">
                      <tr>
                        <th>S No</th>
                        <th>Product Name</th>
                        <th>Product Details</th>
                        <th>Brand</th>
                        <th>Qty</th>
                        <th>Final Price</th>
                        <th>Cashback Offer</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Add To Cart</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-sm">1</td>
                        <td class="text-sm">Product Name</td>
                        <td class="text-sm">Product Details</td>
                        <td class="text-sm">Brand</td>
                        <td class="text-sm">Qty</td>
                        <td class="text-sm">Final Price</td>
                        <td class="text-sm">CashBack Offer</td>
                        <td class="text-sm">Start Date</td>
                        <td class="text-sm">End Date</td>
                        <td>
                          <span class="badge badge-danger badge-sm">
                            Expired
                          </span>
                        </td>
                        <td class="text-sm">Add To Cart</td>
                      </tr>
                      <tr>
                        <td class="text-sm">1</td>
                        <td class="text-sm">Product Name</td>
                        <td class="text-sm">Product Details</td>
                        <td class="text-sm">Brand</td>
                        <td class="text-sm">Qty</td>
                        <td class="text-sm">Final Price</td>
                        <td class="text-sm">CashBack Offer</td>
                        <td class="text-sm">Start Date</td>
                        <td class="text-sm">End Date</td>
                        <td>
                          <span class="badge badge-success badge-sm">
                            Active
                          </span>
                        </td>
                        <td class="text-sm">Add To Cart</td>
                      </tr>
                      <tr>
                        <td class="text-sm">1</td>
                        <td class="text-sm">Product Name</td>
                        <td class="text-sm">Product Details</td>
                        <td class="text-sm">Brand</td>
                        <td class="text-sm">Qty</td>
                        <td class="text-sm">Final Price</td>
                        <td class="text-sm">CashBack Offer</td>
                        <td class="text-sm">Start Date</td>
                        <td class="text-sm">End Date</td>
                        <td>
                          <span class="badge badge-danger badge-sm">
                            Expired
                          </span>
                        </td>
                        <td class="text-sm">Add To Cart</td>
                      </tr>
                      <tr>
                        <td class="text-sm">1</td>
                        <td class="text-sm">Product Name</td>
                        <td class="text-sm">Product Details</td>
                        <td class="text-sm">Brand</td>
                        <td class="text-sm">Qty</td>
                        <td class="text-sm">Final Price</td>
                        <td class="text-sm">CashBack Offer</td>
                        <td class="text-sm">Start Date</td>
                        <td class="text-sm">End Date</td>
                        <td>
                          <span class="badge badge-success badge-sm">
                            Active
                          </span>
                        </td>
                        <td class="text-sm">Add To Cart</td>
                      </tr>
                      <tr>
                        <td class="text-sm">1</td>
                        <td class="text-sm">Product Name</td>
                        <td class="text-sm">Product Details</td>
                        <td class="text-sm">Brand</td>
                        <td class="text-sm">Qty</td>
                        <td class="text-sm">Final Price</td>
                        <td class="text-sm">CashBack Offer</td>
                        <td class="text-sm">Start Date</td>
                        <td class="text-sm">End Date</td>
                        <td>
                          <span class="badge badge-danger badge-sm">
                            Expired
                          </span>
                        </td>
                        <td class="text-sm">Add To Cart</td>
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

export default Cashbackoffer;
