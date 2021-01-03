import Axios from "axios";
import {
  MOVIE_REVIEW_FAILED,
  MOVIE_REVIEW_SUCCESS,
  MOVIE_REVIEW_REQUEST,
} from "../constants";

export const actGetMovieReview = (maPhim) => {
  return (dispatch) => {
    dispatch(actMovieReviewRequest());
    Axios({
      url: `https://5fdf6cfdeca1780017a30c6d.mockapi.io/MovieReview/${maPhim}`,
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
