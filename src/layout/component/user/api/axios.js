/** @format */

import axios from "axios";
//const apiUrl = "http://localhost:4000"; //your api base url
const apiUrl = "https://api.salar.in"
// const apiUrl = "http://103.191.208.73:4000";
// const proxyurl = "https://thingproxy.freeboard.io/fetch/"; //proxy for local testing, remove this in production version
// const proxyurl = "https://thingproxy.freeboard.io/fetch/"; //proxy for local testing, remove this in production version

function getHeader() {
  const token = localStorage.getItem("access_token") ? localStorage.getItem('access_token') : localStorage.getItem('authToken');
  // const expiration = localStorage.getItem("token_exp");

  // if (expiration * 1000 < Date.now()) {
  //   return {
  //     "Content-Type": "application/json",
  //   };
  // }
  if (token) {
    return {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      useCredentials: true,
    };
  } else {
    return {
      "Content-Type": "application/json",
    };
  }
}
const api = axios.create({
  baseURL: apiUrl,
  headers: getHeader(),
});

export default api;
