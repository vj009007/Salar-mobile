/** @format */

import api from "../api/axios";

const getUserShippingAddress = id => {
  return api.get(`/getShippingAddress/${id}`);
};

const addShippingAddress = id => {
  return api.post(`/addShippingAddress`, id);
};

const setDefaultAddress = id => {
  return api.post(`/setDefaultAddress`, id);
};

const UpdateAddress = id => {
  return api.post(`/updateShippingAddress`, id);
};

const getAddressOnly = id => {
  return api.get(`/getAddressOnly/${id}`);
};

const RemoveAddress = id => {
  return api.post(`/deleteShippingAddress`, id);
};

export {
  getUserShippingAddress,
  addShippingAddress,
  setDefaultAddress,
  UpdateAddress,
  getAddressOnly,
  RemoveAddress,
};
