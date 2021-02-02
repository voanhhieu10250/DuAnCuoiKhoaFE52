import { swaggerInstance } from "../../Axios";
import {
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILED,
} from "../constants";

export const actDeleteMovieApi = (maPhim) => async (dispatch) => {
  try {
    dispatch(actDeleteMovieRequest());
    const res = await swaggerInstance({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
    });
    dispatch(actDeleteMovieSuccess(res.data));
  } catch (error) {
    dispatch(actDeleteMovieFailed(error));
  }
};

export const actDeleteMovieRequest = () => ({
  type: DELETE_MOVIE_REQUEST,
});
export const actDeleteMovieSuccess = (payload) => ({
  type: DELETE_MOVIE_SUCCESS,
  payload,
});
export const actDeleteMovieFailed = (payload) => ({
  type: DELETE_MOVIE_FAILED,
  payload,
});
