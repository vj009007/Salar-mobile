import React, { useState } from "react";
const PoliticalEngagement = () => {
  return (
    <>
      <header class="bg-gradient-dark">
        <div
          class="page-header min-vh-75"
          style={{
            backgroundImage:
              "url('https://image.cnbcfm.com/api/v1/image/106174405-1570711107124gettyimages-1083841638.jpeg?v=1570711118&w=1600&h=900c')",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 text-center mx-auto my-auto">
                <h1 class="text-white">
                  Work with an{" "}
                  <span class="text-white" id="typed">
                    tool
                  </span>
                  <span class="typed-cursor">|</span>
                </h1>
                <div id="typed-strings" style={{ display: "none" }}>
                  <h1>team</h1>
                  <h1>design</h1>
                  <h1>tool</h1>
                </div>
                <p class="lead mb-4 text-white opacity-8">
                  We’re constantly trying to express ourselves and actualize our
                  dreams. If you have the opportunity to play this game
                </p>
                {/* <button type="submit" class="btn bg-white text-dark">Create Account</button> */}
                {/* <h6 class="text-white mb-2 mt-5">Find us on</h6>
                                <div class="d-flex justify-content-center">
                                    <Link to="javascript:;"><i class="fab fa-facebook text-lg text-white me-4" aria-hidden="true"></i></Link>
                                    <Link to="javascript:;"><i class="fab fa-instagram text-lg text-white me-4" aria-hidden="true"></i></Link>
                                    <Link to="javascript:;"><i class="fab fa-twitter text-lg text-white me-4" aria-hidden="true"></i></Link>
                                    <Link to="javascript:;"><i class="fab fa-google-plus text-lg text-white" aria-hidden="true"></i></Link>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default PoliticalEngagement;
