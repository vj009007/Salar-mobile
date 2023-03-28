import React, { useState } from "react";
import { Link } from "react-router-dom";
const PostPage = () => {
    return (
        <>
            <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 overflow-hidden">
                <section class="pt-6 pb-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="card mt-5 mt-md-0 h-100">
                                    <Link to="">
                                        <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                                            <a class="d-block blur-shadow-image">
                                                <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/products/product-2-min.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" loading="lazy" />
                                            </a>
                                            <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/products/product-2-min.jpg)" }}></div>
                                        </div>
                                        <div class="card-body pt-3">
                                            <a href="javascript:;">
                                                <h5>
                                                    Lovely and cosy apartment
                                                </h5>
                                            </a>
                                            <p>
                                                Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="card mt-5 mt-md-0 h-100">
                                    <Link to="/post-page">
                                        <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                                            <a class="d-block blur-shadow-image">
                                                <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/products/product-1-min.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" loading="lazy" />
                                            </a>
                                            <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/products/product-1-min.jpg)" }}></div>
                                        </div>
                                        <div class="card-body pt-3">
                                            <p class="text-dark mb-2 text-sm">Private Room • 1 Guests • 1 Sofa</p>
                                            <a href="javascript:;">
                                                <h5>
                                                    Single room in the center of the city
                                                </h5>
                                            </a>
                                            <p>
                                                As Uber works through a huge amount of internal management turmoil, the company is also consolidating more of its international business.
                                            </p>
                                            <button type="button" class="btn btn-outline-primary btn-sm mb-0">From / Night</button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="card mt-5 mt-lg-0 h-100">
                                    <Link to="/post-page">
                                        <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                                            <a class="d-block blur-shadow-image">
                                                <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/products/product-3-min.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" loading="lazy" />
                                            </a>
                                            <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/products/product-3-min.jpg)" }}></div>
                                        </div>
                                        <div class="card-body pt-3">
                                            <p class="text-dark mb-2 text-sm">Entire Apartment • 4 Guests • 2 Beds</p>
                                            <a href="javascript:;">
                                                <h5>
                                                    Independent house bedroom kitchen
                                                </h5>
                                            </a>
                                            <p>
                                                Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music.
                                            </p>
                                            <button type="button" class="btn btn-outline-primary btn-sm mb-0">From / Night</button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="card mt-5">
                                    <Link to="/post-page">
                                        <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                                            <a class="d-block blur-shadow-image">
                                                <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/products/product-5-min.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" loading="lazy" />
                                            </a>
                                            <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/products/product-5-min.jpg)" }} ></div>
                                        </div>
                                        <div class="card-body pt-3">
                                            <p class="text-dark mb-2 text-sm">Entire Apartment • 2 Guests • 1 Bed</p>
                                            <a href="javascript:;">
                                                <h5>
                                                    Zen Gateway with pool and garden
                                                </h5>
                                            </a>
                                            <p>
                                                Fast forward, rewind and more, without having to first invoke a specific skill, or even press a button on their remote.
                                            </p>
                                            <button type="button" class="btn btn-outline-primary btn-sm mb-0">From / Night</button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="card mt-5">
                                    <Link to="/post-page">
                                        <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                                            <a class="d-block blur-shadow-image">
                                                <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/products/product-6-min.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" loading="lazy" />
                                            </a>
                                            <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/products/product-6-min.jpg&);" }} ></div>
                                        </div>
                                        <div class="card-body pt-3">
                                            <p class="text-dark mb-2 text-sm">Entire Flat • 8 Guests • 3 Rooms</p>
                                            <a href="javascript:;">
                                                <h5>
                                                    Cheapest hotels for a luxury vacation
                                                </h5>
                                            </a>
                                            <p>
                                                Today, the company announced it will be combining its rides-on-demand business and UberEATS.
                                            </p>
                                            <button type="button" class="btn btn-outline-primary btn-sm mb-0">From / Night</button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="card mt-5">
                                    <Link to="/post-page">
                                        <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
                                            <a class="d-block blur-shadow-image">
                                                <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/products/product-7-min.jpg" alt="img-blur-shadow" class="img-fluid border-radius-lg" loading="lazy" />
                                            </a>
                                            <div class="colored-shadow" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/products/product-7-min.jpg&);" }}></div>
                                        </div>
                                        <div class="card-body pt-3">
                                            <p class="text-dark mb-2 text-sm">Entire Apartment • 2 Guests • 1 Bed</p>
                                            <a href="javascript:;">
                                                <h5>
                                                    Cozy Double Room Near Station
                                                </h5>
                                            </a>
                                            <p>
                                                Different people have different taste, and various types of music have many ways of leaving an impact on someone.
                                            </p>
                                            <button type="button" class="btn btn-outline-primary btn-sm mb-0">From / Night</button>
                                        </div>
                                    </Link>
                                </div>
                            </div >
                            <div class="col-sm-7 ms-auto text-end">
                                <ul class="pagination pagination-primary mt-4">
                                    <li class="page-item ms-auto">
                                        <a class="page-link" href="javascript:;" aria-label="Previous">
                                            <span aria-hidden="true"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>
                                        </a>
                                    </li>
                                    <li class="page-item active">
                                        <a class="page-link" href="javascript:;">1</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:;">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:;">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:;">4</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:;">5</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:;" aria-label="Next">
                                            <span aria-hidden="true"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div >
                    </div >
                </section >

                <section class="py-3 mt-5 bg-gradient-dark position-relative overflow-hidden mx-n5">
                    <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/shapes/pattern-lines.svg" class="position-absolute opacity-2 w-100 top-0 d-md-block d-none" alt="avatar" />
                    <div class="container pt-6 pb-5 position-relative z-index-3">
                        <div class="row">
                            <div class="col-md-6 mx-auto text-center">
                                <span class="badge badge-white text-dark mb-2">Testimonials</span>
                                <h2 class="text-white mb-3">Some thoughts from our clients</h2>
                                <h5 class="text-white font-weight-light">
                                    If you’re selected for them you’ll also get three tickets, opportunity to access Investor Office Hours and Mentor Hours and much more all for free.
                                </h5>
                            </div>
                        </div>
                        <div class="row mt-8">
                            <div class="col-md-4 mb-md-0 mb-7">
                                <div class="card">
                                    <div class="text-center mt-n5 z-index-1">
                                        <div class="position-relative">
                                            <div class="blur-shadow-avatar rounded-circle">
                                                <img class="avatar avatar-xxl shadow-lg" src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-2.jpg" alt="avatar" />
                                            </div>
                                            <div class="colored-shadow rounded start-0 end-0 mx-auto avatar-xxl" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/team-2.jpg)" }}></div>
                                            <div class="colored-shadow start-0 end-0 mx-auto avatar-xxl"></div>
                                        </div>
                                    </div>
                                    <div class="card-body text-center pb-0">
                                        <h4 class="mb-0">Olivia Harper</h4>
                                        <p>@oliviaharper</p>
                                        <p class="mt-2">
                                            The connections you make at Web Summit are unparalleled, we met users all over the world.
                                        </p>
                                    </div>
                                    <div class="card-footer text-center pt-2">
                                        <div class="mx-auto">
                                            <svg class="opacity-2" width="60px" height="60px" viewBox="0 0 270 270" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <title>quote-down</title>
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <path d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z" fill="#48484A" fillRule="nonzero" transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-md-0 mb-7">
                                <div class="card">
                                    <div class="text-center mt-n5 z-index-1">
                                        <div class="position-relative">
                                            <div class="blur-shadow-avatar rounded-circle">
                                                <img class="avatar avatar-xxl shadow-lg" src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-3.jpg" alt="avatar" />
                                            </div>
                                            <div class="colored-shadow rounded start-0 end-0 mx-auto avatar-xxl" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/team-3.jpg)" }}></div>
                                            <div class="colored-shadow start-0 end-0 mx-auto avatar-xxl"></div>
                                        </div>
                                    </div>
                                    <div class="card-body text-center pb-0">
                                        <h4 class="mb-0">Simon Lauren</h4>
                                        <p>@simonlaurent</p>
                                        <p class="mt-2">
                                            The networking at Web Summit is like no other European tech conference. Everything is amazing.
                                        </p>
                                    </div>
                                    <div class="card-footer text-center pt-2">
                                        <div class="mx-auto">
                                            <svg class="opacity-2" width="60px" height="60px" viewBox="0 0 270 270" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <title>quote-down</title>
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <path d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z" fill="#48484A" fillRule="nonzero" transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-md-0 mb-7">
                                <div class="card">
                                    <div class="text-center mt-n5 z-index-1">
                                        <div class="position-relative">
                                            <div class="blur-shadow-avatar rounded-circle">
                                                <img class="avatar avatar-xxl shadow-lg" src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-4.jpg" alt="avatar" />
                                            </div>
                                            <div class="colored-shadow rounded start-0 end-0 mx-auto avatar-xxl" style={{ backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro/assets/img/team-4.jpg)" }}></div>
                                            <div class="colored-shadow start-0 end-0 mx-auto avatar-xxl"></div>
                                        </div>
                                    </div>
                                    <div class="card-body text-center pb-0">
                                        <h4 class="mb-0">Lucian Eurel</h4>
                                        <p>@luciaeurel</p>
                                        <p class="mt-2">
                                            Web Summit will increase your appetite, your inspiration, your motivation and your network.
                                        </p>
                                    </div>
                                    <div class="card-footer text-center pt-2">
                                        <div class="mx-auto">
                                            <svg class="opacity-2" width="60px" height="60px" viewBox="0 0 270 270" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <title>quote-down</title>
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <path d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z" fill="#48484A" fillRule="nonzero" transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="py-5 mt-5">
                    <div class="container">
                        <div class="row my-5">
                            <div class="col-md-6 mx-auto text-center">
                                <h2>Frequently Asked Questions</h2>
                                <p>A lot of people don’t appreciate the moment until it’s passed. I'm not trying my hardest, and I'm not trying to do </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 mx-auto">
                                <div class="accordion" id="accordionRental">
                                    <div class="accordion-item mb-3">
                                        <h5 class="accordion-header" id="headingOne">
                                            <button class="accordion-button border-bottom font-weight-bold text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                How do I order?
                                                <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0" aria-hidden="true"></i>
                                                <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionRental">
                                            <div class="accordion-body text-sm opacity-8">
                                                We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to
                                                appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mb-3">
                                        <h5 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button border-bottom font-weight-bold text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How can i make the payment?
                                                <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0" aria-hidden="true"></i>
                                                <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionRental">
                                            <div class="accordion-body text-sm opacity-8">
                                                It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and
                                                inspire other people to follow their dreams, too.
                                                <br /> We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity
                                                to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mb-3">
                                        <h5 class="accordion-header" id="headingThree">
                                            <button class="accordion-button border-bottom font-weight-bold text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                How much time does it take to receive the order?
                                                <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0" aria-hidden="true"></i>
                                                <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionRental">
                                            <div class="accordion-body text-sm opacity-8">
                                                The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the
                                                only one who believed it? If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like,
                                                one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mb-3">
                                        <h5 class="accordion-header" id="headingFour">
                                            <button class="accordion-button border-bottom font-weight-bold text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Can I resell the products?
                                                <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0" aria-hidden="true"></i>
                                                <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionRental">
                                            <div class="accordion-body text-sm opacity-8">
                                                I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was
                                                taught I could do everything.
                                                <br /><br /> If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people
                                                can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item mb-3">
                                        <h5 class="accordion-header" id="headingFifth">
                                            <button class="accordion-button border-bottom font-weight-bold text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="false" aria-controls="collapseFifth">
                                                Where do I find the shipping details?
                                                <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0" aria-hidden="true"></i>
                                                <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0" aria-hidden="true"></i>
                                            </button>
                                        </h5>
                                        <div id="collapseFifth" class="accordion-collapse collapse" aria-labelledby="headingFifth" data-bs-parent="#accordionRental">
                                            <div class="accordion-body text-sm opacity-8">
                                                There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong
                                                because you can’t learn anything from a compliment. I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their
                                                perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="min-vh-90">
                    <img class="w-50 position-absolute end-0 border-radius-top-start-lg" src="https://images.unsplash.com/photo-1539803442075-48618f39bb3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=963&amp;q=80"
                        alt="lakeHouse" loading="lazy" />
                    <div class="container">
                        <div class="row mt-8">
                            <div class="col-lg-7 d-flex justify-content-center flex-column">
                                <div class="card card-body d-flex justify-content-center shadow-lg p-sm-5 blur align-items-center">
                                    <h3 class="text-center">Contact us</h3>
                                    <form id="contact-form" method="post" autocomplete="off">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="input-group input-group-static">
                                                        <label>First Name</label>
                                                        <input type="text" class="form-control" placeholder="eg. Michael" onfocus="focused(this)" onfocusout="defocused(this)" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6 ps-2">
                                                    <div class="input-group input-group-static">
                                                        <label>Last Name</label>
                                                        <input type="text" class="form-control" placeholder="eg. Prior" onfocus="focused(this)" onfocusout="defocused(this)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-4 mt-4">
                                                <div class="input-group input-group-static">
                                                    <label>Email Address</label>
                                                    <input type="text" class="form-control" placeholder="eg. material@design.com" onfocus="focused(this)" onfocusout="defocused(this)" />
                                                </div>
                                            </div>
                                            <div class="input-group input-group-static mb-4">
                                                <label>Your message</label>
                                                <textarea name="message" class="form-control" id="your_message" rows="4"></textarea>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-check form-switch mb-4">
                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked="" />
                                                        <label class="form-check-label" for="flexSwitchCheckDefault">I agree to the <a href="javascript:;" class="text-dark"><u>Terms and Conditions</u></a>.</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <button type="submit" class="btn bg-gradient-dark w-100">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <!-----------Blog------------->
            <!-- START Blogs w/ big image on left --> */}
            <section class="py-5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-5 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                            <h2 class="mb-4">Find more great partners</h2>
                            <p class="mb-2">It really matters and then like it really doesn&#39;t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn&#39;t matter. </p>
                            <ul class="m-lg-2 m-auto">
                                <li class="mb-2">People are so scared to lose their hope</li>
                                <li class="mb-2">That&#39;s the main thing people </li>
                                <li class="mb-2">Thoughts- their perception of themselves!</li>
                            </ul>
                            <p>It really matters and then like it really doesn&#39;t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn&#39;t matter.</p>
                            <h3 class="mt-4">We will be with you forever</h3>
                            <p>It really matters and then like it really doesn&#39;t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn&#39;t matter.</p>
                            <p class="blockquote my-3 ps-2">
                                <span class="text-bold">“And thank you for turning my personal jean jacket into a couture piece.”</span>
                                <br />
                                <small class="blockquote-footer">
                                    Kanye West, Producer.
                                </small>
                            </p>
                        </div>
                        <div class="col-md-5 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
                            <img class="max-width-400 border-radius-lg shadow-lg" src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/studio-2.jpg" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- END Blogs w/ big image on left -->
            <!-----------Blog------------->
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
export default PostPage;