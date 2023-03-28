import React, { useState } from "react";
const FAQ = () => {
    return (
        <>
            <section class="py-4">
                <div class="container">
                    <div class="row my-5">
                        <div class="col-md-6 mx-auto text-center">
                            <h2>Frequently Asked Questions</h2>
                            <p>A lot of people don&#39;t appreciate the moment until it’s passed. I&#39;m not trying my hardest, and I&#39;m not trying to do </p>
                        </div>
                    </div>
                    <div class="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row newAddSome">
                             <div className="col-md-12 mx-auto"><h1>General</h1></div>
                        </div>
                        <div class="accordion addAcr" id="accordionRental">
                            <div class="accordion-item mb-3">
                                <h5 class="accordion-header" id="headingOne">
                                    <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How do I order?
                                        <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                                        <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                                    </button>
                                </h5>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionRental">
                                    <div class="accordion-body text-sm opacity-8">
                                    <div className="row newAddSome">
                                         <div className="col-md-12 mx-auto">
                                        <p>1</p></div>
                       </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-3">
                                <h5 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How can i make the payment?
                                        <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                                        <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                                    </button>
                                </h5>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionRental">
                                    <div class="accordion-body text-sm opacity-8">
                                    <div className="row newAddSome">
                                         <div className="col-md-12 mx-auto">
                                        <p>2</p></div>
                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-3">
                                <h5 class="accordion-header" id="headingThree">
                                    <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        How much time does it take to receive the order?
                                        <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                                        <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                                    </button>
                                </h5>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionRental">
                                    <div class="accordion-body text-sm opacity-8">
                                    <div className="row newAddSome">
                                         <div className="col-md-12 mx-auto">
                                        <p>3</p></div>
                       </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-3">
                                <h5 class="accordion-header" id="headingFour">
                                    <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Can I resell the products?
                                        <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                                        <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                                    </button>
                                </h5>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionRental">
                                    <div class="accordion-body text-sm opacity-8">
                                    <div className="row newAddSome">
                                         <div className="col-md-12 mx-auto">
                                        <p>4</p></div>
                       
                                </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-3">
                                <h5 class="accordion-header" id="headingFifth">
                                    <button class="accordion-button border-bottom font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="false" aria-controls="collapseFifth">
                                        Where do I find the shipping details?
                                        <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"></i>
                                        <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"></i>
                                    </button>
                                </h5>
                                <div id="collapseFifth" class="accordion-collapse collapse" aria-labelledby="headingFifth" data-bs-parent="#accordionRental">
                                    <div class="accordion-body text-sm opacity-8">
                                    <div className="row newAddSome">
                                         <div className="col-md-12 mx-auto">
                                        <p>5</p></div>
                        </div>
                                    </div>
                                </div>
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
            
            
            {/* <!--------Contact 6------> */}
            
        </>
    )
}
export default FAQ;