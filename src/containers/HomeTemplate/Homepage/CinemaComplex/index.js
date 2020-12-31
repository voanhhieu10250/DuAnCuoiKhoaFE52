import React, { memo } from "react";
import { useSelector } from "react-redux";
import DetailCinemaSystem from "./detailCinemaSystem";
import ListCinemaSystems from "./listCinemaSystems";
import { Element } from "react-scroll";

function CinemaComplex() {
  const listCinemaSystem = useSelector(
    (state) => state.ListCinemaSystemReducer.data
  );

  if (listCinemaSystem !== null)
    return (
      <div className="cinemaBlock">
        <Element
          name="homeCinemaComplex"
          className="col-12 mainMaxWidth px-0"
          id="homeCinemaComplex"
        >
          <ListCinemaSystems listCinemaSystem={listCinemaSystem} />
          <DetailCinemaSystem listCinemaSystem={listCinemaSystem} />
        </Element>
      </div>
    );
  return <div></div>;
}

export default memo(CinemaComplex);
