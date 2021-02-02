import { swaggerInstance } from "../../Axios";
import {
  POST_UPLOAD_IMAGE_FAILED,
  POST_UPLOAD_IMAGE_REQUEST,
  POST_UPLOAD_IMAGE_SUCCESS,
} from "../constants";

export const actPostUploadImage = (data) => async (dispatch) => {
  try {
    dispatch(actPostUploadImageRequest());
    const result = await swaggerInstance({
      url: "/QuanLyPhim/UploadHinhAnhPhim",
      method: "POST",
      data,
    });
    dispatch(actPostUploadImageSuccess(result));
  } catch (error) {
    dispatch(actPostUploadImageFailed(error));
  }
};

export const actPostUploadImageRequest = () => ({
  type: POST_UPLOAD_IMAGE_REQUEST,
});
export const actPostUploadImageSuccess = (payload) => ({
  type: POST_UPLOAD_IMAGE_SUCCESS,
  payload,
});
export const actPostUploadImageFailed = (payload) => ({
  type: POST_UPLOAD_IMAGE_FAILED,
  payload,
});
