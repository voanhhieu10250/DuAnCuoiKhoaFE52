import { swaggerInstance } from "../../Axios";
import {
  MOVIE_DETAILS_FAILED,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
} from "../constants";

export const actGetMovieDetailsApi = (maPhim) => {
  return (dispatch) => {
    dispatch(actMovieDetailsRequest());
    swaggerInstance({
      url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actMovieDetailsSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actMovieDetailsFailed(err));
      });
  };
};

export const actMovieDetailsRequest = () => ({
  type: MOVIE_DETAILS_REQUEST,
});

export const actMovieDetailsSuccess = (payload) => ({
  type: MOVIE_DETAILS_SUCCESS,
  payload,
});

export const actMovieDetailsFailed = (payload) => ({
  type: MOVIE_DETAILS_FAILED,
  payload,
});
