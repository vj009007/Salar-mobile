/** @format */

import api from "../../../api/axios";

const getUserManageShippingAddress = (id) => {
  return api.get(`/userManageAddress/${id}`);
};

const getUserShippingAddress = (id) => {
  return api.get(`/getShippingAddress/${id}`);
};

const getProductById = (id) => {
  return api.get(`/ua/product-detail/${id}`);
};

const getGameProductById = (id) => {
  return api.get(`/ua/game-products/${id}`);
};

export {
  getUserManageShippingAddress,
  getUserShippingAddress,
  getProductById,
  getGameProductById,
};
