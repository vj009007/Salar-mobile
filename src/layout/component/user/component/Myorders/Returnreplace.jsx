/** @format */

import React, { useState, useEffect, useRef } from "react";
import Dashboardheader from "../Dashboard/dashboardheader";
import { getReturnbyId } from "../../repo/orders";
import { Table, Tag, Button, Input, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import Paginate from "../paginate/paginate";
function Returnreplace() {
  const [a, setA] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsperPage, setPostsperPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const getSponserTeamByUser = async () => {
    let userid = localStorage.getItem("user_id");
    let data = await getReturnbyId(userid);
    setA(data.data.payload);
  };

  useEffect(() => {
    getSponserTeamByUser();
  }, []);

  const indexOfLastPost = currentPage * postsperPage;
  const indexOfFirstPost = indexOfLastPost - postsperPage;

  let currentPosts = [];
  if (searchText) {
    currentPosts =
      a &&
      a
        .filter(
          (name) =>
            name.order_no === searchText ||
            name.product_details === searchText ||
            name.new_orderNo === searchText
        )
        .slice(indexOfFirstPost, indexOfLastPost);
  } else {
    currentPosts = a && a.slice(indexOfFirstPost, indexOfLastPost);
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
    if (currentPage !== Math.ceil((a && a.length) / postsperPage)) {
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
  //   a &&
  //   a.map((item, i) => {
  //     return {
  //       sno: i + 1,
  //       date: moment(item.createdAt).format("DD/MM/YYYY"),
  //       order_no: item.order_id,
  //       product_name: item.product_details,
  //       qty: item.quantity,
  //       grand_total: item.unit_price,
  //       payment_type: item.payment_method,
  //       delivery_status: item.status,
  //       track_order: item.track_order,
  //       reasonfor_return: item.return_reason,
  //       refundapprove_status: item.refundapprove_status,
  //       replacement_status: item.replacement_status,
  //       neworder_number: item.neworder_number,
  //       returnorder_status: item.returnorder_status,

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
  //     title: "Date",
  //     dataIndex: "date",
  //     key: "date",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("date"),
  //   },
  //   {
  //     title: "Order No",
  //     dataIndex: "order_no",
  //     key: "order_no",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("order_no"),
  //   },
  //   {
  //     title: "Product Name",
  //     dataIndex: "product_name",
  //     key: "product_name",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("product_name"),
  //   },
  //   {
  //     title: "Quantity",
  //     dataIndex: "qty",
  //     key: "qty",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("qty"),
  //   },
  //   {
  //     title: "Grand Total",
  //     dataIndex: "grand_total",
  //     key: "grand_total",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("grand_total"),
  //   },
  //   {
  //     title: "Payment Type",
  //     dataIndex: "payment_type",
  //     key: "payment_type",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("payment_type"),
  //   },
  //   {
  //     title: "Delivery Status",
  //     dataIndex: "delivery_status",
  //     key: "delivery_status",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("delivery_status"),
  //   },
  //   {
  //     title: "Track Order",
  //     dataIndex: "track_order",
  //     key: "track_order",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("track_order"),
  //   },
  //   {
  //     title: "Reason for Return",
  //     dataIndex: "reasonfor_return",
  //     key: "reasonfor_return",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("reasonfor_return"),
  //   },
  //   {
  //     title: "Refund Approve Status",
  //     dataIndex: "refundapprove_status",
  //     key: "refundapprove_status",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("refundapprove_status"),
  //   },
  //   {
  //     title: "Replacement Status",
  //     dataIndex: "replacement_status",
  //     key: "refund_status",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("refund_status"),
  //   },
  //   {
  //     title: "New Order Number",
  //     dataIndex: "neworder_number",
  //     key: "neworder_number",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("neworder_number"),
  //   },
  //   {
  //     title: "Return Order status",
  //     dataIndex: "returnorder_status",
  //     key: "neworder_number",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("neworder_number"),
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
                  <h3>Return & Replacement</h3>
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
                      class=""
                      style={{ color: "black", textAlign: "center" }}
                    >
                      <tr>
                        <th>S No</th>
                        <th>Date</th>
                        <th>Order No</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Grand Total</th>
                        <th>Payment Type</th>
                        <th>Delivery Status</th>
                        <th>Track Order</th>
                        <th>Reason for Return</th>
                        <th>Return Approve Status</th>
                        <th>Replacement Status</th>
                        <th>New Order No</th>
                        <th>Return Order status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentPosts &&
                        currentPosts.map((item, i) => {
                          return (
                            <tr>
                              <td>{i + 1}</td>
                              {moment(item.createdAt).format("DD/MM/YYYY")}
                              <td className="text-sm">{item.order_no}</td>
                              <td className="text-sm">
                                {item.product_details}
                              </td>
                              <td className="text-sm">{item.quantity}</td>
                              <td className="text-sm">{item.grand_total}</td>
                              <td className="text-sm">{item.payment_method}</td>
                              <td className="text-sm">{item.status}</td>
                              <td className="text-sm">{item.track_order}</td>
                              <td className="text-sm">{item.return_reason}</td>
                              <td className="text-sm">
                                {item.return_approvestatus}
                              </td>
                              <td className="text-sm">
                                {(() => {
                                  switch (item.refund_status) {
                                    case "pending":
                                      return (
                                        <span class="badge badge-danger badge-sm">
                                          Pending
                                        </span>
                                      );
                                    case "completed":
                                      return (
                                        <span class="badge badge-success badge-sm">
                                          Completed
                                        </span>
                                      );
                                    case "processing":
                                      return (
                                        <span class="badge badge-info badge-sm">
                                          Processing
                                        </span>
                                      );
                                    case "rejected":
                                      return (
                                        <span class="badge badge-danger badge-sm">
                                          Rejected
                                        </span>
                                      );
                                  }
                                })()}
                              </td>
                              <td className="text-sm">{item.new_orderNo}</td>
                              <td className="text-sm">
                                {item.returnOrder_status}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                <Paginate
                  postsPerPage={postsperPage}
                  totalPosts={a && a.length}
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

export default Returnreplace;
