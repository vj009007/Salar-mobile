/** @format */

import React, { useState, useEffect } from "react";
import { getmlmbyId } from "../../repo/mlm";
import Dashboardheader from "../Dashboard/dashboardheader";
import { Input, Space } from "antd";

import Tree from "react-d3-tree";
// import Tree from "./TreeData";
import "./tree.css";
function Geneology() {
  const [W, setW] = useState([]);
  const [R, setR] = useState([]);
  const { Search } = Input;
  useEffect(() => {
    (async () => {
      let userid = localStorage.getItem("user_id");
      let data = await getmlmbyId(userid);
      console.log(data.data);
      setW(data.data.result);
    })();
  }, []);

  const resultdata = async () => {};

  useEffect(() => {}, []);

  const test = {
    shape: "rect",
    shapeProps: {
      width: 0,
      height: 10,
      x: -20,
      y: 20,
      stroke: "#2F80ED",
    },
  };

  const NodeLabel = ({ className, nodeData }) => {
    return (
      <div
        className="myLabelComponentInSvg"
        style={{
          background: "#ffffff",
          height: "70px",
          borderTop: "2px solid #2F80ED",
          textAlign: "center",
          // position: "fixed",
          zIndex: "1000",
          // left: "-10px",
          boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
          padding: "5px 0",
          borderRadius: "5px",
        }}
      >
        {nodeData.name}
      </div>
    );
  };

  const AddRootUser = async () => {};

  const onSearch = value => console.log(value);
  return (
    <>
      <div className="myAccounts">
        <Dashboardheader />
        <div className="row mt-4">
          <div class="col-12 col-xl-12 mt-xl-0 mt-4">
            <div class="card h-100">
              <div className="row mt-4"></div>
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    enterButton
                  />
                </div>
              </div>
              <div class="card-header pb-0 p-3" style={{ height: "500px" }}>
                <h3 class="mb-0" style={{ textAlign: "center" }}>
                  Geneology
                </h3>
                <div className="row mt-4"></div>
                {/* <div className="col-12" style={{ textAlign: "center" }}>
                {" "}
                <a
                  href="javascript:;"
                  class="avatar avatar-xl rounded-circle border border-primary"
                >
                  <img
                    alt="Image placeholder"
                    class="p-1"
                    src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/team-1.jpg"
                  />
                </a>
              </div> */}
                <br />
                <br />

                <div className="tree">
                  {W && W.length ? (
                    <Tree
                      data={W}
                      nodeSvgShape={test}
                      pathFunc="step"
                      separation={{ siblings: 2, nonSiblings: 2 }}
                      orientation="vertical"
                      translate={{ x: 700, y: 100 }}
                      allowForeignObjects={true}
                      nodeLabelComponent={{
                        render: <NodeLabel className="myLabelComponentInSvg" />,
                        foreignObjectWrapper: {
                          width: 220,
                          height: 200,
                          y: -50,
                          x: -100,
                        },
                      }}
                      initialDepth={0.02}
                    />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button className="btn btn-danger">
                        Click here To Add Root User
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Geneology;
