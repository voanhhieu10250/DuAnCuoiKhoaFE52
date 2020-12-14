import {
  LIST_MOVIE_FAILED,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_REQUEST,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const ListMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case LIST_MOVIE_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case LIST_MOVIE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    default:
      return state;
  }
};

export default ListMovieReducer;
