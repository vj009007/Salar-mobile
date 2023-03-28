import React, { useState } from "react";
const SellOnGlobal = () => {
    return (
        <>
            <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6 pt-5">
                {/* <!-- -------- START CONTENT 7 w/ card over right bg image ------- --> */}
                <div class="page-header min-vh-85">
                    <div class="position-absolute fixed-top ms-auto w-75 h-75 border-radius-xl z-index-1 d-none d-sm-none d-md-block me-n4" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/dg3.jpg)", backgroundSize: "cover" }}>
                        <span class="mask bg-gradient-dark opacity-7"></span>
                    </div>
                    <div class="container">
                        <div class="row mt-7 mb-5">
                            <div class="col-lg-6 d-flex justify-content-center flex-column">
                                <div class="card card-body d-flex justify-content-center shadow-lg border-radius-xl p-5 blur align-items-center z-index-2 shadow-blur">
                                    <h2 class="text-dark mb-4">Improving the design complexity</h2>
                                    <p class="text-lg-start text-center mb-0">We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.</p>
                                    <br />
                                    <div class="buttons w-100">
                                        <button type="button" class="btn bg-gradient-dark mb-0">Contact Us</button>
                                        <button type="button" class="btn btn-outline-dark mb-0 ms-1">Read More</button>
                                    </div>
                                    <div class="row mt-5 justify-content-start">
                                        <div class="col-md-3 col-6 p-0">
                                            <img class="w-100 opacity-6" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-pinterest.svg" alt="logo" />
                                        </div>
                                        <div class="col-md-3 col-6 p-0">
                                            <img class="w-100 opacity-6" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-netflix.svg" alt="logo" />
                                        </div>
                                        <div class="col-md-3 col-6 p-0">
                                            <img class="w-100 opacity-6" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-coinbase.svg" alt="logo" />
                                        </div>
                                        <div class="col-md-3 col-6 p-0">
                                            <img class="w-100 opacity-6" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-nasa.svg" alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- -------   START CONTENT 1 - title & description and 6 IMAGES   -------- --> */}
            <section class="py-5 bg-gray-100">
                <div class="container">
                    <div class="row mt-5 row-cols-md-5 row-cols-1">
                        <div class="col mb-md-0 mb-4">
                            <div class="card">
                                <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                                    <a class="d-block blur-shadow-image">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/testimonial-6-1.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" />
                                    </a>
                                    <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/testimonial-6-1.jpg)" }}></div>
                                </div>
                                <div class="card-body text-center">
                                    <div class="w-50 mx-auto">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-nasa.svg" alt="nasa" class="img-fluid" />
                                    </div>
                                    <p class="my-3 fst-italic">
                                        "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
                                    </p>
                                    <div>
                                        Armand Traore
                                    </div>
                                    <button class="btn bg-gradient-dark btn-sm mt-3 mb-0" type="button">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-md-0 mb-4">
                            <div class="card">
                                <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                                    <a class="d-block blur-shadow-image">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/testimonial-6-2.jpg" alt="img-blur" class="img-fluid border-radius-lg" />
                                    </a>
                                    <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/testimonial-6-2.jpg)" }}></div>
                                </div>
                                <div class="card-body text-center">
                                    <div class="w-50 mx-auto">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-apple.svg" alt="nasa" class="img-fluid" />
                                    </div>
                                    <p class="my-3 fst-italic">
                                        "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
                                    </p>
                                    <div>
                                        Collin Marcus
                                    </div>
                                    <button class="btn bg-gradient-dark btn-sm mt-3 mb-0" type="button">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-md-0 mb-4">
                            <div class="card">
                                <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                                    <a class="d-block blur-shadow-image">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/testimonial-6-3.jpg" alt="img-blur" class="img-fluid border-radius-lg" />
                                    </a>
                                    <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/testimonial-6-3.jpg)" }}></div>
                                </div>
                                <div class="card-body text-center">
                                    <div class="w-50 mx-auto">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-behance.svg" alt="img-logo" class="img-fluid" />
                                    </div>
                                    <p class="my-3 fst-italic">
                                        "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
                                    </p>
                                    <div>
                                        Johhny Later
                                    </div>
                                    <button class="btn bg-gradient-dark btn-sm mt-3 mb-0" type="button">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-md-0 mb-4">
                            <div class="card">
                                <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                                    <a class="d-block blur-shadow-image">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/testimonial-6-3.jpg" alt="img-blur" class="img-fluid border-radius-lg" />
                                    </a>
                                    <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/testimonial-6-3.jpg)" }}></div>
                                </div>
                                <div class="card-body text-center">
                                    <div class="w-50 mx-auto">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-behance.svg" alt="img-logo" class="img-fluid" />
                                    </div>
                                    <p class="my-3 fst-italic">
                                        "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
                                    </p>
                                    <div>
                                        Johhny Later
                                    </div>
                                    <button class="btn bg-gradient-dark btn-sm mt-3 mb-0" type="button">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-md-0 mb-4">
                            <div class="card">
                                <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                                    <a class="d-block blur-shadow-image">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/testimonial-6-3.jpg" alt="img-blur" class="img-fluid border-radius-lg" />
                                    </a>
                                    <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/testimonial-6-3.jpg)" }}></div>
                                </div>
                                <div class="card-body text-center">
                                    <div class="w-50 mx-auto">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-behance.svg" alt="img-logo" class="img-fluid" />
                                    </div>
                                    <p class="my-3 fst-italic">
                                        "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
                                    </p>
                                    <div>
                                        Johhny Later
                                    </div>
                                    <button class="btn bg-gradient-dark btn-sm mt-3 mb-0" type="button">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- -------   START CONTENT 1 - title & description and 6 IMAGES   -------- --> */}
            <section class="py-3">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-4 mx-auto">
                            <div class="position-relative">
                                <img class="w-100 mt-5" src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/iphone.png" />
                            </div>
                        </div>
                        <div class="col-lg-6 mx-auto mt-5">
                            <h3>Free Material Design Resources</h3>
                            <p class="lead mb-5">We’re constantly trying to express ourselves and actualize our dreams.</p>
                            <div class="row">
                                <div class="col-lg-6 col-6 mb-lg-3">
                                    <h2 class="text-gradient text-primary">323</h2>
                                    <p>Of “high-performing” level are led by a certified project manager</p>
                                </div>
                                <div class="col-lg-6 col-6 mb-lg-3">
                                    <h2 class="text-gradient text-primary">500+</h2>
                                    <p>That meets quality standards required by our users</p>
                                </div>
                                <div class="col-lg-6 col-6">
                                    <h2 class="text-gradient text-primary">24/7</h2>
                                    <p>Actively engage team members that finishes on time</p>
                                </div>
                                <div class="col-lg-6 col-6">
                                    <h2 class="text-gradient text-primary">73</h2>
                                    <p>Team members that finishes on time every project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            
            <section class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 ms-auto me-auto text-center">
                            <h3>Some of Our Awesome Projects</h3>
                            <p>This is the paragraph where you can write more details about your projects. Keep you user engaged by providing meaningful information.</p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-5 ms-auto">
                            <div class="card bg-cover text-center" style={{ backgroundImage: "url('https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog1.jpg')" }}>
                                <div class="card-body z-index-2 py-9">
                                    <h2 class="text-white">Social Analytics</h2>
                                    <p class="text-white">
                                        Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and influencers to reach new audiences.
                                    </p>
                                    <label class="badge badge-light text-dark">Analytics</label>
                                </div>
                                <div class="mask bg-gradient-primary border-radius-lg"></div>
                            </div>
                        </div>

                        <div class="col-md-5 me-auto my-auto mt-md-auto mt-5">
                            <div class="p-3 info-horizontal d-flex">
                                <div class="icon me-3">
                                    <i class="material-icons text-gradient text-primary text-3xl">perm_phone_msg</i>
                                </div>
                                <div class="ms-4">
                                    <h4>Listen to Social Conversations</h4>
                                    <p>
                                        Gain access to the demographics, psychographics, and location of unique people who talk about your brand.
                                    </p>
                                </div>
                            </div>

                            <div class="p-3 info-horizontal d-flex">
                                <div class="icon me-3 mt-1">
                                    <i class="material-icons text-gradient text-primary text-3xl">fact_check</i>
                                </div>
                                <div class="ms-4">
                                    <h4>Performance Analyze</h4>
                                    <p>
                                        Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.
                                    </p>
                                </div>
                            </div>

                            <div class="p-3 info-horizontal d-flex">
                                <div class="icon me-3 mt-1">
                                    <i class="material-icons text-gradient text-primary text-3xl">manage_accounts</i>
                                </div>
                                <div class="ms-4">
                                    <h4>Social Conversions</h4>
                                    <p>
                                        Track actions taken on your website that originated from social, and understand the impact on your bottom line.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="horizontal dark my-6 mx-7" />
                    <div class="row">
                        <div class="col-md-5 ms-auto my-auto">
                            <div class="p-3 info-horizontal d-flex">
                                <div class="icon me-3">
                                    <i class="material-icons text-gradient text-info text-3xl">sync_alt</i>
                                </div>
                                <div class="ms-4">
                                    <h4>Always In Sync</h4>
                                    <p>
                                        No matter where you are, Trello stays in sync across all of your devices.
                                    </p>
                                </div>
                            </div>

                            <div class="p-3 info-horizontal d-flex">
                                <div class="icon me-3 mt-1">
                                    <i class="material-icons text-gradient text-info text-3xl">groups</i>
                                </div>
                                <div class="ms-4">
                                    <h4>Work With Any Team</h4>
                                    <p>
                                        Whether it’s for work or even the next family vacation, Trello helps your team.
                                    </p>
                                </div>
                            </div>

                            <div class="p-3 info-horizontal d-flex">
                                <div class="icon me-3 mt-1">
                                    <i class="material-icons text-gradient text-info text-3xl">screen_share</i>
                                </div>
                                <div class="ms-4">
                                    <h4>A Productivity Platform</h4>
                                    <p>
                                        Integrate the apps your team already uses directly into your workflow.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 me-auto">
                            <div class="card bg-cover text-center" style={{ backgroundImage: "url('https://demos.creative-tim.com/material-kit-pro/assets/img//examples/blog2.jpg')" }}>
                                <div class="card-body z-index-2 py-9">
                                    <h2 class="text-white">Trello lets you work.</h2>
                                    <p class="text-white">
                                        Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.
                                    </p>
                                    <label class="badge badge-light text-dark">Trello</label>
                                </div>
                                <div class="mask bg-gradient-info border-radius-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-3">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-4 mx-auto">
                            <div class="position-relative">
                                <img class="w-100 mt-5" src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/iphone.png" />
                            </div>
                        </div>
                        <div class="col-lg-6 mx-auto mt-5">
                            <h3>Free Material Design Resources</h3>
                            <p class="lead mb-5">We’re constantly trying to express ourselves and actualize our dreams.</p>
                            <div class="row">
                                <div class="col-lg-6 col-6 mb-lg-3">
                                    <h2 class="text-gradient text-primary">323</h2>
                                    <p>Of “high-performing” level are led by a certified project manager</p>
                                </div>
                                <div class="col-lg-6 col-6 mb-lg-3">
                                    <h2 class="text-gradient text-primary">500+</h2>
                                    <p>That meets quality standards required by our users</p>
                                </div>
                                <div class="col-lg-6 col-6">
                                    <h2 class="text-gradient text-primary">24/7</h2>
                                    <p>Actively engage team members that finishes on time</p>
                                </div>
                                <div class="col-lg-6 col-6">
                                    <h2 class="text-gradient text-primary">73</h2>
                                    <p>Team members that finishes on time every project</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-4">
                <div class="container">
                    <div class="row justify-space-between py-2">
                        <div class="col-md-4 mx-auto">
                            <div class="card card-profile mt-md-0 mt-5">
                                <div class="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                                    <a class="d-block blur-shadow-image">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-profile1.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" />
                                    </a>
                                    <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-profile1.jpg)" }}></div>
                                </div>
                                <div class="card-body text-center">
                                    <h4 class="mb-0">Bruce Mars</h4>
                                    <p>Atlanta, U.S.</p>
                                    <div class="row justify-content-center text-center">
                                        <div class="col-lg-4 col-4">
                                            <h5 class="text-info mb-0">750</h5>
                                            <small>Projects</small>
                                        </div>
                                        <div class="col-lg-4 col-4">
                                            <h5 class="text-info mb-0">800+</h5>
                                            <small>Hours</small>
                                        </div>
                                        <div class="col-lg-4 col-4">
                                            <h5 class="text-info mb-0">24/7</h5>
                                            <small>Support</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mx-auto">
                            <div class="card card-profile mt-md-0 mt-5">
                                <div class="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                                    <a class="d-block blur-shadow-image">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-profile1.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" />
                                    </a>
                                    <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-profile1.jpg)" }}></div>
                                </div>
                                <div class="card-body text-center">
                                    <h4 class="mb-0">Bruce Mars</h4>
                                    <p>Atlanta, U.S.</p>
                                    <div class="row justify-content-center text-center">
                                        <div class="col-lg-4 col-4">
                                            <h5 class="text-info mb-0">750</h5>
                                            <small>Projects</small>
                                        </div>
                                        <div class="col-lg-4 col-4">
                                            <h5 class="text-info mb-0">800+</h5>
                                            <small>Hours</small>
                                        </div>
                                        <div class="col-lg-4 col-4">
                                            <h5 class="text-info mb-0">24/7</h5>
                                            <small>Support</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mx-auto">
                            <div class="card card-profile mt-md-0 mt-5">
                                <div class="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                                    <a class="d-block blur-shadow-image">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-profile1.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" />
                                    </a>
                                    <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-profile1.jpg)" }}></div>
                                </div>
                                <div class="card-body text-center">
                                    <h4 class="mb-0">Bruce Mars</h4>
                                    <p>Atlanta, U.S.</p>
                                    <div class="row justify-content-center text-center">
                                        <div class="col-lg-4 col-4">
                                            <h5 class="text-info mb-0">750</h5>
                                            <small>Projects</small>
                                        </div>
                                        <div class="col-lg-4 col-4">
                                            <h5 class="text-info mb-0">800+</h5>
                                            <small>Hours</small>
                                        </div>
                                        <div class="col-lg-4 col-4">
                                            <h5 class="text-info mb-0">24/7</h5>
                                            <small>Support</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--------Contact 6------> */}
            <section class="bg-gradient-dark position-relative overflow-hidden mt-0">
                <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/shapes/waves-white.svg" alt="pattern-lines" class="position-absolute opacity-1 w-100" />
                <div class="container py-lg-4 py-2">
                    <div class="row">
                        <div class="col-lg-6 d-flex justify-content-center flex-column">
                            <div id="carouselExampleIndicator" class="carousel slide py-7" data-bs-ride="carousel">
                                <div class="carousel-indicators justify-content-start ms-0">
                                    <a href="javascript:;">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-4.jpg" alt="..." class="avatar avatar-sm avatar-scale-up border-radius-lg shadow border-0 active" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="0" aria-current="true" />
                                        <span class="text-white mx-2">|</span>
                                    </a>
                                    <a href="javascript:;">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-3.jpg" alt="..." class="avatar avatar-sm avatar-scale-up border-radius-lg shadow border-0" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="1" />
                                        <span class="text-white mx-2">|</span>
                                    </a>
                                    <a href="javascript:;">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-2.jpg" alt="..." class="avatar avatar-sm avatar-scale-up border-radius-lg shadow border-0" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="2" />
                                    </a>
                                </div>
                                <div class="carousel-inner">
                                    <h2 class="text-white mb-0">Work with us</h2>
                                    <p class="text-white opacity-8 mb-1">Whatever your qualification is - we got you!</p>
                                    <hr class="text-white horizontal opacity-6 mb-4 mt-2 w-25 text-start" />
                                    <div class="carousel-item active" >
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
                                    <div class="carousel-item">
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
                            <div class="row d-none d-md-flex">
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
                </div>
            </section>
        </>
    )
}
export default SellOnGlobal;