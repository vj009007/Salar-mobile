/** @format */

import api from "../api/axios";

const getsponserbyId = id => {
  return api.get(`/getsponsorteam/${id}`);
};

export { getsponserbyId };
