import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import CheckoutStepController from "../../../components/CheckoutStepController";
import {
  actGetDetailCinemaRoom,
  actGetDetailCinemaRoomSuccess,
} from "../../../redux/actions/actGetDetailCinemaRoom";
import { actGetListCinemaSystemApi } from "../../../redux/actions/actListCinemaSystemApi";
import SetPathNameToLocal from "../../../functions/setPathToLocal";
import Loader from "../../../components/Loader";
import RightCheckout from "./rightCheckout";
import SeatCheckout from "./seatCheckout";

const CheckoutPage = () => {
  const [bookedSeats, setBookedSeat] = useState([]);
  const account = JSON.parse(localStorage.getItem("UserAccount"));
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailRoom = useSelector((state) => state.DetailCinemaRoomReducer.data);
  const errDetailRoom = useSelector(
    (state) => state.DetailCinemaRoomReducer.err
  );
  const setBookedSeatFunc = useCallback(
    (seatChanges) => {
      setBookedSeat(seatChanges);
    },
    [setBookedSeat]
  );

  useEffect(() => {
    SetPathNameToLocal();
    dispatch(actGetDetailCinemaRoom(id));
    dispatch(actGetListCinemaSystemApi());
    return () => {
      dispatch(actGetDetailCinemaRoomSuccess(null));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (errDetailRoom || !account)
    return <Redirect to={errDetailRoom ? "/" : "/login"} />;
  if (!detailRoom) return <Loader />;

  return (
    <div className="p-0">
      <CheckoutStepController />
      <div
        id="leftCheckout"
        style={{
          backgroundImage: `url(${detailRoom.thongTinPhim.hinhAnh})`,
        }}
      >
        <div className="blurLeftImg" />
      </div>
      <SeatCheckout setSeat={setBookedSeatFunc} />
      <RightCheckout listBookedChair={bookedSeats} />
    </div>
  );
};

export default CheckoutPage;
