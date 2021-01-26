import React, { useState } from "react";

const SeatComponent = ({ currentSeat, setSeat }) => {
  const [booked, setBooked] = useState(false);

  const handleClickSeat = (item) => {
    setBooked(!booked);
    setSeat((bookedSeats) => {
      const foundedSeat = bookedSeats
        .map((item) => item.tenGhe)
        .indexOf(currentSeat.tenGhe);
      if (foundedSeat === -1) return [...bookedSeats, item];
      else {
        bookedSeats.splice(foundedSeat, 1);
        return [...bookedSeats];
      }
    });
  };

  return (
    <div
      className={`seat${currentSeat.loaiGhe === "Thuong" ? "" : " vipSeat"}${
        !currentSeat.daDat ? "" : " unavail"
      }${!booked ? "" : " chosen_seat"}`}
      onClick={() => handleClickSeat(currentSeat)}
    >
      <div className="item1" />
      <div className="item2" />
      <span className="seatnumber">{currentSeat.tenGhe}</span>
    </div>
  );
};

export default SeatComponent;
