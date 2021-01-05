import {
  CHANGE_MOVIE_REVIEW_DATA,
  PUT_MOVIE_REVIEW_FAILED,
  PUT_MOVIE_REVIEW_REQUEST,
  PUT_MOVIE_REVIEW_SUCCESS,
} from "../constants";

const initialState = {
  dataChanged: [],
  loading: false,
  data: null,
  err: null,
};

const PutMovieReviewReducer = (
  state = initialState,
  { type, payload, index }
) => {
  switch (type) {
    case CHANGE_MOVIE_REVIEW_DATA:
      state.dataChanged[index] = payload;
      state.loading = false;
      state.data = null;
      state.err = null;
      return { ...state };
    case PUT_MOVIE_REVIEW_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case PUT_MOVIE_REVIEW_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case PUT_MOVIE_REVIEW_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
export default PutMovieReviewReducer;
