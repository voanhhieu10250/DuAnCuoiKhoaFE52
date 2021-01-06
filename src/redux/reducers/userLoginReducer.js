import {
  LOGIN_PAGE_FAILED,
  LOGIN_PAGE_SUCCESS,
  LOGIN_PAGE_REQUEST,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const userLoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_PAGE_REQUEST:
      state.loading = true;
      state.data = payload;
      state.err = null;
      return { ...state };
    case LOGIN_PAGE_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case LOGIN_PAGE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
export default userLoginReducer;
