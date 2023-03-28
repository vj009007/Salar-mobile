import React, { useState } from "react";
const Ethics = () => {
  return (
    <>
      <header class="bg-gradient-dark">
        <div
          class="page-header min-vh-75"
          style={{
            backgroundImage:
              "url('https://assets.kpmg.com/content/dam/kpmg/xx/images/2018/05/smiling-business-woman-in-focus-having-meeting-with-three-people-in-office.jpg/jcr:content/renditions/original')",
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
                {/* <button type="submit" class="btn bg-white text-dark">Create Account</button> */}
                {/* <h6 class="text-white mb-2 mt-5">Find us on</h6>
                                <div class="d-flex justify-content-center">
                                    <Link to="javascript:;"><i class="fab fa-facebook text-lg text-white me-4" aria-hidden="true"></i></Link>
                                    <Link to="javascript:;"><i class="fab fa-instagram text-lg text-white me-4" aria-hidden="true"></i></Link>
                                    <Link to="javascript:;"><i class="fab fa-twitter text-lg text-white me-4" aria-hidden="true"></i></Link>
                                    <Link to="javascript:;"><i class="fab fa-google-plus text-lg text-white" aria-hidden="true"></i></Link>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
        <section className="py-lg-7 py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="row justify-content-start">
                  <div className="col-md-12">
                    <div className="info" style={{ marginTop: "-210px" }}>
                      <h2>Fully integrated</h2>
                      <p>
                        We get insulted by others, lose trust for those We get
                        back freezes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-12 col-md-6 mb-lg-0 mb-5" style={{textAlign:"center"}}>
                <div class="card shadow-lg">
                  <div class="card-header mt-n4 mx-3 p-0 bg-transparent position-relative z-index-2">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="https://images.unsplash.com/photo-1546215364-12f3fff5d578?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                        alt="img-blur-shadow"
                        class="img-fluid shadow border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      class="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(&quot;https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80&quot;)",
                      }}
                    ></div>
                  </div>
                  <div class="card-body text-center bg-white border-radius-lg p-3 pt-0"></div>
                </div>
                <button
                  type="button"
                  className="btn bg-gradient-info btn-sm mb-0 mt-3"
                  
                >
                 Download
                </button>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
};
export default Ethics;
