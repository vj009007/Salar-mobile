/** @format */

import api from "../api/axios";

const getOrderbyId = id => {
  return api.get(`/orders/${id}`);
};

const getRefundbyId = id => {
  return api.get(`/getrefundorders/${id}`);
};

const getReturnbyId = id => {
  return api.get(`/getreturnorders/${id}`);
};

const getProductchat = id => {
  return api.get(`/getProductchatorders/${id}`);
};

const getProductreview = id => {
  return api.get(`/getProductrevieworders/${id}`);
};

export {
  getOrderbyId,
  getRefundbyId,
  getReturnbyId,
  getProductchat,
  getProductreview,
};
