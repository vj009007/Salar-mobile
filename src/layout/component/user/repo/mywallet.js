/** @format */

import api from "../api/axios";

const getFundsRecevied = id => {
  return api.get(`/mywallet/getfundsrecevied/${id}`);
};

const getFundsTransfer = id => {
  return api.get(`/mywallet/getfundstransfer/${id}`);
};

const getWalletHistory = id => {
  return api.get(`/mywallet/getwallethistory/${id}`);
};

export { getFundsRecevied, getWalletHistory, getFundsTransfer };
