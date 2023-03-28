/** @format */

import React, { useState, useEffect, useRef } from "react";
import { getFundsRecevied } from "../../repo/mywallet";
import Dashboardheader from "../Dashboard/dashboardheader";
// import { Table, Tag, Button, Input, Space } from "antd";
// import Highlighter from "react-highlight-words";
// import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import Paginate from "../paginate/paginate";
function Fundsrecieved() {
  const [F, setF] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsperPage, setPostsperPage] = useState(5);
  const [searchText, setSearchText] = useState("");
  const getSponserTeamByUser = async () => {
    let userid = localStorage.getItem("user_id");
    let data = await getFundsRecevied(userid);
    setF(data.data.payload);
  };

  useEffect(() => {
    getSponserTeamByUser();
  }, []);

  const indexOfLastPost = currentPage * postsperPage;
  const indexOfFirstPost = indexOfLastPost - postsperPage;

  let currentPosts = [];
  if (searchText) {
    currentPosts =
      F &&
      F.filter(
        (name) =>
          name.TransactionId === searchText ||
          name.user_id === searchText ||
          name.userName === searchText
      ).slice(indexOfFirstPost, indexOfLastPost);
  } else {
    currentPosts = F && F.slice(indexOfFirstPost, indexOfLastPost);
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
    if (currentPage !== Math.ceil((F && F.length) / postsperPage)) {
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
  //   F &&
  //   F.map((item, i) => {
  //     return {
  //       sno: i + 1,
  //       // doj: moment(item.createdAt).format("DD/MM/YYYY"),
  //       transaction_number: item.TransactionId,
  //       sender_id: item.user_id,
  //       sender_name: item.userName,
  //       amount_recieved: item.Amount,
  //       Status: item.status
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
  //     title: "Transaction Number",
  //     dataIndex: "transaction_number",
  //     key: "transaction_number",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("transaction_number"),
  //   },
  //   {
  //     title: "Sender User Id",
  //     dataIndex: "sender_id",
  //     key: "sender_id",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("sender_id"),
  //   },
  //   {
  //     title: "Sender User Name",
  //     dataIndex: "sender_name",
  //     key: "sender_name",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("sender_name"),
  //   },

  //   {
  //     title: "Amount Recieved",
  //     dataIndex: "amount_recieved",
  //     key: "amount_recieved",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("amount_recieved"),
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "Status",
  //     key: "Status",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("Status"),
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
                  <h3>Fund Recieved</h3>
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
                        <th>Transaction No</th>
                        <th>Sender User Id</th>
                        <th>Sender User Name</th>
                        <th>Amount Recieved</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentPosts &&
                        currentPosts.map((item, i) => {
                          return (
                            <tr>
                              <td>{i + 1}</td>
                              <td className="text-sm">{item.TransactionId}</td>
                              <td className="text-sm">{item.user_id}</td>
                              <td className="text-sm">{item.userName}</td>
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
                                    case "available":
                                      return (
                                        <span class="badge badge-info badge-sm">
                                          Available
                                        </span>
                                      );
                                  }
                                })()}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                <Paginate
                  postsPerPage={postsperPage}
                  totalPosts={F && F.length}
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

export default Fundsrecieved;
