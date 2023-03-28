/** @format */

import api from "../api/axios";

const getmlmbyId = id => {
  return api.get(`/getmlmuser/${id}`);
};

export { getmlmbyId };
