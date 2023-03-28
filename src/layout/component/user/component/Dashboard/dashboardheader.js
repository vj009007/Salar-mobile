/** @format */

import React, { useState, useEffect } from "react";
import { getSponseruser } from "../../repo/dashboard";
// import { Link, useLocation } from "react-router-dom";
import { getUser, getSponserId } from "../../repo/user";
import "./Dashboard.css";
import moment from "moment";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  InstapaperShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  InstapaperIcon,
  Instagram,
} from "react-share";
export default function Dashboardheader() {
  const [copied, setCopied] = useState();
  const [sid, setSid] = useState();

  const getSpo = async () => {
    let spid = localStorage.getItem("registerId");
    let res = await getSponserId(spid);
    let maindata = res.data.data;

    if (maindata) {
      localStorage.setItem(
        "sponsor_name",
        maindata.sponsor_name && maindata.sponsor_name
          ? maindata.sponsor_name
          : null
      );
      localStorage.setItem(
        "sponsor_id",
        maindata.sponsor_id ? maindata.sponsor_id : null
      );
    } else {
      localStorage.setItem("sponsor_name", "");
      localStorage.setItem("sponsor_id", "");
    }

    setSid(maindata);
  };

  useEffect(() => {
    getSpo();
  }, []);

  var splink =
    window.location.origin +
    `/sponser_sign_up?id=${
      localStorage.getItem("registerId")
        ? localStorage.getItem("registerId")
        : null
    }`;
  return (
    <div className="container-fluid">
      <div class="page-header min-height-300 border-radius-xl mt-4">
        <img
          src="../images/Back.png"
          alt=""
          class="w-100 border-radius-lg shadow-sm"
        />
      </div>
      <div className="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden cd1 ">
        <div className="row gx-4 ">
          <div className="col-auto">
            <div className="col-3">
              {" "}
              <a
                href="javascript:;"
                className="avatar avatar-lg rounded-circle border border-info"
              >
                <img
                  alt="Image placeholder"
                  className="p-1"
                  src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                />
              </a>
            </div>
          </div>
          <div className="col-auto">
            <div className="h-100 nm1">
              <h5 className="mb-1 wr ">
                Name: {localStorage.getItem("fullname")}{" "}
              </h5>
            </div>
          </div>
          <div className="col-auto">
            <div className="h-100  ">
              <h5 className="mb-1"></h5>
            </div>
          </div>
          <div className="col-auto">
            <div className="h-100 nm2">
              <h5 className="mb-1 wr">
                Register Id: {localStorage.getItem("registerId")}
              </h5>
            </div>
          </div>
          <div className="col-auto">
            <div className="h-100 ">
              <h5 className="mb-1"></h5>
            </div>
          </div>
          <div className="col-auto ">
            <div className="h-100 nm3">
              <h5 className="mb-1 wr">
                DOJ :{moment(localStorage.getItem("doj")).format("DD/MM/YYYY")}
              </h5>
            </div>
          </div>
          <div className="col-auto ">
            <div className="h-100">
              <h5 className="mb-1 ">
                Sponsor ID :{localStorage.getItem("SId")}
              </h5>
            </div>
          </div>
          <div className="col-auto ">
            <div className="h-100">
              <h5 className="mb-1 ">
                Sponsor Name :
                {localStorage.getItem("sponsor_name") &&
                localStorage.getItem("sponsor_name")
                  ? localStorage.getItem("sponsor_name")
                  : null}
              </h5>
            </div>
          </div>
          <div className="col-auto ">
            <div className="h-100">
              <h5 className="mb-1"></h5>
            </div>
          </div>
          <div className="spc">
            <div className=" refer input-group mb-0 ">
              <input
                type="text"
                className="form-control input1"
                placeholder="Sponser Link"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={splink ? splink : ""}
              />
              <CopyToClipboard
                style={{ marginLeft: "2px" }}
                text={splink ? splink : ""}
                onCopy={() => setCopied({ copied: true })}
              >
                <button className="btn btn-outline-info mb-0 input2">
                  Copy
                </button>
              </CopyToClipboard>
            </div>
            {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
            <div>
              <FacebookShareButton
                style={{ marginLeft: "10px" }}
                url={`https://salar.in/sponser_sign_up?id=${
                  localStorage.getItem("registerId")
                    ? localStorage.getItem("registerId")
                    : null
                }`}
              >
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
            </div>

            <div>
              <WhatsappShareButton
                style={{ marginLeft: "10px" }}
                url={`https://salar.in/sponser_sign_up?id=${
                  localStorage.getItem("registerId")
                    ? localStorage.getItem("registerId")
                    : null
                }`}
              >
                <WhatsappIcon size={40} round={true} />
              </WhatsappShareButton>
            </div>

            {/* <InstapaperShareButton
              url={`https://salar.in/sponser_sign_up?id=${link}`}
            >
              <InstapaperIcon size={40} round={true} />
            </InstapaperShareButton> */}
            <TwitterShareButton
              style={{ marginLeft: "10px" }}
              url={`https://salar.in/sponser_sign_up?id=${
                localStorage.getItem("registerId")
                  ? localStorage.getItem("registerId")
                  : null
              }`}
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}
