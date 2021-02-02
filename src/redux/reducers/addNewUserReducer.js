import {
  ADD_NEW_USER_FAILED,
  ADD_NEW_USER_REQUEST,
  ADD_NEW_USER_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const AddNewUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ADD_NEW_USER_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case ADD_NEW_USER_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
export default AddNewUserReducer;
