/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Orders.css";
import {
  getOrderDetails,
  getOrderDetailsAll,
} from "../../../../ApiData/AllapiData";
import Dashboardheader from "../Dashboard/dashboardheader";
function OrdersDetails() {
  const { id } = useParams();
  // console.log(id);
  const [getDetailAll, setGetDetailAll] = useState([]);
  const navigate = useNavigate();
  const detailAllOder = async () => {
    const responseJson = await getOrderDetails();
    console.log("dd", responseJson);
    responseJson.data.forEach(element => {
      element.order_id.forEach(elementTwo => {
        console.log("two", elementTwo);
        setGetDetailAll(responseJson.data);
        console.log("twosss", responseJson.data);
      });
    });
    //  setGetDetailAll(responseJson.data);
  };

  useEffect(() => {
    detailAllOder();
  }, [id]);

  return (
    <div className="myAccounts">
      <Dashboardheader />
      <div className="container-fluid py-4">
        <br></br>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-lg-flex">
                  <h2 className="font-weight-normal">Orders ID ({id})</h2>
                  <div className="ms-auto my-auto mt-lg-0 mt-4">
                    <div className="ms-auto my-auto">
                      <button
                        className="btn btn bg-gradient-info btn-sm export mb-0 mt-sm-0 mt-1"
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
                    className="input form-select"
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
                    className="date form-control"
                    type="date"
                    value="2018-11-23"
                    id="example-date-input"
                  ></input>
                </div>
                <div className="col-md-3">
                  <input
                    className="date form-control"
                    type="date"
                    value="2018-11-23"
                    id="example-date-input"
                  ></input>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn bg-gradient-info btn-sm export mb-0 mt-sm-0 mt-1"
                    data-type="csv"
                    type="button"
                    name="button"
                  >
                    Submit
                  </button>
                </div>
                <div className="col-md-2">
                  <input
                    className="for form-control"
                    type="search"
                    placeholder="Search....."
                  />
                </div>
              </div>

              <div className="card-body px-0 pb-0">
                <div className="container table-responsive">
                  <table
                    className=" table table-bordered table table-flush"
                    id="products-list"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th>S No</th>
                        <th>Date</th>
                        <th>Qty</th>
                        <th>Total Price</th>
                        <th>Transaction Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getDetailAll.map((getOrder, index) => (
                        <tr>
                          <td className="text-sm">{index + 1}</td>
                          <td className="text-sm">
                            {new Date(getOrder.created_at).toLocaleDateString()}
                          </td>

                          <td className="text-sm">
                            {getOrder.order_id.length}
                          </td>
                          <td className="text-sm">{getOrder.total_price}</td>
                          <td className="text-sm">{getOrder.trnx_method}</td>
                          <td className="text-sm">
                            <span className="badge badge-danger badge-sm">
                              {"Proccess"}
                            </span>
                            <br />
                            {/* <span className="badge badge-danger badge-sm">
                                                        Order Processing
                                                    </span><br/>
                                                    <span className="badge badge-danger badge-sm">
                                                        Order Dispatched
                                                    </span>
                                                    <br/>
                                                    <span className="badge badge-danger badge-sm">
                                                        Intransit
                                                    </span><br/>
                                                    <span className="badge badge-danger badge-sm">
                                                        Out for Delivery
                                                    </span><br/>
                                                    <span className="badge badge-danger badge-sm">
                                                        Delivered
                                                    </span><br/>
                                                    <span className="badge badge-danger badge-sm">
                                                        Cancelled
                                                    </span><br/>
                                                    <span className="badge badge-danger badge-sm">
                                                        Un-delivered
                                                    </span> */}
                          </td>
                          {/* <Link to="/user/Ordertrack">
                                                    <td className="text-sm">Track Order</td>
                                                </Link> */}
                          {/* <td className="text-sm">Cancel Order</td>
                                                <td className="text-sm">{getOrder.refund_st}</td>
                                                <td className="text-sm"><Link to={`#/${getOrder._id}`}>View</Link></td> */}

                          <td
                            className="text-sm"
                            style={{ textAlign: "center" }}
                          >
                            <a
                              href="/user/Invoice"
                              data-bs-toggle="tooltip"
                              data-bs-original-title="Delete product"
                            >
                              <i className="fas fa-download text-info"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row mt-4">
                  <nav aria-label="Page navigation example">
                    <ul
                      className="pagination"
                      style={{ justifyContent: "end" }}
                    >
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="javascript:;"
                          aria-label="Previous"
                        >
                          <i className="fa fa-angle-left"></i>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:;">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:;">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="javascript:;">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link"
                          href="javascript:;"
                          aria-label="Next"
                        >
                          <i className="fa fa-angle-right"></i>
                          <span className="sr-only">Next</span>
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

export default OrdersDetails;
