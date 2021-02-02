import {
  POST_NEW_MOVIE_FAILED,
  POST_NEW_MOVIE_REQUEST,
  POST_NEW_MOVIE_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const PostNewMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_NEW_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case POST_NEW_MOVIE_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case POST_NEW_MOVIE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
export default PostNewMovieReducer;
