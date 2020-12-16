import React from "react";
import { useSelector } from "react-redux";
import DetailCinema from "./detailCinema";
import ListCinema from "./listCinema";

export default function CinemasEachSystem({ identityCode }) {
  const listCinema = useSelector(
    (state) => state.ListCinemaShowTimesReducer.data
  );

  if (listCinema !== null && identityCode === listCinema[0].maHeThongRap)
    return (
      <div className="row m-0">
        <ListCinema
          listCinema={listCinema[0].lstCumRap}
          cinemaCode={listCinema[0].maHeThongRap}
          logo={listCinema[0].logo}
        />
        <DetailCinema listCinema={listCinema[0].lstCumRap} />
      </div>
    );
  return (
    <div className="mainContent text-center">
      <h1>Loading ...</h1>
    </div>
  );
}
