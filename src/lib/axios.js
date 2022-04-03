import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: 'https://dev.dummy-api.alamisharia.co.id'
// });

axios.interceptors.response.use(
  (response) => response,
  (error) => error
);

export default axios;
