/** @format */

import api from "../api/axios";

const getsponserbyId = id => {
  return api.get(`/getsponsorcomm/${id}`);
};

const getProdCombyId = id => {
  return api.get(`/getproductcomm/${id}`);
};
export { getsponserbyId, getProdCombyId };
