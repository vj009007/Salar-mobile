import React from "react";

const Forgotpassword = () => {
  return (
    <div>
      <div
        className="page-header min-vh-100"
        style={{ backgroundImage: "url('images/')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5 col-md-6 d-flex flex-column">
              <div className="card card-plain">
                <div className="card-header pb-0 text-start">
                  <h3 className="font-weight-bolder text-primary text-gradient">
                    Forgot Password
                  </h3>
                  <p
                    className="mb-0"
                    style={{ fontWeight: "600", color: "black" }}
                  >
                    You will receive an Sms / e-mail
                  </p>
                </div>
                <div className="card-body" style={{ backgroundColor: "white" }}>
                  <form role="form" className="text-start">
                    <label style={{ fontWeight: "600", color: "black" }}>
                      Enter your registered Seller ID / e-mail
                    </label>
                    <div className="mb-3 input-group input-group-outline">
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Seller ID / e-mail"
                        required
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="button"
                        className="btn bg-gradient-dark w-100 mt-4 mb-0"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
