import { swaggerInstance } from "../../Axios";
import {
  POST_UPDATE_MOVIE_FAILED,
  POST_UPDATE_MOVIE_REQUEST,
  POST_UPDATE_MOVIE_SUCCESS,
} from "../constants";
import { actPostUploadImage } from "./actPostUploadImage";

export const actPostUpdateMovie = (data, formData = null) => async (
  dispatch
) => {
  try {
    dispatch(actPostUpdateMovieRequest());
    const res = await swaggerInstance({
      url: "/QuanLyPhim/CapNhatPhim",
      method: "POST",
      data,
    });
    if (res && formData) {
      dispatch(actPostUploadImage(formData));
    }
    dispatch(actPostUpdateMovieSuccess(res.data));
  } catch (error) {
    dispatch(actPostUpdateMovieFailed(error));
  }
};

export const actPostUpdateMovieRequest = () => ({
  type: POST_UPDATE_MOVIE_REQUEST,
});
export const actPostUpdateMovieSuccess = (payload) => ({
  type: POST_UPDATE_MOVIE_SUCCESS,
  payload,
});
export const actPostUpdateMovieFailed = (payload) => ({
  type: POST_UPDATE_MOVIE_FAILED,
  payload,
});
