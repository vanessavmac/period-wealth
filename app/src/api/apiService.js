import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:8080/api";

const getHeaders = (params={}) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  return {
    headers: {
      Authorization: user?.token || '',
    },
    ...params
  };
};

const prepareQueryParams = () => {};

export const apiService = {
  get: (url, params = {}) => {
    return axios.get(baseUrl + url, getHeaders(params)).then((res) => res.data);
  },
  post: (url, data = {}) =>
    axios.post(baseUrl + url, data, getHeaders()).then((res) => res.data),
  put: (url, data = {}) =>
    axios.put(baseUrl + url, data, getHeaders()).then((res) => res.data),
  delete: (url) =>
    axios.delete(baseUrl + url, getHeaders()).then((res) => res.data),
};

export const CALL_API = "CALL_API";
