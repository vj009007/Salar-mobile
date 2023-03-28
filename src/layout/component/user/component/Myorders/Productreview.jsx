/** @format */

import React, { useState, useEffect, useRef } from "react";
import Dashboardheader from "../Dashboard/dashboardheader";
import { getProductreview } from "../../repo/orders";
// import { Table, Tag, Button, Input, Space } from "antd";
// import Highlighter from "react-highlight-words";
// import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import Paginate from "../paginate/paginate";
function Productreview() {
  const [a, setA] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsperPage, setPostsperPage] = useState(5);
  const [searchText, setSearchText] = useState("");

  const getSponserTeamByUser = async () => {
    let userid = localStorage.getItem("user_id");
    let data = await getProductreview(userid);
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
            name.order_no === searchText || name.product_name === searchText
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
  //       order_no: item.user_id,
  //       product_name: item.product_name,
  //       product_rating: item.product_rating,
  //       prc: item.product_review,
  //       srr: item.seller_response,
  //       review_rating: item.review_rating,
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
  //     title: "Producr Name",
  //     dataIndex: "product_name",
  //     key: "product_name",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("product_name"),
  //   },
  //   {
  //     title: "Product Rating",
  //     dataIndex: "product_rating",
  //     key: "product_rating",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("product_rating"),
  //   },
  //   {
  //     title: "Product Review Comment",
  //     dataIndex: "prc",
  //     key: "prc",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("prc"),
  //   },
  //   {
  //     title: "Seller Response Rating",
  //     dataIndex: "srr",
  //     key: "srr",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("srr"),
  //   },
  //   {
  //     title: "Review & Rating",
  //     dataIndex: "review_rating",
  //     key: "review_rating",
  //     filterSearch: true,
  //     filterMode: "tree",
  //     filters: [],
  //     ...getColumnSearchProps("review_rating"),
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
                  <h3>Product Review & Rating</h3>
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
                <div class=" container table-responsive">
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
                        <th>Product Rating</th>
                        <th>Product Review Comment</th>
                        <th>Seller Response Rating</th>
                        <th>Review & Rating</th>
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
                              <td className="text-sm">{item.product_name}</td>
                              <td className="text-sm">{item.product_rating}</td>
                              <td className="text-sm">{item.product_review}</td>
                              <td className="text-sm">
                                {item.seller_response}
                              </td>
                              <td className="text-sm">{item.review_rating}</td>
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

export default Productreview;
