import { swaggerInstance } from "../../Axios";
import {
  LIST_CINEMA_REQUEST,
  LIST_CINEMA_SUCCESS,
  LIST_CINEMA_FAILED,
} from "../constants";

export const actGetListCinemaShowTimesApi = (code = null) => {
  return (dispatch) => {
    dispatch(actListCinemaRequest());
    swaggerInstance({
      url: `/QuanLyRap/LayThongTinLichChieuHeThongRap?${
        code && `maHeThongRap=${code}&`
      }maNhom=GP10`,
      method: "GET",
    })
      .then((result) => dispatch(actListCinemaSuccess(result.data)))
      .catch((err) => dispatch(actListCinemaFailed(err)));
  };
};

const actListCinemaRequest = () => {
  return {
    type: LIST_CINEMA_REQUEST,
  };
};

const actListCinemaSuccess = (data) => {
  return {
    type: LIST_CINEMA_SUCCESS,
    payload: data,
  };
};

const actListCinemaFailed = (err) => {
  return {
    type: LIST_CINEMA_FAILED,
    payload: err,
  };
};
