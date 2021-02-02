import {
  LIST_USER_PER_PAGE_FAILED,
  LIST_USER_PER_PAGE_REQUEST,
  LIST_USER_PER_PAGE_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const ListUserPerPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_USER_PER_PAGE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case LIST_USER_PER_PAGE_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case LIST_USER_PER_PAGE_FAILED:
      state.loading = false;
      state.date = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
export default ListUserPerPageReducer;
