/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getAllSubCategorys } from "../../ApiData/AllapiData";
const Category = () => {
  console.log(localStorage.getItem("catId"));
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getAllSubCategorysC = async () => {
      try {
        //  const authToken = localStorage.getItem("authToken");

        const responseJson = await getAllSubCategorys();
        setCategory(responseJson.data);
      } catch (err) {
        // message.error("Server error");
      }
    };
    getAllSubCategorysC();
  }, [category]);

  const editcategory = cat => {
    console.log(cat);
    localStorage.setItem("catId", cat._id);
    navigate("/filter");
  };

  return (
    <>
      <header>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div
                class="page-header min-vh-75"
                style={{
                  backgroundImage:
                    "url('https://demos.creative-tim.com/material-kit-pro/assets/img/bg10.jpg')",
                }}
                loading="lazy"
              >
                <span class="mask bg-gradient-dark"></span>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 my-auto">
                      <h4 class="text-white mb-0 fadeIn1 fadeInBottom">
                        Discover Stories
                      </h4>
                      <h1 class="text-white fadeIn2 fadeInBottom">
                        A Place for Entrepreneurs to Share
                      </h1>
                      <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">
                        Wealth creation is an evolutionarily recent positive-sum
                        game. Status is an old zero-sum game. Those attacking
                        wealth creation are often just seeking status.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div
                class="page-header min-vh-75"
                style={{ backgroundImage: "url('images/stay-home.jpeg')" }}
                loading="lazy"
              >
                <span class="mask bg-gradient-dark"></span>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 my-auto">
                      <h4 class="text-white mb-0 fadeIn1 fadeInBottom">
                        Our Team
                      </h4>
                      <h1 class="text-white fadeIn2 fadeInBottom">
                        Work with the best
                      </h1>
                      <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">
                        Free people make free choices. Free choices mean you get
                        unequal outcomes. You can have freedom, or you can have
                        equal outcomes. You can’t have both.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div
                class="page-header min-vh-75"
                style={{ backgroundImage: "url('images/masala.jpeg')" }}
                loading="lazy"
              >
                <span class="mask bg-gradient-dark"></span>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6 my-auto">
                      <h4 class="text-white mb-0 fadeIn1 fadeInBottom">
                        Office Places
                      </h4>
                      <h1 class="text-white fadeIn2 fadeInBottom">
                        Working on Wallstreet is Not So Easy
                      </h1>
                      <p class="lead text-white opacity-8 fadeIn3 fadeInBottom">
                        You’re spending time to save money when you should be
                        spending money to save time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="min-vh-75 position-absolute w-100 top-0">
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon position-absolute bottom-50"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon position-absolute bottom-50"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </header>
      <section>
        <div class="container-fluid">
          <div class="row row-cols-md-5 row-cols-2 mt-n5 blur border-radius-xl shadow-blur position-relative overflow-hidden">
            {category.map(cat => (
              <div
                onClick={() => editcategory(cat)}
                class="col position-relative my-auto"
              >
                <div class="p-3 text-center" style={{ cursor: "pointer" }}>
                  <img
                    src={cat.image}
                    alt="Cat"
                    class="img-fluid d-block mx-auto"
                  />
                  <h5 class="mt-3 mb-1">{cat.name}</h5>
                  <p class="mb-0">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Category;
