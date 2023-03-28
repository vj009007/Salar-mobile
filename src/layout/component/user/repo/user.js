/** @format */

import api from "../api/axios";

const getUser = id => {
  return api.get(`/getUserProfile/${id}`);
};

const getSponserId = id => {
  return api.get(`/getSponserId/${id}`);
};

export { getUser,getSponserId };
