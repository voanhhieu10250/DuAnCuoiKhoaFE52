import Axios from "axios";

export const swaggerInstance = Axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn/api",
});

export const mockapiInstance = Axios.create({
  baseURL: "https://5fdf6cfdeca1780017a30c6d.mockapi.io/MovieReview",
});
