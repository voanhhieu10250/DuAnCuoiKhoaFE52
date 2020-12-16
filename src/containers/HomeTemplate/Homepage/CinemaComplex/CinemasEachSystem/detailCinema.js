import React from "react";
import ListShowTimes from "./ListShowTimes";

export default function DetailCinema({ listCinema }) {
  const renderShowTimes = () => {
    return listCinema.map((cinema, index) => {
      return (
        <div
          className={
            index === 0 ? "tab-pane fade show active" : "tab-pane fade"
          }
          id={`${cinema.maCumRap}-tab`}
          role="tabpanel"
          aria-labelledby={cinema.maCumRap}
          key={index}
        >
          <ListShowTimes listMovies={cinema.danhSachPhim} />
        </div>
      );
    });
  };

  return (
    <div
      className="tab-content scrollBarStyle listCinemaFilms"
      style={{ height: 705 }}
    >
      {renderShowTimes()}
    </div>
  );
}
