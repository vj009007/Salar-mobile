/** @format */

import api from "../api/axios";

const getUserDashboardDatabyId = id => {
  return api.get(`/getUserDashboardData/${id}`);
};

const getSponserdata = id => {
  return api.get(`/sponserId/${id}`);
};

const getSponseruser = id => {
  return api.get(`/sponserIduser/${id}`);
};

const getNetworkTeamCount = () => {
  return api.get(`/getNetworkTeamCount`);
}

export { getUserDashboardDatabyId, getSponserdata, getSponseruser,getNetworkTeamCount };
