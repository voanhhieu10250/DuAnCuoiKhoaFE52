import React, { memo } from "react";
import { useSelector } from "react-redux";
import DetailCinemaSystem from "./detailCinemaSystem";
import ListCinemaSystems from "./listCinemaSystems";

function CinemaComplex() {
  const listCinemaSystem = useSelector(
    (state) => state.ListCinemaSystemReducer.data
  );
  if (listCinemaSystem !== null)
    return (
      <div className="cinemaBlock">
        <div className="col-12 mainMaxWidth px-0" id="homeCinemaComplex">
          <ListCinemaSystems listCinemaSystem={listCinemaSystem} />
          <DetailCinemaSystem listCinemaSystem={listCinemaSystem} />
        </div>
      </div>
    );
  return <div>Loading ...</div>;
}

export default memo(CinemaComplex);
