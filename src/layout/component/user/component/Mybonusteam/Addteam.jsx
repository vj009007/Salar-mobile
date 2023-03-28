/** @format */

import React from "react";
import "./Team.css";
import Dashboardheader from "../Dashboard/dashboardheader";
import {
  getPendingLevels,
  getPendingMembers,
  addMemberIntoTeam,
} from "../../repo/levels";
import { Alert } from "../../../alert/alert";
function Addteam() {
  const [a, setA] = React.useState();
  const [b, setB] = React.useState([]);
  const [c, setC] = React.useState({
    userId: "",
    teamMemberId: "",
  });
  const getTeamLevels = async () => {
    const res = await getPendingLevels();
    setA(res.data.data);
  };

  const getTeamPending = async () => {
    const res = await getPendingMembers();
    setB(res.data.data);
  };

  React.useEffect(() => {
    getTeamLevels();
    getTeamPending();
  }, []);

  const handleChange = (e) => {
    setC({
      ...c,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const { userId, teamMemberId } = c;

    if (userId === "" || teamMemberId === "") {
      Alert("Please select the fields");
    } else {
      const res = await addMemberIntoTeam(c);
      Alert(res.data.message);
    }
  };
  return (
    <div className="myAccounts">
      <Dashboardheader />
      <div class="container-fluid py-5 col-md-10 ">
        <div className="row mt-4"></div>
        <div class="col-lg-12 mt-lg-0 mt-4">
          <div class="container-fluid py-5 col-md-10 card mt-4" id="basic-info">
            <h2>Add Team</h2>
            <div class="card-body pt-5">
              <div class="col-12">
                <label class="form-label">Enter User Id</label>
                <div class="input-group">
                  <select
                    class="form-control"
                    name="userId"
                    onChange={handleChange}
                    value={c.userId}
                  >
                    <option value="">Please select UserId</option>
                    {b &&
                      b.map((item) => (
                        <option value={item._id}>
                          {item.registerId} - {item.fullName}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div class="row">
                <div class=" details col-12">
                  <label class="form-label mt-4">Add To Level</label>
                  <div class="input-group">
                    <select
                      class="form-control"
                      name="teamMemberId"
                      onChange={handleChange}
                      value={c.teamMemberId}
                    >
                      <option value="">Please select level</option>
                      {a &&
                        a.map((item) => (
                          <option value={item._id}>
                            Level - {item.level} - Vacant place -{" "}
                            {item.vacantPlace} - {item.registerId} -{" "}
                            {item.fullName}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="btnsubmit" style={{ textAlign: "center" }}>
                  <button
                    type="button"
                    class="btn color btn-lg"
                    onClick={HandleSubmit}
                  >
                    Submit
                  </button>
                  <button
                    type="  button"
                    class="btnn btn bg-gradient-light btn-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addteam;
