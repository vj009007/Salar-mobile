/** @format */

import api from "../api/axios";

const getTickets = id => {
  return api.get(`/gettickets/${id}`);
};
const getTicketsbyId = id => {
  return api.get(`/gettickets/${id}`);
};

export { getTickets, getTicketsbyId };
