import React, { useState } from "react";
import { Link } from "react-router-dom";
const BlogPost = () => {
    return (
        <>
      <div class="container">
    <div class="row">
      <div class="col-lg-7">
    
        <section class="py-5">
          <div class="card card-plain card-blog mt-5">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-image position-relative border-radius-lg">
                  <div class="blur-shadow-image">
                    <img class="img border-radius-lg" src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog-post-3.jpg" alt="architecture" loading="lazy" />
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-7 my-sm-auto mt-3 ms-sm-3">
                <h4>
                  <a href="javascript:;" class="text-dark">Rover raised to $65 million</a>
                </h4>
                <p>
                  Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover, which raised $65 million to expand its pet sitting <a href="javascript:;"> Read More </a>
                </p>
                <div class="author">
                  <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-4.jpg" alt="team-4"
                   class="avatar avatar-sm shadow me-2 border-radius-lg" loading="lazy" />
                  <p class="my-auto">Katie Roof</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-plain card-blog mt-5">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-image position-relative border-radius-lg">
                  <div class="blur-shadow-image">
                    <img class="img border-radius-lg" 
                    src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog-post-3.jpg" alt="estate" 
                    loading="lazy" />
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-7 my-sm-auto mt-3 ms-sm-3">
                <h4>
                  <a href="javascript:;" class="text-dark">MateLabs mixes machine learning</a>
                </h4>
                <p>
                  If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, a new offering from MateLabs. MateVerse, a platform where novices can spin out machine... <a href="javascript:;"> Read More </a>
                </p>
                <div class="author">
                  <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-4.jpg" alt="team-3"
                  class="avatar avatar-sm shadow me-2 border-radius-lg" loading="lazy" />
                  <p class="my-auto">John Mannes</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card card-plain card-blog my-5">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-image position-relative border-radius-lg">
                  <div class="blur-shadow-image">
                    <img class="img border-radius-lg" 
                    src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog-post-3.jpg" 
                    alt="buildings" loading="lazy" />
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-7 my-sm-auto mt-3 ms-sm-3">
                <h4>
                  <a href="javascript:;" class="text-dark">US venture investment tricks</a>
                </h4>
                <p>
                  Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, late-stage financings and a few outsized early-stage rounds in tech and healthcare.. <a href="javascript:;"> Read More </a>
                </p>
                <div class="author">
                  <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-4.jpg" alt="team-2" 
                  class="avatar avatar-sm shadow me-2 border-radius-lg" loading="lazy" />
                  <p class="my-auto">Devin Coldewey</p>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <div class="card card-blog card-background">
          <div class="full-background"  loading="lazy"></div>
          <div class="card-body body-left">
            <div class="content-left text-start">
              <h2 class="card-title text-white">Flexible office space means growing your team.</h2>
              <p class="card-description">Rather than worrying about switching offices every couple years, you can instead stay in the same location and grow-up from your shared coworking space to an office that takes up an entire floor.</p>
              <div class="author">
                <img src="https://demos.creative-tim.com/material-kit-pro/assets/img/team-4.jpg"
                 alt="..." class="avatar mr-2" loading="lazy" />
                <div class="name ms-2">
                  <span>Mathew Glock</span>
                  <div class="stats">
                    <small>Marketing Manager</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="pagination pagination-primary mt-4 ml-2">
          <li class="page-item">
            <a class="page-link" href="javascript:;" aria-label="Previous">
              <span aria-hidden="true"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="javascript:;">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="javascript:;">2</a>
          </li>
          <li class="page-item active">
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
      <div class="col-lg-4 ml-auto">
        <div class="pt-1 pb-5 position-sticky top-1 mt-lg-8 mt-5">
          <h4>Newsletter</h4>
          <p>Get access to subscriber exclusive deals and be the first who gets informed about fresh sales.</p>
          <div class="my-3">
            <div class="input-group input-group-outline mb-sm-0 mb-2">
              <label class="form-label">Email email...</label>
              <input type="email" class="form-control" />
            </div>
          </div>
          <button type="button" class="btn bg-gradient-primary">Subscribe</button>
          <h4 class="mt-5">Activity</h4>
          <a href="javascript::">
            <div class="card justify-content-center mb-3">
              <div class="card-body p-3">
                <h6 class="mb-0">Top 50 Tips for Creative Tim</h6>
                <p class="mb-0 text-body">Mar 08, 2020</p>
              </div>
              <div class="position-absolute end-0 me-3 ">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </a>
          <a href="javascript::">
            <div class="card justify-content-center mb-3">
              <div class="card-body p-3">
                <h6 class="mb-0">Best ways to avoid the Burnout</h6>
                <p class="mb-0 text-body">Aug 11, 2020</p>
              </div>
              <div class="position-absolute end-0 me-3 ">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </a>
          <a href="javascript::">
            <div class="card justify-content-center mb-3">
              <div class="card-body p-3">
                <h6 class="mb-0">Fascinating tactics to help your Business</h6>
                <p class="mb-0 text-body">Jan 07, 2021</p>
              </div>
              <div class="position-absolute end-0 me-3 ">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </a>
          <h4 class="mt-5">Top Stories</h4>
          <div class="card card-plain card-blog mt-4">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-image position-relative border-radius-lg">
                  <div class="blur-shadow-image">
                    <img class="img border-radius-lg" 
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="curved11" loading="lazy" />
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-8 my-sm-auto mt-3">
                <h5>
                  <a href="javascript:;" class="text-dark font-weight-normal">MateLabs mixes machine learning</a>
                </h5>
              </div>
            </div>
          </div>
          <div class="card card-plain card-blog mt-4">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-image position-relative border-radius-lg">
                  <div class="blur-shadow-image">
                    <img class="img border-radius-lg"
                     src="https://images.unsplash.com/photo-1599639932525-213272ff954b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1879&q=80" alt="curved9" loading="lazy" />
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-8 my-sm-auto mt-3">
                <h5>
                  <a href="javascript:;" class="text-dark font-weight-normal">Mixes machine learning</a>
                </h5>
              </div>
            </div>
          </div>
          <div class="card card-plain card-blog mt-4">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-image position-relative border-radius-lg">
                  <div class="blur-shadow-image">
                    <img class="img border-radius-lg" 
                    src="https://images.unsplash.com/photo-1622480914645-8fa9b36178a5?i
                    xid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto
                    =format&fit=crop&w=1950&q=80" alt="curved8" loading="lazy" />
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-8 my-sm-auto mt-3">
                <h5>
                  <a href="javascript:;" class="text-dark font-weight-normal">MateLabs mixes machine learning</a>
                </h5>
              </div>
            </div>
          </div>
          <h4 class="mt-5 mb-4">Tags</h4>
          <span class="badge bg-light text-dark">Support</span>
          <span class="badge bg-light text-dark">Business</span>
          <span class="badge bg-light text-dark">Analytics</span>
          <span class="badge bg-light text-dark">Tutorials</span>
          <span class="badge bg-light text-dark mt-2">Sponsorships</span>
        </div>
      </div>
      
    </div>
  </div>
        </>
    )
}
export default BlogPost;