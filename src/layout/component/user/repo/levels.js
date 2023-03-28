/** @format */
import api from "../api/axios";

const getTeamTreeDetails = id => {
  return api.get(`/getTeamTreeDetails`);
};

const getTeamTreeByRegisterID = (id, level) => {
  return api.get(`/getTeamTreeDetails/${id}/${level}`);
};

const getProCommission = id => {
  return api.get(`/myearns/getprocommission/${id}`);
};

const getMemberShipCommission = id => {
  return api.get(`/myearns/getmembershipcommission/${id}`);
};

const getTeamIncomeCommission = id => {
  return api.get(`/myearns/getincome/${id}`);
};

const getMyWalletData = id => {
  return api.get(`/myearns/getallmywalletdata/${id}`);
};

const getPendingLevels = () => {
  return api.get(`getPendingLevelDetails`);
};

const getPendingMembers = () => {
  return api.post(`getPendingTeamMembers`, { searchText: "" });
};

const addMemberIntoTeam = id => {
  return api.post(`addTeamMember`, id);
};
export {
  getTeamTreeDetails,
  getTeamTreeByRegisterID,
  getProCommission,
  getMemberShipCommission,
  getTeamIncomeCommission,
  getMyWalletData,
  getPendingLevels,
  getPendingMembers,
  addMemberIntoTeam,
};
