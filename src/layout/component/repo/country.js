/** @format */

import api from "../../../api/axios";

const getAllCountry = () => {
  return api.get(`/ua/countries`);
};

export { getAllCountry};