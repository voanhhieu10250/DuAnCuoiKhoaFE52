import { mockapiInstance } from "../../Axios";
import {
  MOVIE_REVIEW_FAILED,
  MOVIE_REVIEW_SUCCESS,
  MOVIE_REVIEW_REQUEST,
} from "../constants";

export const actGetMovieReview = (maPhim) => {
  return (dispatch) => {
    dispatch(actMovieReviewRequest());
    mockapiInstance({
      url: `/${maPhim}`,
      method: "GET",
    })
      .then((res) => {
        dispatch(actMovieReviewSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actMovieReviewFailed(err));
      });
  };
};

export const actMovieReviewRequest = () => {
  return {
    type: MOVIE_REVIEW_REQUEST,
  };
};

export const actMovieReviewSuccess = (payload) => {
  return {
    type: MOVIE_REVIEW_SUCCESS,
    payload,
  };
};

export const actMovieReviewFailed = (payload) => {
  return {
    type: MOVIE_REVIEW_FAILED,
    payload,
  };
};
