import {
  CINEMA_ROOM_DETAILS_FAILED,
  CINEMA_ROOM_DETAILS_REQUEST,
  CINEMA_ROOM_DETAILS_SUCCESS,
} from "../constants";

const initialState = {
  data: null,
  err: null,
  loading: false,
};

const DetailCinemaRoomReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CINEMA_ROOM_DETAILS_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case CINEMA_ROOM_DETAILS_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };

    case CINEMA_ROOM_DETAILS_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};

export default DetailCinemaRoomReducer;
