/** @format */

import React, { useState, useEffect, useRef } from "react";
import { getWalletHistory } from "../../repo/mywallet";
import Dashboardheader from "../Dashboard/dashboardheader";
import { Table, Tag, Button, Input, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import Paginate from "../paginate/paginate";
// import moment from "moment/moment";
function Withdrawhistory() {
  const [W, setW] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsperPage, setPostsperPage] = useState(5);
  const [searchText, setSearchText] = useState("");
  const getSponserTeamByUser = async () => {
    let userid = localStorage.getItem("user_id");
    let data = await getWalletHistory(userid);
    setW(data.data.payload);
  };

  useEffect(() => {
    getSponserTeamByUser();
  }, []);

  const indexOfLastPost = currentPage * postsperPage;
  const indexOfFirstPost = indexOfLastPost - postsperPage;

  let currentPosts = [];
  if (searchText) {
    currentPosts =
      W &&
      W.filter(
        (name) =>
          name.order_no === searchText ||
          name.order_details === searchText ||
          name.chat === searchText ||
          name.status === searchText
      ).slice(indexOfFirstPost, indexOfLastPost);
  } else {
    currentPosts = W && W.slice(indexOfFirstPost, indexOfLastPost);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil((W && W.length) / postsperPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  // const handleSearch = (selectedKeys, confirm, dataIndex) => {
  //   confirm();
  //   setSearchText(selectedKeys[0]);
  //   setSearchedColumn(dataIndex);
  // };

  // const handleReset = clearFilters => {
  //   clearFilters();
  //   setSearchText("");
  // };

  // const getColumnSearchProps = dataIndex => ({
  //   filterDropdown: ({
  //     setSelectedKeys,
  //     selectedKeys,
  //     confirm,
  //     clearFilters,
  //     close,
  //   }) => (
  //     <div
  //       style={{
  //         padding: 8,
  //       }}
  //       onKeyDown={e => e.stopPropagation()}
  //     >
  //       <Input
  //         ref={searchInput}
  //         placeholder={`Search ${dataIndex}`}
  //         value={selectedKeys[0]}
  //         onChange={e =>
  //           setSelectedKeys(e.target.value ? [e.target.value] : [])
  //         }
  //         onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //         style={{
  //           marginBottom: 8,
  //           display: "block",
  //         }}
  //       />
  //       <Space>
  //         <Button
  //           type="primary"
  //           onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //           icon={<SearchOutlined />}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Search
  //         </Button>
  //         <Button
  //           onClick={() => clearFilters && handleReset(clearFilters)}
  //           size="small"
  //           style={{
  //             width: 90,
  //           }}
  //         >
  //           Reset
  //         </Button>
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             confirm({
  //               closeDropdown: false,
  //             });
  //             setSearchText(selectedKeys[0]);
  //             setSearchedColumn(dataIndex);
  //           }}
  //         >
  //           Filter
  //         </Button>
  //         <Button
  //           type="link"
  //           size="small"
  //           onClick={() => {
  //             close();
  //           }}
  //         >
  //           close
  //         </Button>
  //       </Space>
  //     </div>
  //   ),
  //   filterIcon: filtered => (
  //     <SearchOutlined
  //       style={{
  //         color: filtered ? "#1890ff" : undefined,
  //       }}
  //     />
  //   ),
  //   onFilter: (value, record) => {
  //     let dtaa =
  //       record[dataIndex] &&
  //       record[dataIndex]
  //         .toString()
  //         .toLowerCase()
  //         .includes(value.toLowerCase());
  //     return dtaa;
  //   },
  //   onFilterDropdownOpenChange: visible => {
  //     if (visible) {
  //       setTimeout(() => searchInput.current.select(), 100);
  //     }
  //   },
  //   render: text =>
  //     searchedColumn === dataIndex ? (
  //       <Highlighter
  //         highlightStyle={{
  //           backgroundColor: "#ffc069",
  //           padding: 0,
  //         }}
  //         searchWords={[searchText]}
  //         autoEscape
  //         textToHighlight={text ? text.toString() : ""}
  //       />
  //     ) : (
  //       text
  //     ),
  // });

  // const dataSource =
  //   W &&
  //   W.map((item, i) => {
  //     return {
  //       sno: i + 1,
  //       date: moment(item.createdAt).format("DD/MM/YYYY"),
  //       wtransaction_no: item.TransactionId,
  //       commission_type: item.commission_type,
  //       commission_name: item.commission_name,
  //       requested_amount: item.Amount,
  //       status: item.status,
  //       transferred_amount: item.Amount,
  //       download_reciept: item.download_reciept,
  //     };
  //   });

  // const columns = [
  //   {
  //     title: "S No",
  //     dataIndex: "sno",
  //     key: "sno",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("sno"),
  //   },
  //   {
  //     title: "Date", width: "120px",
  //     dataIndex: "date",
  //     key: "date",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("date"),
  //   },
  //   {
  //     title: "WTransaction No", width: "120px",
  //     dataIndex: "wtransaction_no",
  //     key: "wtransaction_no",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("wtransaction_no"),
  //   },
  //   {
  //     title: "Commission Type", width: "120px",
  //     dataIndex: "commission_type",
  //     key: "commission_type",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("commission_type"),
  //   },

  //   {
  //     title: "Commission Name", width: "120px",
  //     dataIndex: "commission_name",
  //     key: "commission_name",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("commission_name"),
  //   },
  //   {
  //     title: "Requested Amount", width: "120px",
  //     dataIndex: "requested_amount",
  //     key: "requested_amount",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("requested_amount"),
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "status",
  //     key: "status",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("status"),
  //   },
  //   {
  //     title: "Transferred Amount", width: "120px",
  //     dataIndex: "transferred_amount",
  //     key: "transferred_amount",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("transferred_amount"),
  //   },
  //   {
  //     title: "Download Reciept",
  //     dataIndex: "download_reciept",
  //     key: "download_reciept",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("download_reciept"),
  //   },
  // ];
  return (
    <div className="myAccounts">
      <Dashboardheader />
      <div class="container-fluid py-4">
        <br></br>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header pb-0">
                <div class="d-lg-flex">
                  <h3>Withdrawl History</h3>
                  {/* <div class="ms-auto my-auto mt-lg-0 mt-4">
                    <div class="ms-auto my-auto">
                      <button
                        class="btn btn bg-gradient-info  btn-sm export mb-0 mt-sm-0 mt-1"
                        data-type="csv"
                        type="button"
                        name="button"
                      >
                        Export
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
              <br></br>
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-md-1">
                  <select
                    class="input form-select"
                    aria-label="Default select example"
                    onChange={(e) => setPostsperPage(e.target.value)}
                  >
                    <option selected>0</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <input
                    class="date form-control"
                    type="date"
                    value="2018-11-23"
                    id="example-date-input"
                  ></input>
                </div>
                <div className="col-md-3">
                  <input
                    class="date form-control"
                    type="date"
                    value="2018-11-23"
                    id="example-date-input"
                  ></input>
                </div>
                <div className="col-md-2">
                  <button
                    class="btn color  btn-md export mb-0 mt-sm-0 mt-1"
                    data-type="csv"
                    type="button"
                    name="button"
                  >
                    Submit
                  </button>
                </div>
                <div className="col-md-2">
                  <input
                    class="for form-control"
                    type="search"
                    placeholder="Search....."
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
              </div>

              <div class="card-body px-0 pb-0">
                <div class="container table-responsive">
                  <table
                    class=" table table-bordered table table-flush"
                    id="products-list"
                  >
                    <thead
                      class="thead-light"
                      style={{ color: "black", textAlign: "center" }}
                    >
                      <tr>
                        <th>S No</th>
                        <th>Date</th>
                        <th>W.Transaction No</th>
                        <th>Commission type</th>
                        <th>Commission Name</th>
                        <th>Requested Amount</th>
                        <th>Status</th>
                        <th>Transferred Amount</th>
                        <th>Download Reciept</th>
                      </tr>
                    </thead>
                    <tbody>
                      {W &&
                        W.map((item, i) => {
                          return (
                            <tr>
                              <td>{i + 1}</td>
                              <td className="text-sm">
                                {(() => {
                                  let today = moment(item.createdAt)
                                    .utcOffset(60)
                                    .format("YYYY-MM-DD");
                                  return today;
                                })()}
                              </td>
                              <td className="text-sm">{item.TransactionId}</td>
                              <td className="text-sm">
                                {item.commission_type}
                              </td>
                              <td className="text-sm">
                                {item.commission_name}
                              </td>
                              <td className="text-sm">{item.Amount}</td>
                              <td className="text-sm">
                                {(() => {
                                  switch (item.status) {
                                    case "pending":
                                      return (
                                        <span class="badge badge-danger badge-sm">
                                          Pending
                                        </span>
                                      );
                                    case "completed":
                                      return (
                                        <span class="badge badge-success badge-sm">
                                          Available
                                        </span>
                                      );
                                    case "cancalled":
                                      return (
                                        <span class="badge badge-danger badge-sm">
                                          Cancalled
                                        </span>
                                      );
                                  }
                                })()}
                              </td>
                              <td className="text-sm">{item.Amount}</td>
                              <td
                                class="text-sm"
                                style={{ textAlign: "center" }}
                              >
                                <a
                                  href="/user/Payout"
                                  data-bs-toggle="tooltip"
                                  data-bs-original-title="Delete product"
                                >
                                  <i class="fas fa-download text-info "></i>
                                </a>
                              </td>
                            </tr>
                          );
                        })}

                      <tr></tr>
                    </tbody>
                  </table>
                </div>
                <Paginate
                  postsPerPage={postsperPage}
                  totalPosts={W && W.length}
                  paginate={paginate}
                  previousPage={previousPage}
                  nextPage={nextPage}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <Table dataSource={dataSource} columns={columns} /> */}
      </div>
    </div>
  );
}

export default Withdrawhistory;
