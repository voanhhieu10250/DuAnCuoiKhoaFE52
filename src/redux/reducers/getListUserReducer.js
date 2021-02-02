import {
  GET_LIST_USER_FAILED,
  GET_LIST_USER_REQUEST,
  GET_LIST_USER_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const GetListUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case GET_LIST_USER_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case GET_LIST_USER_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    default:
      return state;
  }
};
export default GetListUserReducer;
