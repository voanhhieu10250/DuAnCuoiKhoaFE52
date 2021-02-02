import { swaggerInstance } from "../../Axios";
import {
  POST_NEW_MOVIE_FAILED,
  POST_NEW_MOVIE_REQUEST,
  POST_NEW_MOVIE_SUCCESS,
} from "../constants";

export const actPostNewMovieApi = (data) => async (dispatch) => {
  try {
    dispatch(actPostNewMovieRequest());
    const res = await swaggerInstance({
      url: "/QuanLyPhim/ThemPhimUploadHinh",
      method: "POST",
      data,
    });

    dispatch(actPostNewMovieSuccess(res.data));
  } catch (error) {
    dispatch(actPostNewMovieFailed(error));
  }
};
export const actPostNewMovieRequest = () => ({
  type: POST_NEW_MOVIE_REQUEST,
});
export const actPostNewMovieSuccess = (payload) => ({
  type: POST_NEW_MOVIE_SUCCESS,
  payload,
});
export const actPostNewMovieFailed = (payload) => ({
  type: POST_NEW_MOVIE_FAILED,
  payload,
});
