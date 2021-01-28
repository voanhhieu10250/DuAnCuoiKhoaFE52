import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { actGetDetailCinemaRoom } from "../../../redux/actions/actGetDetailCinemaRoom";
import { actGetListCinemaSystemApi } from "../../../redux/actions/actListCinemaSystemApi";
import SetPathNameToLocal from "../../../functions/setPathToLocal";
import Loader from "../../../components/Loader";
import RightCheckout from "./rightCheckout";
import SeatCheckout from "./seatCheckout";
import { BookedSeatsContext } from "../../../contexts";

const CheckoutPage = () => {
  const [bookedSeats, setBookedSeat] = useState([]);
  const account = JSON.parse(localStorage.getItem("UserAccount"));
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailRoomLoading = useSelector(
    (state) => state.DetailCinemaRoomReducer.loading
  );
  const detailRoom = useSelector((state) => state.DetailCinemaRoomReducer.data);
  const errDetailRoom = useSelector(
    (state) => state.DetailCinemaRoomReducer.err
  );

  const bookedSeatsProvider = useMemo(() => ({ bookedSeats, setBookedSeat }), [
    bookedSeats,
    setBookedSeat,
  ]);

  useEffect(() => {
    SetPathNameToLocal();
    dispatch(actGetDetailCinemaRoom(id));
    dispatch(actGetListCinemaSystemApi());
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (errDetailRoom || !account)
    return <Redirect to={errDetailRoom ? "/" : "/login"} />;
  if (detailRoomLoading || !detailRoom) return <Loader />;

  return (
    <div className="p-0">
      <BookedSeatsContext.Provider value={bookedSeatsProvider}>
        <SeatCheckout />
        <RightCheckout />
      </BookedSeatsContext.Provider>
    </div>
  );
};

export default CheckoutPage;
