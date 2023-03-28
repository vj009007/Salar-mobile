/** @format */

import "./Orders.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getOrderbyId } from "../../repo/orders";
// import moment from "moment/moment";
import Dashboardheader from "../Dashboard/dashboardheader";
import Paginate from "../paginate/paginate";
function Orders() {
  const [W, setW] = useState();
  const [shoppingData, setShoppingData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsperPage, setPostsperPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const getSponserTeamByUser = async () => {
    let userid = localStorage.getItem("user_id");
    let data = await getOrderbyId(userid);
    setShoppingData(data.data.payload);
  };

  useEffect(() => {
    getSponserTeamByUser();
  }, []);

  const indexOfLastPost = currentPage * postsperPage;
  const indexOfFirstPost = indexOfLastPost - postsperPage;

  let currentPosts = [];
  if (searchText) {
    currentPosts =
      W &&
      W.filter(
        (name) =>
          name.registerId === searchText || name.user_name === searchText
      ).slice(indexOfFirstPost, indexOfLastPost);
  } else {
    currentPosts = W && W.slice(indexOfFirstPost, indexOfLastPost);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (
      currentPage !==
      Math.ceil((shoppingData && shoppingData.length) / postsperPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };
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
                  <h3>Orders</h3>
                  {/* <div class="ms-auto my-auto mt-lg-0 mt-4">
                    <div class="ms-auto my-auto">
                      <button
                        class="btn btn bg-gradient-info btn-sm export mb-0 mt-sm-0 mt-1"
                        data-type="csv"
                        type="button"
                        name="button"
                      >
                        Export
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
              <br></br>
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-md-1">
                  <select
                    class="input form-select"
                    aria-label="Default select example"
                    onChange={(e) => setPostsperPage(e.target.value)}
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
                    class="btn color btn-md export mb-0 mt-sm-0 mt-1"
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
                    onChange={(e) => setPostsperPage(e.target.value)}
                  />
                </div>
              </div>

              <div class="card-body px-0 pb-0">
                <div class="container table-responsive">
                  <table
                    class=" table table-bordered table table-flush"
                    id="products-list"
                  >
                    <thead
                      class=""
                      style={{ color: "black", textAlign: "center" }}
                    >
                      <tr>
                        <th>S No</th>
                        <th>Date</th>
                        <th>Order No</th>
                        <th>Product Method</th>
                        <th>Quantity</th>
                        <th>Grand total</th>
                        <th>Payment Type</th>
                        <th>Delivery Status</th>
                        <th>Cancel Order</th>
                        <th>Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      {W &&
                        W.map((item, i) => {
                          return (
                            <tr>
                              <td>{i + 1}</td>
                              <td className="text-sm">
                                {/* {(() => {
                                  let today = moment(item.created_at)
                                    .utcOffset(60)
                                    .format("YYYY-MM-DD");
                                  return today;
                                })()} */}
                              </td>
                              <td className="text-sm">{item._id}</td>
                              <td className="text-sm">
                                {(() => {
                                  if (item.ecomm_prod_id) {
                                    let product = item.ecomm_prod_id;
                                    let name = product.name;
                                    return name;
                                  } else {
                                    let product = item.ecomm_prod_id;
                                    let name = product.name;
                                    return name;
                                  }
                                })()}
                              </td>
                              <td className="text-sm">{item.quantity}</td>
                              <td className="text-sm">{item.final_price}</td>
                              <td className="text-sm">Online</td>

                              <td className="text-sm">
                                <Link to={`/user/Ordertrack`}>
                                  <button className="btn btn-primary">
                                    Track Order
                                  </button>
                                </Link>
                              </td>
                              <td className="text-sm">
                                <button className="btn btn-primary">
                                  Cancel Order
                                </button>
                              </td>
                              <td
                                class="text-sm"
                                style={{ textAlign: "center" }}
                              >
                                <a
                                  href="/user/Invoice"
                                  data-bs-toggle="tooltip"
                                  data-bs-original-title="Delete product"
                                >
                                  <i class="fas fa-download text-info"></i>
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      <tr>
                        <td class="text-sm">1</td>
                        <td class="text-sm">Date</td>
                        <td class="text-sm">Order No</td>
                        <td class="text-sm">Product Name</td>
                        <td class="text-sm">Qty</td>
                        <td class="text-sm">Grand Total</td>
                        <td class="text-sm">Payment Type</td>
                        <td class="text-sm">
                          <span class="badge badge-danger badge-sm">
                            Order recieved
                          </span>
                          <br />
                          <span class="badge badge-danger badge-sm">
                            Order Processing
                          </span>
                          <br />
                          <span class="badge badge-danger badge-sm">
                            Order Dispatched
                          </span>
                          <br />
                          <span class="badge badge-danger badge-sm">
                            Intransit
                          </span>
                          <br />
                          <span class="badge badge-danger badge-sm">
                            Out for Delivery
                          </span>
                          <br />
                          <span class="badge badge-danger badge-sm">
                            Delivered
                          </span>
                          <br />
                          <span class="badge badge-danger badge-sm">
                            Cancelled
                          </span>
                          <br />
                          <span class="badge badge-danger badge-sm">
                            Un-delivered
                          </span>
                        </td>
                        <Link to="/user/Ordertrack">
                          <td class="text-sm">Track Order</td>
                        </Link>
                        <td class="text-sm">Cancel Order</td>
                        <td class="text-sm">Return & Replacement</td>
                        <td class="text-sm">Offers</td>

                        <td class="text-sm" style={{ textAlign: "center" }}>
                          <a
                            href="/user/Invoice"
                            data-bs-toggle="tooltip"
                            data-bs-original-title="Delete product"
                          >
                            <i class="fas fa-download text-info"></i>
                          </a>
                        </td>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </table>
                </div>
                <Paginate
                  postsPerPage={postsperPage}
                  totalPosts={W && W.length}
                  paginate={paginate}
                  previousPage={previousPage}
                  nextPage={nextPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
