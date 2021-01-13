import {
  NEW_POST_REVIEW_CONTENT,
  NEW_POST_REVIEW_RATING,
  RESET_NEW_POST_REVIEW,
} from "./contants";

export const actSetRatePostReview = (payload) => {
  return (dispatch) => {
    dispatch({
      type: NEW_POST_REVIEW_RATING,
      payload,
    });
  };
};

export const actSetContentPostReview = (payload) => {
  return (dispatch) => {
    dispatch({
      type: NEW_POST_REVIEW_CONTENT,
      payload,
    });
  };
};

export const actResetPostReviewState = () => {
  return (dispatch) => {
    dispatch({
      type: RESET_NEW_POST_REVIEW,
    });
  };
};
