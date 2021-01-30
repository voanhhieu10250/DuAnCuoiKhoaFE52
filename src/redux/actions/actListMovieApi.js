import { swaggerInstance } from "../../Axios";
import {
  LIST_MOVIE_FAILED,
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
} from "../constants";

export const actGetListMovieApi = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    swaggerInstance({
      url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
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
