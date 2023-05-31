import axios from "axios";

export const httpRequestJsonplc = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const httpRequest = axios.create({
  baseURL: "http://103.186.1.229",
  withCredentials: true,
});

httpRequest.interceptors.request.use((config) => {
  const appToken = localStorage.getItem("@uid");
  if (appToken) {
    config.headers = {
      Authorization: `Bearer ${appToken}`,
    };
  }
  // if (!appToken) {
  //   window.location.href = "/auth/login";
  // }
  return config;
});

httpRequest.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status === 401) {
      window.location.href = "/auth/login";
    }

    return Promise.reject(error);
  }
);

export default httpRequest;
