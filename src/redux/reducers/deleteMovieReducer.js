import {
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILED,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const DeleteMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case DELETE_MOVIE_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case DELETE_MOVIE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
export default DeleteMovieReducer;
