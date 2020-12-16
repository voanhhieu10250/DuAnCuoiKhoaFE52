import Axios from "axios";
import {
  LIST_CINEMA_SYSTEM_REQUEST,
  LIST_CINEMA_SYSTEM_SUCCESS,
  LIST_CINEMA_SYSTEM_FAILED,
} from "../constants";

export const actGetListCinemaSystemApi = () => {
  return (dispatch) => {
    dispatch(actListCinemaSystemRequest());
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
    })
      .then((result) => dispatch(actListCinemaSystemSuccess(result.data)))
      .catch((err) => dispatch(actListCinemaSystemFailed(err)));
  };
};

export const actListCinemaSystemRequest = () => ({
  type: LIST_CINEMA_SYSTEM_REQUEST,
});

export const actListCinemaSystemSuccess = (data) => ({
  type: LIST_CINEMA_SYSTEM_SUCCESS,
  payload: data,
});

export const actListCinemaSystemFailed = (err) => ({
  type: LIST_CINEMA_SYSTEM_FAILED,
  payload: err,
});
