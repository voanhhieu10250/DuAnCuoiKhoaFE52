import {
  PUT_USER_INFO_FAILED,
  PUT_USER_INFO_REQUEST,
  PUT_USER_INFO_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const PutUserInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PUT_USER_INFO_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case PUT_USER_INFO_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case PUT_USER_INFO_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
export default PutUserInfoReducer;
