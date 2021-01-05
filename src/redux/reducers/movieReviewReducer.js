import {
  MOVIE_REVIEW_FAILED,
  MOVIE_REVIEW_SUCCESS,
  MOVIE_REVIEW_REQUEST,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const MovieReviewReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIE_REVIEW_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case MOVIE_REVIEW_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case MOVIE_REVIEW_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
export default MovieReviewReducer;
