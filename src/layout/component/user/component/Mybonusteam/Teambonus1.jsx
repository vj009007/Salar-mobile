/** @format */

import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Dashboardheader from "../Dashboard/dashboardheader";
import { Table, Tag, Button, Input, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { getTeamTreeByRegisterID } from "../../repo/levels";
function Teambonus1() {
  const location = useLocation();
  console.log(location);
  const team = location.state;
  const [T, setT] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) => {
      let dtaa =
        record[dataIndex] &&
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      return dtaa;
    },
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const GetData = async (id, level) => {
    console.log(id, level);
    const res = await getTeamTreeByRegisterID(id, level);
    setT(res.data.data);
  };

  let dataSource =
    team.users &&
    team.users.map((item, i) => {
      return {
        sno: i + 1,
        userId: item.registerId,
        fullname: item.fullName,
        uplinerId: item.mainUser.registerId,
        status: item.status,
        earnings: item.earnings,
        get_status: {
          id: item.registerId,
          level: team.level,
        },
      };
    });

  let columns = [
    {
      title: "S No",
      dataIndex: "sno",
      key: "sno",
      filterSearch: true,
      filterMode: "tree",
      filters: [],
      ...getColumnSearchProps("sno"),
    },
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
      filterSearch: true,
      filterMode: "tree",
      filters: [],
      ...getColumnSearchProps("userId"),
    },
    {
      title: "User Name",
      dataIndex: "fullname",
      key: "fullname",
      filterSearch: true,
      filterMode: "tree",
      filters: [],
      ...getColumnSearchProps("fullname"),
    },
    {
      title: "Upliner ID",
      dataIndex: "uplinerId",
      key: "uplinerId",
      filterSearch: true,
      filterMode: "tree",
      filters: [],
      ...getColumnSearchProps("uplinerId"),
    },
    {
      title: "Get More details",
      dataIndex: "get_status",
      key: "get_status",
      filterSearch: true,
      filterMode: "get_status",
      filters: [],
      ...getColumnSearchProps("get_status"),
      render: (get_status) => {
        console.log(get_status, "get_status");
        return (
          <>
            <Tag>Get More Details</Tag>
          </>
        );
      },
    },
    // {
    //   title: "Earnings",
    //   dataIndex: "earnings",
    //   key: "earnings",
    //   filterSearch: true,
    //   filterMode: "tree",
    //   filters: [],
    //   ...getColumnSearchProps("earnings"),
    // },
    // {
    //   title: "Team",
    //   dataIndex: "team",
    //   key: "team",
    //   filterSearch: true,
    //   filterMode: "tree",
    //   filters: [],
    //   ...getColumnSearchProps("team"),
    //   render: team => {
    //     return (
    //       // <Link to="/user/Teambonus1" state={team}>
    //       //   <Tag color={"red"}>View</Tag>
    //       // </Link>
    //       <Tag color={"red"}>View</Tag>
    //     );
    //   },
    // },
  ];
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
                  <h2>Team Level {team && team.level}</h2>
                </div>
              </div>
              <br></br>
              {/* <div className="row" style={{ justifyContent: "start" }}>
                <div className="col-md-2">
                  <input
                    class="for form-control"
                    type="search"
                    placeholder="Search....."
                  />
                </div>
              </div>

              <div class="card-body px-0 pb-0">
                <div class="container table-responsive">
                  <table
                    class=" table table-bordered table table-flush"
                    id="products-list"
                  >
                    <thead class="thead-light">
                      <tr>
                        <th>S No</th>
                        <th>Level</th>
                        <th>User Id</th>
                        <th>User Name</th>
                        <th>Upliner Id</th>
                        <th>Required Members</th>
                        <th>Joined Members</th>
                        <th>Members Added (By Me)</th>
                        <th>Status</th>
                        <th>Earnings</th>
                        <th>Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-sm">1</td>
                        <td class="text-sm">Level</td>
                        <td class="text-sm">User Id</td>
                        <td class="text-sm">User Name</td>
                        <td class="text-sm">Upliner Id</td>
                        <td class="text-sm">Required Members</td>
                        <td class="text-sm">Joined Members</td>
                        <td class="text-sm">Members Added (By Me)</td>
                        <td class="text-sm">Status</td>
                        <td class="text-sm">Earnings</td>
                        <td class="text-sm">Team</td>
                      </tr>

                      <tr></tr>
                    </tbody>
                  </table>
                </div>
                <div className="row mt-4">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination" style={{ justifyContent: "end" }}>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="javascript:;"
                          aria-label="Previous"
                        >
                          <i class="fa fa-angle-left"></i>
                          <span class="sr-only">Previous</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="javascript:;">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="javascript:;">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="javascript:;">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="javascript:;"
                          aria-label="Next"
                        >
                          <i class="fa fa-angle-right"></i>
                          <span class="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div> */}
              <Table dataSource={dataSource} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teambonus1;
