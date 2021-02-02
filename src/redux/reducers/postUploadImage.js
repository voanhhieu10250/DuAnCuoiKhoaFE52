import {
  POST_UPLOAD_IMAGE_FAILED,
  POST_UPLOAD_IMAGE_REQUEST,
  POST_UPLOAD_IMAGE_SUCCESS,
} from "../constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const PostUploadImageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_UPLOAD_IMAGE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case POST_UPLOAD_IMAGE_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.err = null;
      return { ...state };
    case POST_UPLOAD_IMAGE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = payload;
      return { ...state };

    default:
      return state;
  }
};
export default PostUploadImageReducer;
