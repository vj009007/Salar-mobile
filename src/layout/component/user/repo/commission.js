/** @format */
import api from "../api/axios";

const getSponserCommission = id => {
  return api.get(`/myearns/getsponsercommission/${id}`);
};

const getAurCommission = id => {
  return api.get(`/myearns/getaurcommission/${id}`);
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
export {
  getSponserCommission,
  getAurCommission,
  getProCommission,
  getMemberShipCommission,
  getTeamIncomeCommission,
  getMyWalletData,
};
