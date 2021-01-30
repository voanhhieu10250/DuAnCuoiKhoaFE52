import {
  PUT_MOVIE_REVIEW_FAILED,
  PUT_MOVIE_REVIEW_REQUEST,
  PUT_MOVIE_REVIEW_SUCCESS,
} from "../constants";
import { mockapiInstance } from "../../Axios";

export const actPutMovieReview = (data, maPhim) => {
  return (dispatch) => {
    dispatch(actPutMovieReviewRequest());
    mockapiInstance({
      url: `/${maPhim}`,
      method: "PUT",
      data,
    })
      .then((res) => dispatch(actPutMovieReviewSuccess(res.data)))
      .catch((err) => dispatch(actPutMovieReviewFailed(err)));
  };
};

export const actPutMovieReviewRequest = () => {
  return {
    type: PUT_MOVIE_REVIEW_REQUEST,
  };
};

export const actPutMovieReviewSuccess = (payload) => {
  return {
    type: PUT_MOVIE_REVIEW_SUCCESS,
    payload,
  };
};

export const actPutMovieReviewFailed = (payload) => {
  return {
    type: PUT_MOVIE_REVIEW_FAILED,
    payload,
  };
};
