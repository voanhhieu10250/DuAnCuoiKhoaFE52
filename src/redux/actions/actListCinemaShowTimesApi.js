import Axios from "axios";
import {
  LIST_CINEMA_REQUEST,
  LIST_CINEMA_SUCCESS,
  LIST_CINEMA_FAILED,
} from "../constants";

export const actGetListCinemaShowTimesApi = (code = null) => {
  return (dispatch) => {
    dispatch(actListCinemaRequest());
    Axios({
      url:
        code !== null
          ? `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${code}&maNhom=GP10`
          : `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP10`,
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
