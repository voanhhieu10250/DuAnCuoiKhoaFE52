import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { actGetDetailCinemaRoom } from "../../../redux/actions/actGetDetailCinemaRoom";
import { actGetListCinemaSystemApi } from "../../../redux/actions/actListCinemaSystemApi";
import SetPathNameToLocal from "../../../functions/setPathToLocal";
import Loader from "../../../components/Loader";
import RightCheckout from "./rightCheckout";
import SeatCheckout from "./seatCheckout";
import { BookedSeatsContext } from "../../../contexts";
import { swaggerInstance } from "../../../Axios";

const CheckoutPage = () => {
  const firstTimeRender = useRef(true);
  const [bookedSeats, setBookedSeat] = useState([]);
  const account = JSON.parse(localStorage.getItem("UserAccount"));
  const dispatch = useDispatch();
  const { id } = useParams();
  const loadingListCinema = useSelector(
    (state) => state.ListCinemaSystemReducer.loading
  );
  const detailRoomLoading = useSelector(
    (state) => state.DetailCinemaRoomReducer.loading
  );
  const errDetailRoom = useSelector(
    (state) => state.DetailCinemaRoomReducer.err
  );

  const bookedSeatsProvider = useMemo(() => ({ bookedSeats, setBookedSeat }), [
    bookedSeats,
    setBookedSeat,
  ]);

  useEffect(() => {
    SetPathNameToLocal();
    if (account) {
      swaggerInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${account.accessToken}`;
      dispatch(actGetDetailCinemaRoom(id));
      dispatch(actGetListCinemaSystemApi());
    }
    firstTimeRender.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (errDetailRoom || !account)
    return <Redirect to={errDetailRoom ? "/" : "/login"} />;
  if (detailRoomLoading || loadingListCinema || firstTimeRender.current)
    return <Loader />;

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
