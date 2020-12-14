import {
  MOVIE_DETAILS_FAILED,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const MovieDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVIE_DETAILS_REQUEST:
      state.loading = true;
      state.data = null;
      state.errr = null;
      return { ...state };
    case MOVIE_DETAILS_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.errr = null;
      return { ...state };
    case MOVIE_DETAILS_FAILED:
      state.loading = false;
      state.data = null;
      state.errr = payload;
      return { ...state };
    default:
      return state;
  }
};

export default MovieDetailsReducer;
