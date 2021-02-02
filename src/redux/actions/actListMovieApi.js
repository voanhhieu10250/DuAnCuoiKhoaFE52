import { swaggerInstance } from "../../Axios";
import {
  LIST_MOVIE_FAILED,
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
} from "../constants";

export const actGetListMovieApi = (maNhom = "GP10", tenPhim) => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    swaggerInstance({
      url: `/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}${
        tenPhim ? `&tenPhim=${tenPhim}` : ""
      }`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actListMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListMovieFailed(err));
      });
  };
};

export const actListMovieRequest = () => {
  return {
    type: LIST_MOVIE_REQUEST,
  };
};

export const actListMovieSuccess = (data) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

export const actListMovieFailed = (err) => {
  return {
    type: LIST_MOVIE_FAILED,
    payload: err,
  };
};
