import { swaggerInstance } from "../../Axios";

import {
  LIST_UPCOMING_MOVIE_REQUEST,
  LIST_UPCOMING_MOVIE_SUCCESS,
  LIST_UPCOMING_MOVIE_FAILED,
} from "../constants";

export const actListUpComingMovieApi = () => {
  return (dispatch) => {
    dispatch(actListUpComMovieRequest());
    swaggerInstance({
      url: "/QuanLyPhim/LayDanhSachPhim?maNhom=GP00",
      method: "GET",
    })
      .then((result) => dispatch(actListUpComMovieSuccess(result.data)))
      .catch((err) => dispatch(actListUpComMovieFailed(err)));
  };
};

const actListUpComMovieRequest = () => {
  return {
    type: LIST_UPCOMING_MOVIE_REQUEST,
  };
};

const actListUpComMovieSuccess = (data) => {
  return {
    type: LIST_UPCOMING_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListUpComMovieFailed = (err) => {
  return {
    type: LIST_UPCOMING_MOVIE_FAILED,
    payload: err,
  };
};
