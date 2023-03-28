import React, { useState } from "react";
const Sustainability = () => {
  return (
    <>
      <header class="bg-gradient-dark">
        <div
          class="page-header min-vh-75"
          style={{
            backgroundImage:
              "url('https://images.businessnewsdaily.com/app/uploads/2022/04/04075925/planting_tree_sarayut_getty.jpg')",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8 text-center mx-auto my-auto"></div>
            </div>
          </div>
        </div>
      </header>
      {/* <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
                <section class="py-5">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-5 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                                <h2 class="mb-4">Find more great partners</h2>
                                <p class="mb-2">It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. </p>
                                <ul class="m-lg-2 m-auto">
                                    <li class="mb-2">People are so scared to lose their hope</li>
                                    <li class="mb-2">That's the main thing people </li>
                                    <li class="mb-2">Thoughts- their perception of themselves!</li>
                                </ul>
                                <p>It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter.</p>
                                <h3 class="mt-4">We will be with you forever</h3>
                                <p>It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter.</p>
                                <p class="blockquote my-3 ps-2">
                                    <span class="text-bold">“And thank you for turning my personal jean jacket into a couture piece.”</span>
                                    <br />
                                    <small class="blockquote-footer">
                                        Kanye West, Producer.
                                    </small>
                                </p>
                            </div>
                            <div class="col-md-5 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0">
                                <img class="max-width-400 border-radius-lg shadow-lg w-100" src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/studio-2.jpg" />
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}

      {/* <!--------Contact 6------> */}
      {/* <section class="bg-gradient-dark position-relative overflow-hidden mt-5">
                <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/shapes/waves-white.svg" alt="pattern-lines" class="position-absolute opacity-1 w-100" />
                <div class="container py-lg-4 py-2">
                    <div class="row">
                        <div class="col-lg-6 d-flex justify-content-center flex-column">
                            <div id="carouselExampleIndicator" class="carousel slide py-7" data-bs-ride="carousel">
                                <div class="carousel-indicators justify-content-start ms-0">
                                    <a href="javascript:;">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-4.jpg" alt="..." class="avatar avatar-sm avatar-scale-up border-radius-lg shadow border-0" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="0" />
                                        <span class="text-white mx-2">|</span>
                                    </a>
                                    <a href="javascript:;">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-3.jpg" alt="..." class="avatar avatar-sm avatar-scale-up border-radius-lg shadow border-0" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="1" />
                                        <span class="text-white mx-2">|</span>
                                    </a>
                                    <a href="javascript:;">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-2.jpg" alt="..." class="avatar avatar-sm avatar-scale-up border-radius-lg shadow border-0 active" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="2" aria-current="true" />
                                    </a>
                                </div>
                                <div class="carousel-inner">
                                    <h2 class="text-white mb-0">Work with us</h2>
                                    <p class="text-white opacity-8 mb-1">Whatever your qualification is - we got you!</p>
                                    <hr class="text-white horizontal opacity-6 mb-4 mt-2 w-25 text-start" />
                                    <div class="carousel-item">
                                        <h6 class="text-white opacity-8 pe-5">"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is
                                            the way to success. A single rose can be my garden... a single friend, my world."</h6>
                                        <div class="author mt-4">
                                            <div class="name">
                                                <span class="text-white">Ludwig Siato</span>
                                                <div class="stats">
                                                    <small class="text-white opacity-6">Project manager, Apple</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <h6 class="text-white opacity-8 pe-5">"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is
                                            the way to success. A single rose can be my garden... a single friend, my world."</h6>
                                        <div class="author mt-4">
                                            <div class="name">
                                                <span class="text-white">John Down</span>
                                                <div class="stats">
                                                    <small class="text-white opacity-6">CFO, Google</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item active">
                                        <h6 class="text-white opacity-8 pe-5">"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is
                                            the way to success. A single rose can be my garden... a single friend, my world."</h6>
                                        <div class="author mt-4">
                                            <div class="name">
                                                <span class="text-white">Mark Jojansen</span>
                                                <div class="stats">
                                                    <small class="text-white opacity-6">Fullstack Developer, Atlassian</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 justify-content-center flex-column d-sm-none d-md-none d-lg-flex d-xl-flex">
                            <div class="row justify-content-center d-none d-md-flex">
                                <div class="col-3 mb-4">
                                    <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 mt-n4 ms-8 fadeIn2 fadeInBottom">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-zoom.svg" alt="Logo Image" />
                                    </div>
                                </div>
                                <div class="col-4 mb-4">
                                    <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-8 mt-n6 fadeIn1 fadeInBottom">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-google-cloud.svg" alt="Logo Image" />
                                    </div>
                                </div>
                                <div class="col-4 mb-4">
                                    <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-6 mt-2 fadeIn3 fadeInBottom">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-github.svg" alt="Logo Image" />
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-end d-none d-md-flex">
                                <div class="col-4 my-4">
                                    <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-4 fadeIn1 fadeInBottom">
                                        <img class="avatar-img" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-amazon.svg" alt="Logo Image" />
                                    </div>
                                </div>
                                <div class="col-3 my-4">
                                    <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 me-auto fadeIn1 fadeInBottom">
                                        <img class="avatar-img" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-apple.svg" alt="Logo Image" />
                                    </div>
                                </div>
                                <div class="col-3 my-4">
                                    <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 fadeIn3 fadeInBottom ms-3 mt-3">
                                        <img class="avatar-img" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-twitter.svg" alt="Logo Image" />
                                    </div>
                                </div>
                            </div>
                            <div class="row d-none d-md-flex" />
                            <div class="col-6">

                                <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-auto mt-5 fadeIn2 fadeInBottom">
                                    <img class="avatar-img" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-youtube.svg" alt="Logo Image" />
                                </div>

                            </div>
                            <div class="col-6 mt-6">

                                <div class="d-block bg-white avatar avatar-lg border-radius-lg p-3 mx-auto mt-n3 fadeIn3 fadeInBottom">
                                    <img class="avatar-img" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-dribbble.svg" alt="Logo Image" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
    </>
  );
};
export default Sustainability;
