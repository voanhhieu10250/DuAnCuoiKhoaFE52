import {
  LIST_UPCOMING_MOVIE_FAILED,
  LIST_UPCOMING_MOVIE_REQUEST,
  LIST_UPCOMING_MOVIE_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const ListUpComingMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_UPCOMING_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case LIST_UPCOMING_MOVIE_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case LIST_UPCOMING_MOVIE_FAILED:
      state.loading = false;
      state.date = null;
      state.err = payload;
      return { ...state };
    default:
      return state;
  }
};

export default ListUpComingMovieReducer;
