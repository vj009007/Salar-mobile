import React, { useState } from "react";
const Index = () => {
    return (
        <>
            {/* <div  className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
                <section  className="py-lg-7 py-3">
                    <div  className="container">
                        <div  className="row align-items-center">
                            <div  className="col-lg-6">
                                <div  className="row justify-content-start">
                                    <div  className="col-md-6">
                                        <div  className="info">
                                            <i  className="material-icons text-3xl text-gradient text-info mb-3">public</i>
                                            <h5>Fully integrated</h5>
                                            <p>We get insulted by others, lose trust for those We get back freezes</p>
                                        </div>
                                    </div>
                                    <div  className="col-md-6">
                                        <div  className="info">
                                            <i  className="material-icons text-3xl text-gradient text-info mb-3">payments</i>
                                            <h5>Payments functionality</h5>
                                            <p>We get insulted by others, lose trust for those We get back freezes</p>
                                        </div>
                                    </div>
                                </div>
                                <div  className="row justify-content-start mt-4">
                                    <div  className="col-md-6">
                                        <div  className="info">
                                            <i  className="material-icons text-3xl text-gradient text-info mb-3">apps</i>
                                            <h5>Prebuilt components</h5>
                                            <p>We get insulted by others, lose trust for those We get back freezes</p>
                                        </div>
                                    </div>
                                    <div  className="col-md-6">
                                        <div  className="info">
                                            <i  className="material-icons text-3xl text-gradient text-info mb-3">3p</i>
                                            <h5>Improved platform</h5>
                                            <p>We get insulted by others, lose trust for those We get back freezes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-lg-4 ms-auto mt-lg-0 mt-4">
                                <div  className="card">
                                    <div  className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <a  className="d-block blur-shadow-image">
                                            <img src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" alt="img-colored-shadow"  className="img-fluid border-radius-lg" />
                                        </a>
                                        <div  className="colored-shadow" style={{ backgroundImage: "url(&quot;https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80&quot;)" }}></div>
                                    </div>
                                    <div  className="card-body text-center">
                                        <h5  className="font-weight-normal">
                                            <a href="javascript:;">Get insights on Search</a>
                                        </h5>
                                        <p  className="mb-0">
                                            Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards.
                                        </p>
                                        <button type="button"  className="btn bg-gradient-info btn-sm mb-0 mt-3">Find out more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section  className="pt-7">
                <div  className="container-fluid">
                    <div  className="row">
                        <div  className="col-10 mx-auto bg-gradient-dark border-radius-lg">
                            <div  className="row py-5">
                                <div  className="col-xl-4 col-md-6 px-5 position-relative">
                                    <img  className="img border-radius-md max-width-300 w-100 position-relative z-index-2 mt-n7" src="https://images.unsplash.com/photo-1521668576204-57ae3afee860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                                        alt="card image" />
                                </div>
                                <div  className="col-xl-4 col-md-5 z-index-2 position-relative px-md-3 px-5 my-md-auto mt-4">
                                    <i  className="material-icons text-white text-5xl">format_quote</i>
                                    <p  className="text-lg text-white">
                                        Decisions: If you can t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality). Choose the path that leaves you more equanimous in the long term.
                                    </p>
                                    <p  className="text-white font-weight-bold text-sm">Michael - <span  className="text-xs font-weight-normal">Writter</span></p>
                                    <hr  className="vertical start-100 ms-n5 d-xl-block d-none" />
                                </div>
                                <div  className="col-1"></div>
                                <div  className="col-xl-2 col-12 px-xl-0 px-5 my-xl-auto">
                                    <h3  className="text-white mt-xl-0 mt-5">1,340,000 +</h3>
                                    <p  className="text-sm text-white opacity-8">Developers and Companies around the world using our products.</p>
                                    <a href="javascript:;"  className="text-white icon-move-right text-sm">See all products
                                        <i  className="fas fa-arrow-right text-xs"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div  className="page-header min-vh-85 mt-lg-7 pt-3">
                <div  className="position-absolute fixed-top ms-auto w-75 h-75 border-radius-xl z-index-1 d-none d-sm-none d-md-block me-n4" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/dg3.jpg)", backgroundSize: "cover" }}>
                    <span  className="mask bg-gradient-dark opacity-7"></span>
                </div>
                <div  className="container">
                    <div  className="row mt-lg-7 pt-3 mb-5">
                        <div  className="col-lg-6 d-flex justify-content-center flex-column">
                            <div  className="card card-body d-flex justify-content-center shadow-lg border-radius-xl p-5 blur align-items-center z-index-2 shadow-blur">
                                <h2  className="text-dark mb-4">Improving the design complexity</h2>
                                <p  className="text-lg-start text-center mb-0">We re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don t appreciate the moment until it s passed.</p>
                                <br />
                                <div  className="buttons w-100">
                                    <button type="button"  className="btn bg-gradient-dark mb-0">Contact Us</button>
                                    <button type="button"  className="btn btn-outline-dark mb-0 ms-1">Read More</button>
                                </div>
                                <div  className="row mt-5 justify-content-start">
                                    <div  className="col-md-3 col-6 p-0">
                                        <img  className="w-100 opacity-6" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-pinterest.svg" alt="logo" />
                                    </div>
                                    <div  className="col-md-3 col-6 p-0">
                                        <img  className="w-100 opacity-6" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-netflix.svg" alt="logo" />
                                    </div>
                                    <div  className="col-md-3 col-6 p-0">
                                        <img  className="w-100 opacity-6" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-coinbase.svg" alt="logo" />
                                    </div>
                                    <div  className="col-md-3 col-6 p-0">
                                        <img  className="w-100 opacity-6" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/gray-logos/logo-nasa.svg" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <section  className="py-lg-7 py-3">
                <div  className="container">
                    <div  className="row">
                        <div  className="col-lg-6 col-md-8 order-2 order-md-2 order-lg-1">
                            <div  className="position-relative">
                                <div  className="blur-shadow-image">
                                    <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg"  className="w-100 border-radius-xl img-fluid d-block mx-auto" alt="carz" />
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-5 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
                            <div  className="p-3 pt-0">
                                <div  className="icon icon-shape icon-md bg-gradient-info shadow-info text-center mb-4">
                                    <i  className="material-icons opacity-10">celebration</i>
                                </div>
                                <h4  className="mb-4">Refreshing workspace atmosphere</h4>
                                <p>We re not always in the position that we want to be at. We re constantly growing. We re constantly making mistakes. We re constantly trying to express ourselves and actualize our dreams. <br /><br /> If you have the opportunity to
                                    play this game of life you need to appreciate every moment. A lot of people don t appreciate the moment until it s passed.</p>
                                <a href="javascript:;"  className="text-dark icon-move-right">More about us
                                    <i  className="fas fa-arrow-right text-sm ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div  className="row mt-4 mt-md-5 mt-lg-8">
                        <div  className="col-lg-5 col-md-12 me-auto">
                            <div  className="p-3 pt-0">
                                <div  className="icon icon-shape icon-md bg-gradient-warning shadow-warning text-center mb-4">
                                    <i  className="material-icons opacity-10">spa</i>
                                </div>
                                <h4  className="mb-4">Stand up for every move</h4>
                                <p>Society has put up so many boundaries, so many limitations on what s right and wrong that it s almost impossible to get a pure thought out.It s like a little kid, a little boy, looking at colors. <br /> <br /> Before somebody tells
                                    you you shouldn t like pink because that s for girls, or you d instantly become a gay two-year-old. Why would anyone pick blue over pink? Pink is obviously a better color.</p>
                                <a href="javascript:;"  className="text-dark icon-move-right">More about us
                                    <i  className="fas fa-arrow-right text-sm ms-1"></i>
                                </a>
                            </div>
                        </div>
                        <div  className="col-lg-6 col-md-8">
                            <div  className="position-relative">
                                <div  className="blur-shadow-image">
                                    <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/dg1.jpg"  className="w-100 border-radius-xl mt-4 img-fluid d-block mx-auto" alt="sunset" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section  className="bg-gradient-dark position-relative overflow-hidden mt-0">
                <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/shapes/waves-white.svg" alt="pattern-lines"  className="position-absolute opacity-1 w-100" />
                <div  className="container py-lg-4 py-2">
                    <div  className="row">
                        <div  className="col-lg-6 d-flex justify-content-center flex-column">
                            <div id="carouselExampleIndicator"  className="carousel slide py-7" data-bs-ride="carousel">
                                <div  className="carousel-indicators justify-content-start ms-0">
                                    <a href="javascript:;">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-4.jpg" alt="..."  className="avatar avatar-sm avatar-scale-up border-radius-lg shadow border-0 active" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="0" aria-current="true" />
                                        <span  className="text-white mx-2">|</span>
                                    </a>
                                    <a href="javascript:;">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-3.jpg" alt="..."  className="avatar avatar-sm avatar-scale-up border-radius-lg shadow border-0" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="1" />
                                        <span  className="text-white mx-2">|</span>
                                    </a>
                                    <a href="javascript:;">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-2.jpg" alt="..."  className="avatar avatar-sm avatar-scale-up border-radius-lg shadow border-0" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="2" />
                                    </a>
                                </div>
                                <div  className="carousel-inner">
                                    <h2  className="text-white mb-0">Work with us</h2>
                                    <p  className="text-white opacity-8 mb-1">Whatever your qualification is - we got you!</p>
                                    <hr  className="text-white horizontal opacity-6 mb-4 mt-2 w-25 text-start" />
                                    <div  className="carousel-item active">
                                        <h6  className="text-white opacity-8 pe-5">"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is
                                            the way to success. A single rose can be my garden... a single friend, my world."</h6>
                                        <div  className="author mt-4">
                                            <div  className="name">
                                                <span  className="text-white">Ludwig Siato</span>
                                                <div  className="stats">
                                                    <small  className="text-white opacity-6">Project manager, Apple</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="carousel-item">
                                        <h6  className="text-white opacity-8 pe-5">"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is
                                            the way to success. A single rose can be my garden... a single friend, my world."</h6>
                                        <div  className="author mt-4">
                                            <div  className="name">
                                                <span  className="text-white">John Down</span>
                                                <div  className="stats">
                                                    <small  className="text-white opacity-6">CFO, Google</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="carousel-item">
                                        <h6  className="text-white opacity-8 pe-5">"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is
                                            the way to success. A single rose can be my garden... a single friend, my world."</h6>
                                        <div  className="author mt-4">
                                            <div  className="name">
                                                <span  className="text-white">Mark Jojansen</span>
                                                <div  className="stats">
                                                    <small  className="text-white opacity-6">Fullstack Developer, Atlassian</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="col-md-6 justify-content-center flex-column d-sm-none d-md-none d-lg-flex d-xl-flex">
                            <div  className="row justify-content-center d-none d-md-flex">
                                <div  className="col-3 mb-4">
                                    <div  className="d-block bg-white avatar avatar-lg border-radius-lg p-3 mt-n4 ms-8 fadeIn2 fadeInBottom">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-zoom.svg" alt="Logo Image" />
                                    </div>
                                </div>
                                <div  className="col-4 mb-4">
                                    <div  className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-8 mt-n6 fadeIn1 fadeInBottom">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-google-cloud.svg" alt="Logo Image" />
                                    </div>
                                </div>
                                <div  className="col-4 mb-4">
                                    <div  className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-6 mt-2 fadeIn3 fadeInBottom">
                                        <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-github.svg" alt="Logo Image" />
                                    </div>
                                </div>
                            </div>
                            <div  className="row justify-content-end d-none d-md-flex">
                                <div  className="col-4 my-4">
                                    <div  className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-4 fadeIn1 fadeInBottom">
                                        <img  className="avatar-img" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-amazon.svg" alt="Logo Image" />
                                    </div>
                                </div>
                                <div  className="col-3 my-4">
                                    <div  className="d-block bg-white avatar avatar-lg border-radius-lg p-3 me-auto fadeIn1 fadeInBottom">
                                        <img  className="avatar-img" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-apple.svg" alt="Logo Image" />
                                    </div>
                                </div>
                                <div  className="col-3 my-4">
                                    <div  className="d-block bg-white avatar avatar-lg border-radius-lg p-3 fadeIn3 fadeInBottom ms-3 mt-3">
                                        <img  className="avatar-img" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-twitter.svg" alt="Logo Image" />
                                    </div>
                                </div>
                            </div>
                            <div  className="row d-none d-md-flex">
                                <div  className="col-6">

                                    <div  className="d-block bg-white avatar avatar-lg border-radius-lg p-3 ms-auto mt-5 fadeIn2 fadeInBottom">
                                        <img  className="avatar-img" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-youtube.svg" alt="Logo Image" />
                                    </div>

                                </div>
                                <div  className="col-6 mt-6">

                                    <div czzlass="d-block bg-white avatar avatar-lg border-radius-lg p-3 mx-auto mt-n3 fadeIn3 fadeInBottom">
                                        <img  className="avatar-img" src="https://demos.creative-tim.com/material-kit-pro/assets/img/logos/small-logos/logo-dribbble.svg" alt="Logo Image" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}
export default Index;