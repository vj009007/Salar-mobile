/** @format */

import React from "react";

function Invoice() {
  return (
    <div className="myAccounts">
      <div class="container-fluid my-3 py-3">
        <div class="row">
          <div class="col-md-12 col-sm-10 mx-auto">
            <form class="" action="index.html" method="post">
              <div class="card my-sm-5">
                <div class="card-header text-center">
                  <h5>www.Salar.in</h5>
                  <h1 style={{ textAlign: "center" }}>Invoice</h1>
                  <div class="row justify-content-between">
                    <div class="col-md-4 text-start">
                      <br></br>
                      <h5>Sold By</h5>
                      <h6>Salar</h6>
                      <p class="d-block text-secondary">
                        tel: +4 (074) 1090873
                      </p>
                    </div>
                    <div class="col-lg-3 col-md-12 text-md-end text-start mt-5">
                      <h6 class="d-block mt-2 mb-0">
                        Billing Address: John Doe
                      </h6>
                      <p class="text-secondary">
                        4006 Locust View Drive
                        <br />
                        San Francisco CA
                        <br />
                        California
                      </p>
                    </div>
                    <div class="col-lg-3 col-md-12 text-md-end text-start mt-5">
                      <h6 class="d-block mt-2 mb-0">
                        Shipped Address: John Doe
                      </h6>
                      <div class="col-md-12">
                        <h6 class="text-secondary mb-0">State/UT Code: 37</h6>
                      </div>
                      <div class="col-md-12">
                        <h6 class="text-secondary mb-0">Supply:Tirupati</h6>
                      </div>
                      <div class="col-md-12">
                        <h6 class="text-secondary mb-0">Delivery:Tirupati</h6>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="row justify-content-md-between">
                    <div class="col-md-4 mt-auto">
                      <h6 class="mb-0 text-start text-secondary">Pan No</h6>

                      <h6 class="mb-0 text-start text-secondary">Invoice No</h6>

                      <h6 class="mb-0 text-start text-secondary">
                        Registraion No
                      </h6>
                      <h6 class="mb-0 text-start text-secondary">FASSAI No</h6>
                      <br></br>
                      <h6 class="mb-0 text-start text-secondary">Order No</h6>
                      <h6 class="mb-0 text-start text-secondary">Order Date</h6>
                    </div>

                    <div class="col-lg-5 col-md-7 mt-auto">
                      <div class="row mt-md-5 mt-4 text-md-end text-start">
                        <div class="col-md-6">
                          <h6 class="text-secondary mb-0">Invoice date:</h6>
                        </div>
                        <div class="col-md-6">
                          <h6 class="text-dark mb-0">06/03/2019</h6>
                        </div>
                      </div>
                      <div class="row text-md-end text-start">
                        <div class="col-md-6">
                          <h6 class="text-secondary mb-0">Due date:</h6>
                        </div>
                        <div class="col-md-6">
                          <h6 class="text-dark mb-0">11/03/2019</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="table-responsive">
                        <table class=" table table-bordered table table-flush">
                          <thead class="bg-default">
                            <tr>
                              <th scope="col" class="pe-2 text-start ps-2">
                                S.no
                              </th>
                              <th scope="col" class="pe-2">
                                Description
                              </th>
                              <th scope="col" class="pe-2" colspan="2">
                                Unit Price
                              </th>
                              <th scope="col" class="pe-2">
                                Qty
                              </th>
                              <th scope="col" class="pe-2">
                                Net Amount
                              </th>
                              <th scope="col" class="pe-2">
                                Tax(%)
                              </th>
                              <th scope="col" class="pe-2">
                                Tax Type
                              </th>
                              <th scope="col" class="pe-2">
                                Tax Rs.
                              </th>
                              <th scope="col" class="pe-2">
                                Total Amount
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="ps-4">1</td>
                              <td class="text-start"> Support</td>

                              <td class="ps-4" colspan="2">
                                $ 9.00
                              </td>
                              <td class="ps-4">$ 9.00</td>
                              <td class="ps-4" colspan="2">
                                $ 9.00
                              </td>
                              <td class="ps-4">$ 9.00</td>
                              <td class="ps-4">$ 9.00</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th class="h5 ps-4" colspan="2">
                                Total
                              </th>
                              <th colspan="1" class="text-right h5 ps-4">
                                $ 698
                              </th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer mt-md-5 mt-4">
                  <div class="row">
                    <div class="col-lg-8 text-right">
                      <h5>SALAR</h5>
                      <p class="text-secondary text-sm">
                        If you encounter any issues related to the invoice you
                        can contact us at:
                      </p>
                      <h6 class="text-secondary mb-0">
                        email:
                        <span class="text-dark">support@-salar.in</span>
                      </h6>
                    </div>
                    <div class="col-lg-4 text-right">
                      <h5>For Good Spirits</h5>
                      <h6 class="text-secondary mb-0"></h6>
                      <h6 class="text-secondary mb-0"></h6>
                      <p class="text-secondary text-sm">Authorized Signature</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
