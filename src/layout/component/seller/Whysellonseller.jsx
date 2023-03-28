import React from "react";

const Whysellonseller = () => {
  return (
    <div>
      <header class="bg-gradient-dark">
        <div
          class="page-header min-vh-85"
          style={{
            backgroundImage:
              "url('https://blog.shift4shop.com/hubfs/iStock-1051616786.jpg')",
          }}
          loading="lazy"
        >
          <span class="mask bg-gradient-dark opacity-3"></span>
          <div class="container">
            <div class="row justify-content-left">
              <div class="col-lg-4 text-left ">
                <h1 class="text-white">
                  <b>start selling</b>{" "}
                  <span class="text-white" id="typed">
                    <b>on SALAR</b>
                  </span>
                </h1>
                <div id="typed-strings" style={{ display: "none" }}>
                  <h1>team</h1>
                  <h1>design</h1>
                  <h1>tool</h1>
                </div>
                <p class="lead mb-4 text-white opacity-6">
                  <b>
                    {" "}
                    Salar was created to help businesses, no matter their size -
                    grow. Being from the region, SALAR is especially passionate
                    about helping local businesses thrive, we look forward to
                    helping you take your venture to the next level.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <h1>Why Sell on seller</h1>
    </div>
  );
};

export default Whysellonseller;
