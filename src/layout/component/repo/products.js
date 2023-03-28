/** @format */

import api from "../../../api/axios";

const getAlldeals = () => {
  return api.get(`ua/getDealDetailsall`);
};
const gamingProduct = (id) => {
  return api.get(`getGameProducts/${id}`);
};

export { getAlldeals,gamingProduct };
