import Axios from "axios";
import {
  POST_BOOKED_SEATS_FAILED,
  POST_BOOKED_SEATS_REQUEST,
  POST_BOOKED_SEATS_SUCCESS,
} from "../constants";

export const actPostBookedSeat = (data, accessToken, history) => {
  return async (dispatch) => {
    try {
      dispatch(actPostBookedSeatRequest());
      history.push("/checkout/result/");
      const res = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
        method: "POST",
        data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      dispatch(actPostBookedSeatSuccess(res.data));
    } catch (error) {
      dispatch(actPostBookedSeatFailed(error));
    }
  };
};

export const actPostBookedSeatRequest = () => {
  return {
    type: POST_BOOKED_SEATS_REQUEST,
  };
};

export const actPostBookedSeatSuccess = (payload) => {
  return {
    type: POST_BOOKED_SEATS_SUCCESS,
    payload,
  };
};

export const actPostBookedSeatFailed = (payload) => {
  return {
    type: POST_BOOKED_SEATS_FAILED,
    payload,
  };
};
