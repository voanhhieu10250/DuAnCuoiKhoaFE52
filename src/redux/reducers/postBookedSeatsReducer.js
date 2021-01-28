import {
  POST_BOOKED_SEATS_FAILED,
  POST_BOOKED_SEATS_REQUEST,
  POST_BOOKED_SEATS_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const PostBookedSeatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_BOOKED_SEATS_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case POST_BOOKED_SEATS_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case POST_BOOKED_SEATS_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };
    default:
      return state;
  }
};
export default PostBookedSeatsReducer;
