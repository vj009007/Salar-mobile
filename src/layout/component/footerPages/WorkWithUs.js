import React, { useState } from "react";
import { Link } from "react-router-dom";
const WorkWithUs = () => {
    return (
        <>
            <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-5">

                <section class="py-md-7">
                    <div class="container">
                        <div class="row">
                            <div class="col-3 position-relative max-width-300 mx-auto">
                                <div class="blur-shadow-image">
                                    <img class="w-100 h-100 border-radius-xl position-absolute d-xl-block d-none" src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/clem-onojeghuou.jpg" loading="lazy" alt="image" />
                                </div>
                                <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/clem-onojeghuou.jpg)" }}></div>
                            </div>
                            <div class="col-lg-9 ms-auto">
                                <div class="row">
                                    <div class="col-12 col-md-7">
                                        <div class="p-3 text-start border-radius-lg">
                                            <h2 class="mt-5">Material Design Values</h2>
                                            <p class="text-dark text-lg mt-3">
                                                <span class="font-weight-bold">The time</span> is now for it to be okay to be great. People in this world shun people for being great. For being a bright color.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-3 col-md-4 py-3">
                                        <div class="p-3 text-start">
                                            <i class="material-icons text-4xl text-gradient text-info">spa</i>
                                            <h5 class="mt-3">Give your best</h5>
                                            <p>Creativity starts with an empty calendar and ends with a full one.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-4 py-3">
                                        <div class="p-3 text-start">
                                            <i class="material-icons text-4xl text-gradient text-info">school</i>
                                            <h5 class="mt-3">Learn new things</h5>
                                            <p>We get insulted by others, lose trust for those We get back.</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-md-4 py-3">
                                        <div class="p-3 text-start">
                                            <i class="material-icons text-4xl text-gradient text-info">emoji_people</i>
                                            <h5 class="mt-3">Never give up</h5>
                                            <p>When playing, surround yourself with people happier than you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-4">
                    <div class="container py-5">
                        <div class="row align-items-center">
                            <div class="col-md-6 mb-md-0 mb-4">
                                <h3 class="text-dark mb-0">Come and meet us</h3>
                                <h3>500+ offices</h3>
                                <p class="mb-4">
                                    Technology is applied science. Science is the study of nature. Mathematics is the language of nature. Philosophy is the root of mathematics. All tightly interrelated.
                                </p>
                                <p class="font-weight-bold"><span class="me-2">-</span> Showcase and embed your work with</p>
                                <p class="font-weight-bold"><span class="me-2">-</span> Publish across social channels in a click</p>
                                <p class="font-weight-bold"><span class="me-2">-</span> Sell your videos worldwide</p>
                                <p class="font-weight-bold mb-5"><span class="me-2">-</span> Make more profit</p>
                                <a href="javascript:;" class="text-info icon-move-right">Learn More
                                    <i class="fas fa-arrow-right text-sm ps-1" aria-hidden="true"></i>
                                </a>
                            </div>
                            <div class="col-md-6">
                                <div class="card p-0 border-radius-lg">
                                    <div class="blur-shadow-image">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-project5.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" loading="lazy" />
                                    </div>
                                    <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-project5.jpg)" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 mx-auto text-center">
                                <h6 class="text-gradient text-info text-uppercase">The Executive Team</h6>
                                <h2>Building the future</h2>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-lg-3 col-12 col-md-6 mb-lg-0 mb-5">
                                <Link to='/post-page'>
                                    <div class="card shadow-lg">
                                        <div class="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                                            <a class="d-block blur-shadow-image">
                                                <img src="https://images.unsplash.com/photo-1536321115970-5dfa13356211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80" alt="img-blur-shadow" class="img-fluid shadow border-radius-lg"
                                                    loading="lazy" />
                                            </a>
                                            <div class="colored-shadow" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1536321115970-5dfa13356211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)" }}></div>
                                        </div>
                                        <div class="card-body text-center bg-white border-radius-lg p-3 pt-0">
                                            <h5 class="mt-3 mb-1 d-md-block d-none">Miriam Lendra</h5>
                                            <p class="mb-1 d-md-none d-block text-sm font-weight-bold text-dark mt-3">Miriam Lendra</p>
                                            <p class="mb-0 text-xs font-weight-bolder text-info text-gradient text-uppercase">Desktop Publisher</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-12 col-md-6 mb-lg-0 mb-5">
                                <Link to='/post-page'>
                                    <div class="card shadow-lg">
                                        <div class="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                                            <a class="d-block blur-shadow-image">
                                                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80" alt="img-blur-shadow" class="img-fluid shadow border-radius-lg" loading="lazy" />
                                            </a>
                                            <div class="colored-shadow" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1544717305-2782549b5136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)" }}></div>
                                        </div>
                                        <div class="card-body text-center bg-white border-radius-lg p-3 pt-0">
                                            <h5 class="mt-3 mb-1 d-md-block d-none">Natalie Paisley</h5>
                                            <p class="mb-1 d-md-none d-block text-sm font-weight-bold text-dark mt-3">Natalie Paisley</p>
                                            <p class="mb-0 text-xs font-weight-bolder text-info text-gradient text-uppercase">Credit Analyst</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-12 col-md-6 mb-lg-0 mb-5">
                                <Link to='/post-page'>
                                    <div class="card shadow-lg">
                                        <div class="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                                            <a class="d-block blur-shadow-image">
                                                <img src="https://images.unsplash.com/photo-1546215364-12f3fff5d578?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80" alt="img-blur-shadow" class="img-fluid shadow border-radius-lg" loading="lazy" />
                                            </a>
                                            <div class="colored-shadow" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1546215364-12f3fff5d578?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)" }}></div>
                                        </div>
                                        <div class="card-body text-center bg-white border-radius-lg p-3 pt-0">
                                            <h5 class="mt-3 mb-1 d-md-block d-none">Mark Audrey</h5>
                                            <p class="mb-1 d-md-none d-block text-sm font-weight-bold text-dark mt-3">Bella Audrey</p>
                                            <p class="mb-0 text-xs font-weight-bolder text-info text-gradient text-uppercase">Economist</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-12 col-md-6 mb-lg-0 mb-5">
                                <Link to='/post-page'>
                                    <div class="card shadow-lg">
                                        <div class="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                                            <a class="d-block blur-shadow-image">
                                                <img src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80" alt="img-blur-shadow" class="img-fluid shadow border-radius-lg"
                                                    loading="lazy" />
                                            </a>
                                            <div class="colored-shadow" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80)" }}></div>
                                        </div>
                                        <div class="card-body text-center bg-white border-radius-lg p-3 pt-0">
                                            <h5 class="mt-3 mb-1 d-md-block d-none">Wang Skylar</h5>
                                            <p class="mb-1 d-md-none d-block text-sm font-weight-bold text-dark mt-3">Mila Skylar</p>
                                            <p class="mb-0 text-xs font-weight-bolder text-info text-gradient text-uppercase">Aviation Inspector</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="row pt-7 pb-6">
                            <div class="col-lg-6">
                                <h2>Get your own app</h2>
                                <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.</p>
                            </div>
                            <div class="col-lg-6 text-end d-flex flex-column justify-content-center">
                                <button type="button" class="btn bg-gradient-info mb-0 ms-lg-auto me-lg-0 me-auto mt-lg-0 mt-2">Join Team</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* <!-----------Blog-------------> */}
            <section class="py-5 bg-gray-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center">
                            <div class="card card-blog card-plain">
                                <div class="card-header p-0 position-relative z-index-2">
                                    <a class="d-block blur-shadow-image">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" />
                                    </a>
                                </div>
                                <div class="card-body px-0 pt-4">
                                    <p class="text-gradient text-primary text-gradient font-weight-bold text-sm text-uppercase">Enterprise</p>
                                    <a href="javascript:;">
                                        <h4>
                                            Siri brings hands-free TV to more devices
                                        </h4>
                                    </a>
                                    <p>
                                        Siri&#39;s latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward, rewind and more, without having to first invoke a specific skill, or even press a button
                                        on their remote.
                                    </p>
                                    <button type="button" class="btn bg-gradient-primary mt-3">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 mx-auto text-center mt-5">
                            <div class="card card-blog card-plain">
                                <div class="card-header p-0 position-relative z-index-2">
                                    <a class="d-block blur-shadow-image">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog3.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" />
                                    </a>
                                </div>
                                <div class="card-body px-0 pt-4">
                                    <p class="text-gradient text-warning text-gradient font-weight-bold text-sm text-uppercase">Music</p>
                                    <a href="javascript:;">
                                        <h4>
                                            Shark Week: How to Watch It Scientist
                                        </h4>
                                    </a>
                                    <p>
                                        As Uber works through a huge amount of internal management turmoil, the company is also consolidating and rationalizing more of its international business. Today, the company announced it will be combining its rides-on-demand business and UberEATS.
                                    </p>
                                    <button type="button" class="btn bg-gradient-warning mt-3">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-6 justify-content-center d-flex flex-column">
                                    <div class="card border-radius-lg">
                                        <div class="d-block blur-shadow-image">
                                            <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog8.jpg" alt="img-blur-shadow-blog-2" class="img-fluid border-radius-lg" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 justify-content-center d-flex flex-column ps-lg-5 pt-lg-0 pt-3">
                                    <h6 class="category text-info mt-3">Coworking</h6>
                                    <h3>
                                        <a href="javascript:;" class="text-dark">Warner Music Group buys concert discovery service Songkick</a>
                                    </h3>
                                    <p>
                                        Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark. Songkick has been involved in a lawsuit against the major…
                                        <a href="javascript:;" class="text-darker icon-move-right text-sm">Read More
                                            <i class="fas fa-arrow-right text-xs ms-1"></i>
                                        </a>
                                    </p>
                                    <p class="author">
                                        by <a href="javascript:;" class="ms-1"><span class="font-weight-bold text-info">Sarah Perez</span></a>, 2 days ago
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 mt-5">
                            <div class="row flex-row-reverse">
                                <div class="col-lg-6 justify-content-center d-flex flex-column">
                                    <div class="card border-radius-lg">
                                        <div class="blur-shadow-image">
                                            <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog6.jpg" alt="img-blur-shadow-blog-2" class="img-fluid border-radius-lg" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 pe-lg-5 justify-content-center d-flex flex-column pt-lg-0 pt-3">
                                    <h6 class="category text-info mt-3">House</h6>
                                    <h3>
                                        <a href="javascript:;" class="text-dark">Warner Music Group buys concert discovery service Songkick</a>
                                    </h3>
                                    <p>
                                        Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark. Songkick has been involved in a lawsuit against the major…
                                        <a href="javascript:;" class="text-darker icon-move-right text-sm">Read More
                                            <i class="fas fa-arrow-right text-xs ms-1"></i>
                                        </a>
                                    </p>
                                    <p class="author">
                                        by <a href="javascript:;" class="ms-1"><span class="font-weight-bold text-info">Millie Borough</span></a>, 10 days ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-----------Blog------------->
<!--------Contact 6------> */}
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
                                    <div class="carousel-item active">
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
export default WorkWithUs;