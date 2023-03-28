import React, { useState } from "react";
import { Link } from "react-router-dom";
const Helps = () => {
    return (
        <>
      <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <section class="py-lg-5">
      <div class="container">
        {/* <div class="row border-radius-md py-4 p-3 ps-0">
          <div class="col-md-10 mb-md-0 mb-2">
            <div class="input-group input-group-outline">
              <label class="form-label">Search for your answer</label>
              <input type="email" class="form-control" />
            </div>
          </div>
          <div class="col-md-2 ps-md-0">
            <button type="button" class="btn bg-gradient-primary w-100 mb-0 h-100 position-relative z-index-2">Search</button>
          </div>
        </div> */}
        <div class="row mt-4">
          <p><span class="text-uppercase">Help & Support</span></p>
        </div>
        <div class="row mt-lg-5 mt-4">
          <div class="col-lg-6 col-md-6 mb-5">
            <div class="card">
              <div class="ps-4 mt-n4">
                <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary shadow text-center border-radius-xl">
                  <i class="material-icons opacity-10">manage_accounts</i>
                </div>
              </div>
              <div class="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 class="mt-2">Slack bot</h5>
                <p class="mb-3">If everything I did failed - which it doesn&#39;t, it actually succeeds - just the fact that I&#39;m willing to fail is an inspiration. People are so scared to lose that they don&#39;t even try. And this is sad.</p>
                <a href="javascript:;" class="font-weight-bold text-xs text-uppercase font-weight-bolder text-primary icon-move-right">
                  Check more
                  <i class="fas fa-arrow-right text-xs ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          
          
          <div class="col-lg-6 col-md-6 mb-5">
            <div class="card">
              <div class="ps-4 mt-n4">
                <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary shadow text-center border-radius-xl">
                  <i class="material-icons opacity-10">manage_accounts</i>
                </div>
              </div>
              <div class="card-body border-radius-lg position-relative overflow-hidden pb-4">
                <h5 class="mt-2">Slack bot</h5>
                <p class="mb-3">If everything I did failed - which it doesn&#39;t, it actually succeeds - just the fact that I&#39;m willing to fail is an inspiration. People are so scared to lose that they don&#39;t even try. And this is sad.</p>
                <a href="javascript:;" class="font-weight-bold text-xs text-uppercase font-weight-bolder text-primary icon-move-right">
                  Check more
                  <i class="fas fa-arrow-right text-xs ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
    
  </div>
        </>
    )
}
export default Helps;