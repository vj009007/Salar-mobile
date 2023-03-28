/** @format */

import React from "react";
import Dashboardheader from "../Dashboard/dashboardheader";
function Ordertrack() {
  return (
    <div className="myAccounts">
      <Dashboardheader />
      <div className="row mt-4"></div>

      <div class="container-fluid py-4">
        <div class="row">
          <h3>Order Track</h3>
          <div class="col-lg-12 mx-auto">
            <div class="card mb-4 cdaa1">
              <div className="row mt-4">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <input
                    type="text"
                    class="form-control input1"
                    placeholder="Search Order"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                </div>
                <div className="col-md-3"></div>
              </div>

              <div class="card-header p-3 pb-0">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <span class="mb-2 text-sm">Order no:</span>
                    <span class="text-dark font-weight-bold ms-2">241342</span>
                    <br></br>
                    <span class="mb-2 text-sm">Order Date:</span>
                    <span class="text-dark font-weight-bold ms-2">
                      29-07-2022
                    </span>
                  </div>
                </div>
              </div>
              <div class="card-body p-3 pt-0">
                <hr class="horizontal dark mt-0 mb-4" />
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="d-flex">
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                          class="avatar avatar-xxl me-3"
                          alt="product image"
                        />
                      </div>
                      <div>
                        <h6 class="text-lg mb-0 mt-2">Gold Glasses</h6>
                        <p class="text-sm mb-3">
                          Order was delivered 2 days ago.
                        </p>
                        <span class="badge badge-sm bg-gradient-success">
                          Delivered
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12 my-auto text-end">
                    <a href="javascript:;" class="btn color  mb-0 invp">
                      Invoice{" "}
                    </a>
                  </div>
                </div>
                <hr class="horizontal dark mt-4 mb-4" />
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-12">
                    <h6 class="mb-3">Track order</h6>
                    <div class="timeline timeline-one-side">
                      <div class="timeline-block mb-3">
                        <span class="timeline-step">
                          <i class="ni ni-bell-55 text-info"></i>
                        </span>
                        <div class="timeline-content">
                          <h6 class="text-dark text-sm font-weight-bold mb-0">
                            Order received
                          </h6>
                          <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                            22 DEC 7:20 AM
                          </p>
                        </div>
                      </div>
                      <div class="timeline-block mb-3">
                        <span class="timeline-step">
                          <i class="ni ni-bell-55 text-info"></i>
                        </span>
                        <div class="timeline-content">
                          <h6 class="text-dark text-sm font-weight-bold mb-0">
                            Order Processing
                          </h6>
                          <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                            22 DEC 7:20 AM
                          </p>
                        </div>
                      </div>
                      <div class="timeline-block mb-3">
                        <span class="timeline-step">
                          <i class="ni ni-bell-55 text-info"></i>
                        </span>
                        <div class="timeline-content">
                          <h6 class="text-dark text-sm font-weight-bold mb-0">
                            Order Dispatched
                          </h6>
                          <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                            22 DEC 7:20 AM
                          </p>
                        </div>
                      </div>
                      <div class="timeline-block mb-3">
                        <span class="timeline-step">
                          <i class="ni ni-bell-55 text-info"></i>
                        </span>
                        <div class="timeline-content">
                          <h6 class="text-dark text-sm font-weight-bold mb-0">
                            In Transit
                          </h6>
                          <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                            22 DEC 7:20 AM
                          </p>
                        </div>
                      </div>
                      <div class="timeline-block mb-3">
                        <span class="timeline-step">
                          <i class="ni ni-bell-55 text-info"></i>
                        </span>
                        <div class="timeline-content">
                          <h6 class="text-dark text-sm font-weight-bold mb-0">
                            Out For Delivery
                          </h6>
                          <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                            22 DEC 7:20 AM
                          </p>
                        </div>
                      </div>
                      <div class="timeline-block mb-3">
                        <span class="timeline-step">
                          <i class="ni ni-bell-55 text-info"></i>
                        </span>
                        <div class="timeline-content">
                          <h6 class="text-dark text-sm font-weight-bold mb-0">
                            Order Delivered
                          </h6>
                          <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                            22 DEC 7:20 AM
                          </p>
                        </div>
                      </div>
                      <div class="timeline-block mb-3">
                        <span class="timeline-step">
                          <i class="ni ni-html5 text-info"></i>
                        </span>
                        <div class="timeline-content">
                          <h6 class="text-dark text-sm font-weight-bold mb-0">
                            Order Cancelled
                          </h6>
                          <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                            22 DEC 7:21 AM
                          </p>
                        </div>
                      </div>
                      <div class="timeline-block mb-3">
                        <span class="timeline-step">
                          <i class="ni ni-cart text-info"></i>
                        </span>
                        <div class="timeline-content">
                          <h6 class="text-dark text-sm font-weight-bold mb-0">
                            Customer not able to contact
                          </h6>
                          <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                            22 DEC 8:10 AM
                          </p>
                        </div>
                      </div>
                      <div class="timeline-block mb-3">
                        <span class="timeline-step">
                          <i class="ni ni-check-bold text-success text-gradient"></i>
                        </span>
                        <div class="timeline-content">
                          <h6 class="text-dark text-sm font-weight-bold mb-0">
                            Customer refused to take the order
                          </h6>
                          <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                            22 DEC 4:54 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-5 col-md-6 col-12">
                    <h6 class="mb-3">Payment details</h6>
                    <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                      <ul class="list-group">
                        <li class="list-group-item border-0 d-flex p-4 mb-2  border-radius-lg">
                          <div class="d-flex flex-column">
                            <h6 class="mb-3 text-sm">Online Payment </h6>
                            <span class="mb-2 text-xs">
                              Wallet
                              <span class="text-dark ms-2 font-weight-bold"></span>
                            </span>
                            <span class="mb-2 text-xs">
                              Shopping Amount
                              <span class="text-dark ms-2 font-weight-bold"></span>
                            </span>
                            <span class="mb-2 text-xs">
                              Default Purchase
                              <span class="text-dark ms-2 font-weight-bold"></span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <h6 class="mb-3 mt-4">Shipping Address</h6>
                    <ul class="list-group">
                      <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                        <div class="d-flex flex-column">
                          <h6 class="mb-3 text-sm">Salar</h6>
                          <span class="mb-2 text-xs">
                            Address:
                            <span class="text-dark ms-2 font-weight-bold">
                              5-5/21/E first floor Opp to TMC
                            </span>
                          </span>
                          <span class="text-xs">
                            Landmark:
                            <span class="text-dark ms-2 font-weight-bold">
                              Opp to TMC
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            Mobile No:
                            <span class="text-dark ms-2 font-weight-bold">
                              123456789
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            Email ID:
                            <span class="text-dark ms-2 font-weight-bold">
                              Strawberri@gmail.com
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            City:
                            <span class="text-dark ms-2 font-weight-bold">
                              Tirupati
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            Pin Code:
                            <span class="text-dark ms-2 font-weight-bold">
                              Strawberri@gmail.com
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            State:
                            <span class="text-dark ms-2 font-weight-bold">
                              Andhrapradesh
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            Country:
                            <span class="text-dark ms-2 font-weight-bold">
                              India
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            GST No:
                            <span class="text-dark ms-2 font-weight-bold">
                              987654321
                            </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                    <h6 class="mb-3 mt-4">Seller Details</h6>
                    <ul class="list-group">
                      <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                        <div class="d-flex flex-column">
                          <h6 class="mb-3 text-sm">Salar</h6>
                          <span class="mb-2 text-xs">
                            Seller Name:
                            <span class="text-dark font-weight-bold ms-2">
                              Salar
                            </span>
                          </span>
                          <br />
                          <span class="mb-2 text-xs">
                            Seller Address:
                            <span class="text-dark ms-2 font-weight-bold">
                              6-77-23/b
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            Seller Email Id :
                            <span class="text-dark ms-2 font-weight-bold">
                              Salar@gmail.com
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            Seller Contact No :
                            <span class="text-dark ms-2 font-weight-bold">
                              1235476
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            City :
                            <span class="text-dark ms-2 font-weight-bold">
                              Tirupati
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            Pincode :
                            <span class="text-dark ms-2 font-weight-bold">
                              876786
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            State :
                            <span class="text-dark ms-2 font-weight-bold">
                              Andhrapradesh
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            Country :
                            <span class="text-dark ms-2 font-weight-bold">
                              India
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            GST NO :
                            <span class="text-dark ms-2 font-weight-bold">
                              0987654321
                            </span>
                          </span>
                          <br />
                          <span class="text-xs">
                            FSSAI No :
                            <span class="text-dark ms-2 font-weight-bold">
                              BHJ09876
                            </span>
                          </span>
                          <div className="row mt-4">
                            <div className="">
                              <i
                                class="fas fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                class="fas fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i
                                class="fas fa-star"
                                style={{ color: "yellow" }}
                              ></i>
                              <i class="fas fa-star" style={{ color: "" }}></i>
                              <i class="fas fa-star"></i>
                              <span class="text-dark ms-2 font-weight-bold">
                                (2000)
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-3 col-12 ms-auto">
                    <h6 class="mb-3">Order Summary</h6>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Product Price:</span>
                      <span class="text-dark font-weight-bold ms-2">$90</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Qty:</span>
                      <span class="text-dark font-weight-bold ms-2">2</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Net Amount:</span>
                      <span class="text-dark font-weight-bold ms-2">$90</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Discount Points:</span>
                      <span class="text-dark font-weight-bold ms-2">0</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Offer (%):</span>
                      <span class="text-dark font-weight-bold ms-2">50</span>
                    </div>

                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Promo Code:</span>
                      <span class="text-dark font-weight-bold ms-2">0</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">GST(%):</span>
                      <span class="text-dark font-weight-bold ms-2"></span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Gst Amount :</span>
                      <span class="text-dark font-weight-bold ms-2">100</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Sub-Total:</span>
                      <span class="text-dark font-weight-bold ms-2">20</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Packing Charges:</span>
                      <span class="text-dark font-weight-bold ms-2">$90</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Handling Charges:</span>
                      <span class="text-dark font-weight-bold ms-2">$90</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Weight:</span>
                      <span class="text-dark font-weight-bold ms-2">
                        235gm/kg
                      </span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Shipping Charges:</span>
                      <span class="text-dark font-weight-bold ms-2">0</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Transaction Fee:</span>
                      <span class="text-dark font-weight-bold ms-2">$90</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span class="mb-2 text-sm">Admin Fee (Wallet):</span>
                      <span class="text-dark font-weight-bold ms-2">$90</span>
                    </div>
                    <div class="d-flex justify-content-between mt-4">
                      <span class="mb-2 text-lg">Grand Total:</span>
                      <span class="text-dark text-lg ms-2 font-weight-bold">
                        $105.95
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ordertrack;
