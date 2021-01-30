import { swaggerInstance } from "../../Axios";
import {
  POST_BOOKED_SEATS_FAILED,
  POST_BOOKED_SEATS_REQUEST,
  POST_BOOKED_SEATS_SUCCESS,
} from "../constants";

export const actPostBookedSeat = (data, history) => {
  return async (dispatch) => {
    try {
      dispatch(actPostBookedSeatRequest());
      history.push("/checkout/result/");
      const res = await swaggerInstance({
        url: `/QuanLyDatVe/DatVe`,
        method: "POST",
        data,
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
