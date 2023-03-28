/** @format */

import api from "../../../api/axios";

const createOrder = data => {
  return api.post(`/common/createOrder`, data);
};

export { createOrder };
