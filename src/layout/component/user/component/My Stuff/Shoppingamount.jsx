/** @format */

import React, { useState, useEffect, useRef } from "react";
import { getShoppingamount } from "../../repo/myStuff";
import Dashboardheader from "../Dashboard/dashboardheader";
// import { Table, Tag, Button, Input, Space } from "antd";
// import Highlighter from "react-highlight-words";
// import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import Paginate from "../paginate/paginate";
function Shoppingamount() {
  const [shoppingData, setShoppingData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsperPage, setPostsperPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const getSponserTeamByUser = async () => {
    let userid = localStorage.getItem("user_id");
    let data = await getShoppingamount(userid);
    setShoppingData(data.data.payload);
  };

  useEffect(() => {
    getSponserTeamByUser();
  }, []);

  const indexOfLastPost = currentPage * postsperPage;
  const indexOfFirstPost = indexOfLastPost - postsperPage;

  let currentPosts = [];
  if (searchText) {
    currentPosts =
      shoppingData &&
      shoppingData
        .filter(
          (name) =>
            name.orderId === searchText || name.productName === searchText
        )
        .slice(indexOfFirstPost, indexOfLastPost);
  } else {
    currentPosts =
      shoppingData && shoppingData.slice(indexOfFirstPost, indexOfLastPost);
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
    if (
      currentPage !==
      Math.ceil((shoppingData && shoppingData.length) / postsperPage)
    ) {
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
  //   shoppingData &&
  //   shoppingData.map((item, i) => {
  //     return {
  //       sno: i + 1,
  //       dop: moment(item.createdAt).format("DD/MM/YYYY"),
  //       order_id: item.orderId,
  //       product_name: item.productName,
  //       gen_code: item.genCode,
  //       commission_name: item.commissionName,
  //       commision_type: item.commissionType,
  //       commision_level: item.commissionLevel,
  //       shopping_amount: item.shoppingAmount,
  //       level_commissionearned: item.levelCommissionEarned,
  //       required_members: item.requiredMembers,
  //       joined_members: item.joinedMembers,
  //       membership_status: item.membershipStatus,
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
  //     title: "Date of Purchase", width: "200px",
  //     dataIndex: "dop",
  //     key: "dop",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("dop"),
  //   },
  //   {
  //     title: "Order Id", width: "200px",
  //     dataIndex: "order_id",
  //     key: "order_id",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("order_id"),
  //   },
  //   {
  //     title: "Product Name", width: "250px",
  //     dataIndex: "product_name",
  //     key: "product_name",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("product_name"),
  //   },
  //   {
  //     title: "Gen Code", width: "200px",
  //     dataIndex: "gen_code",
  //     key: "gen_code",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("gen_code"),
  //   },
  //   {
  //     title: "Commission Name", width: "250px",
  //     dataIndex: "commission_name",
  //     key: "commission_name",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("commission_name"),
  //   },
  //   {
  //     title: "Commision Type", width: "250px",
  //     dataIndex: "commision_type",
  //     key: "commision_type",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("commision_type"),
  //   },
  //   {
  //     title: "Commission Level", width: "250px",
  //     dataIndex: "commision_level",
  //     key: "commision_level",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("commision_level"),
  //   },
  //   {
  //     title: "Shopping Amount", width: "250px",
  //     dataIndex: "shopping_amount",
  //     key: "shopping_amount",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("shopping_amount"),
  //   },
  //   {
  //     title: "Level Commission Earned", width: "250px",
  //     dataIndex: "level_commissionearned",
  //     key: "level_commissionearned",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("level_commissionearned"),
  //   },
  //   {
  //     title: "Required Members", width: "250px",
  //     dataIndex: "required_members",
  //     key: "required_members",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("required_members"),
  //   },
  //   {
  //     title: "Joined Members", width: "250px",
  //     dataIndex: "joined_members",
  //     key: "joined_members",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("joined_members"),
  //   },
  //   {
  //     title: "Membership Status", width: "250px",
  //     dataIndex: "membership_status",
  //     key: "membership_status",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("membership_status"),
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
                  <h3>Shopping Amount</h3>
                  {/* <div class="ms-auto my-auto mt-lg-0 mt-4">
                    <div class="ms-auto my-auto">
                      <button
                        class="btn btn bg-gradient-info btn-sm export mb-0 mt-sm-0 mt-1"
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
                    class="btn color btn-md export mb-0 mt-sm-0 mt-1"
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
                      style={{ textAlign: "center", color: "black" }}
                    >
                      <tr>
                        <th>S No</th>
                        <th>Date of Purchase</th>
                        <th>Order Id</th>
                        <th>Product Name</th>
                        <th>Gen Code</th>
                        <th>Commission Name</th>
                        <th>Commission Type</th>
                        <th>Commission Level</th>
                        <th>Shopping Amount</th>
                        <th>Level Commission Earned</th>
                        <th>Required Members</th>
                        <th>Joined Members</th>
                        <th>Membership Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentPosts &&
                        currentPosts.map((item, i) => {
                          return (
                            <tr>
                              <td class="text-sm">{i + 1}</td>
                              <td class="text-sm">{item.dataOfPurchase}</td>
                              <td class="text-sm">{item.orderId}</td>
                              <td class="text-sm">{item.productName}</td>
                              <td class="text-sm">{item.genCode}</td>
                              <td class="text-sm">
                                {(() => {
                                  switch (item.commissionName) {
                                    case "noraml":
                                      return (
                                        <span class="badge badge-info badge-sm">
                                          noraml
                                        </span>
                                      );
                                    case "auto":
                                      return (
                                        <span class="badge badge-success badge-sm">
                                          Auto
                                        </span>
                                      );
                                  }
                                })()}
                              </td>
                              <td class="text-sm">
                                {(() => {
                                  switch (item.commissionType) {
                                    case "Normal":
                                      return (
                                        <span class="badge badge-info badge-sm">
                                          noraml
                                        </span>
                                      );
                                    case "auto":
                                      return (
                                        <span class="badge badge-success badge-sm">
                                          Auto
                                        </span>
                                      );
                                  }
                                })()}
                              </td>
                              <td class="text-sm">{item.commissionLevel}</td>
                              <td class="text-sm">{item.shoppingAmount}</td>
                              <td class="text-sm">
                                {item.levelCommissionEarned}
                              </td>
                              <td class="text-sm">{item.requiredMembers}</td>
                              <td class="text-sm">{item.joinedMembers}</td>
                              <td class="text-sm">
                                {(() => {
                                  switch (item.membershipStatus) {
                                    case "Inactive":
                                      return (
                                        <span class="badge badge-danger badge-sm">
                                          Inactive
                                        </span>
                                      );
                                    case "auto":
                                      return (
                                        <span class="badge badge-success badge-sm">
                                          Auto
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
                  totalPosts={shoppingData && shoppingData.length}
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

export default Shoppingamount;
