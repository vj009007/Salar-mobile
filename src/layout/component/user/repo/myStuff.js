/** @format */

import api from "../api/axios";

const getPoints = id => {
  return api.get(`/mystuff/getpoints/${id}`);
};

const getRewards = id => {
  return api.get(`/mystuff/getrewards/${id}`);
};
const getOffers = id => {
  return api.get(`/mystuff/getoffers/${id}`);
};
const getCreditdebit = id => {
  return api.get(`/mystuff/getccdc/${id}`);
};
const getShoppingamount = id => {
  return api.get(`/mystuff/getshoppingamount/${id}`);
};

export { getPoints, getRewards, getOffers, getCreditdebit, getShoppingamount };
