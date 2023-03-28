/** @format */

import api from "../api/axios";

const getOtp = data => {
  return api.post(`/changeTransactionPasswordRequest`, data);
};

const verifyOtp = data => {
  return api.post(`/changeTransactionPassword`, data);
};

const getProfileData = id => {
  return api.get(`/getUserProfile/${id}`);
};

export { getOtp, verifyOtp, getProfileData };
