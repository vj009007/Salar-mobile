/** @format */

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/img/salarlogos.png";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  InstapaperShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  InstapaperIcon,
  TelegramIcon,
  LinkedinIcon,
} from "react-share";
function Rightnav(props) {
  const handleClick = () => {
    //console.log(e);
    props.handleClicks3("close");
    // 👇️ take parameter passed from Child component
    //setCount(current => current + num);
  };

  return (
    <div>
      <div className="mainRightNow">
        <div className="card shadow-lg blur">
          <div className="card-header pb-0 pt-3  bg-transparent ">
            <div className="float-start">
              <div className="row">
                <div className="col-3">
                  <button
                    onClick={() => handleClick()}
                    className="btn btn-link text-dark p-0 fixed-plugin-close-button"
                  >
                    <i className="fa fa-close" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="col-6">
                  <img className="imges" src="../images/salarlogo.jpeg" />{" "}
                  <h3
                    className="fontRightWe mb-0"
                    style={{ textAlign: "center", marginLeft: "30px" }}
                  >
                    Welcome{" "}
                  </h3>
                </div>
                <div className="col-4"></div>
              </div>
            </div>
            {/* <div className="float-end mt-4">
<button onClick={() => handleClick()} className="btn btn-link text-dark p-0 fixed-plugin-close-button">
<i className="fa fa-close" aria-hidden="true"></i>
</button>
</div> */}
          </div>
          <hr className="horizontal dark my-1" />
          <div className="card-body pt-sm-3 pt-0">
            <div class="col-lg-12 col-sm-6">
              <h5>Siddhu</h5>
              <div class="card mt-2">
                <div class="card-body p-3">
                  <div className="col-md-12 mx-auto">
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner border-radius-lg">
                        <div className="carousel-item active border-radius-lg">
                          <img
                            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item border-radius-lg">
                          <img
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item border-radius-lg">
                          <img
                            src="https://images.unsplash.com/photo-1552793494-111afe03d0ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="mt-2"></div>
                      <p class="text-black mb-3">
                        Wealth creation is an evolutionarily recent positive-sum
                        game. It is all about who take the opportunity first.
                      </p>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2"></div>

            <h3 style={{ textAlign: "center", color: "cadetblue" }}>
              Testimonials
              <img
                alt="Image placeholder"
                className="p-1 rounded-circle "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/The_Impact_Of_Wikipedia.webm/1200px--The_Impact_Of_Wikipedia.webm.jpg"
                style={{
                  height: "50px",
                  marginLeft: "5px",
                  color: "cadetblue",
                  marginBottom: "5px",
                }}
              />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                style={{
                  height: "30px",
                  marginLeft: "10px",
                  color: "cadetblue",
                  marginBottom: "5px",
                }}
              >
                <path d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z" />
              </svg> */}
            </h3>
            <div className="row mt-2"></div>
            <div class="col-lg-12">
              <div class="card p-3">
                <div class="overflow-hidden position-relative border-radius-lg bg-cover h-100">
                  <img
                    src="../images/test.jpg"
                    alt=""
                    style={{ height: "200px" }}
                  />
                </div>
                <div class="card-body position-relative z-index-1 h-100 p-3">
                  <h6 class="text-black font-weight-bolder mb-3">Hey John!</h6>
                  <p class="text-black mb-3">
                    Wealth creation is an evolutionarily recent positive-sum
                    game. It is all about who take the opportunity first.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <h6>Get Connected Us on Social Media</h6>
              <div className="col-2">
                {" "}
                <a href="javascript:;" class="avatar avatar-md rounded-circle ">
                  <FacebookIcon size={45} round={true} />
                </a>
              </div>

              <div className="col-2">
                <a href="javascript:;" class="avatar avatar-md rounded-circle ">
                  <TwitterIcon size={45} round={true} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightnav;
