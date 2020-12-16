import {
  LIST_CINEMA_REQUEST,
  LIST_CINEMA_SUCCESS,
  LIST_CINEMA_FAILED,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const ListCinemaShowTimesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case LIST_CINEMA_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case LIST_CINEMA_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };

    case LIST_CINEMA_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};

export default ListCinemaShowTimesReducer;
