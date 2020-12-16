import {
  LIST_CINEMA_SYSTEM_REQUEST,
  LIST_CINEMA_SYSTEM_SUCCESS,
  LIST_CINEMA_SYSTEM_FAILED,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const ListCinemaSystemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_CINEMA_SYSTEM_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case LIST_CINEMA_SYSTEM_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };

    case LIST_CINEMA_SYSTEM_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};

export default ListCinemaSystemReducer;
