import React, { useState } from "react";
import { Link } from "react-router-dom";
const OurLeadership = () => {
  return (
    <>
      {/* <header class="bg-gradient-dark">
        <div
          class="page-header min-vh-75"
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2020/02/16/20/29/nyc-4854718__340.jpg)",
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
               
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6 pt-5">
        <section class="py-10">
          <div class="container">
            <div class="row">
              <div class="col-md-7 mx-auto text-center mb-5">
                <h3>Our Leadership</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="card card-profile">
                  <Link to="/Postpage2">
                    <div class="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                      <a class="d-block blur-shadow-image">
                        <img
                          src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-profile1.jpg"
                          alt="img-blur-shadow"
                          class="img-fluid border-radius-lg"
                        />
                      </a>
                    </div>
                  </Link>
                  <div class="card-body text-center mt-2">
                    <h4 class="mb-0" style={{ color: "#0070c9" }}>
                      Suraj Dudekule
                    </h4>
                    <p style={{ color: "gray", fontWeight: "700" }}>
                      Founder & CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!--------Contact 6------> */}
      {/* <section className="bg-gradient-dark position-relative overflow-hidden mt-0">
        <img
          src="https://demos.creative-tim.com/material-kit-pro/assets/img/shapes/waves-white.svg"
          alt="pattern-lines"
          className="position-absolute opacity-1 w-100"
        />
        <div className="container py-lg-4 py-2">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center flex-column">
              <div
                id="carouselExampleIndicator"
                className="carousel slide py-7"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <h2 className="text-white mb-0">Join us Today</h2>
                  <p className="text-white opacity-8 mb-1">
                    Whatever your qualification is - we got you!
                  </p>
                  <hr className="text-white horizontal opacity-6 mb-4 mt-2 w-25 text-start" />
                  <div className="carousel-item active">
                    <h6 className="text-white opacity-8 pe-5">
                      "Take up one idea. Make that one idea your life - think of
                      it, dream of it, live on that idea. Let the brain,
                      muscles, nerves, every part of your body, be full of that
                      idea, and just leave every other idea alone. This is the
                      way to success. A single rose can be my garden... a single
                      friend, my world."
                    </h6>
                    <div className="author mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 justify-content-center flex-column d-sm-none d-md-none d-lg-flex d-xl-flex">
              <div class="row justify-content-center d-none d-md-flex">
                <div class="col-3 mb-4">
                  <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 mt-n4 ms-8 fadeIn2 fadeInBottom">
                    <img
                      src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-zoom.svg"
                      alt="Logo Image"
                    />
                  </div>
                </div>
                <div class="col-4 mb-4">
                  <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-8 mt-n6 fadeIn1 fadeInBottom">
                    <img
                      src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-github.svg"
                      alt="Logo Image"
                    />
                  </div>
                </div>
                <div class="col-4 mb-4">
                  <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-6 mt-2 fadeIn3 fadeInBottom">
                    <img
                      src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-google-cloud.svg"
                      alt="Logo Image"
                    />
                  </div>
                </div>
              </div>

              <div class="row justify-content-end d-none d-md-flex">
                <div class="col-4 my-4">
                  <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-4 fadeIn1 fadeInBottom">
                    <img
                      class="avatar-img"
                      src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-amazon.svg"
                      alt="Logo Image"
                    />
                  </div>
                </div>
                <div class="col-3 my-4">
                  <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 me-auto fadeIn1 fadeInBottom">
                    <img
                      class="avatar-img"
                      src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-apple.svg"
                      alt="Logo Image"
                    />
                  </div>
                </div>
                <div class="col-3 my-4">
                  <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 fadeIn3 fadeInBottom ms-3 mt-3">
                    <img
                      class="avatar-img"
                      src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-twitter.svg"
                      alt="Logo Image"
                    />
                  </div>
                </div>
              </div>

              <div class="row d-none d-md-flex">
                <div class="col-6">
                  <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-auto mt-5 fadeIn2 fadeInBottom">
                    <img
                      class="avatar-img"
                      src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-youtube.svg"
                      alt="Logo Image"
                    />
                  </div>
                </div>
                <div class="col-6 mt-6">
                  <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 mx-auto mt-n3 fadeIn3 fadeInBottom">
                    <img
                      class="avatar-img"
                      src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-dribbble.svg"
                      alt="Logo Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default OurLeadership;
