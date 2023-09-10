import axios from "axios";

axios.interceptors.response.use(
  res => res,
  function(error) {
    const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedErrors) console.error("Something was wrong. Try it later");
    return Promise.reject(error);
  });

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};

export default httpService;
