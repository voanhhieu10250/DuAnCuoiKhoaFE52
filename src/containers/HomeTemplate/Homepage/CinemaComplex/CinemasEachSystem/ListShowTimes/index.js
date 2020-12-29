import React from "react";
import CollapsableCard from "../../../../../../components/CollapsableCard";

export default function ListShowTimes({ listMovies }) {
  const renderListShowTimes = () => {
    return listMovies.map((item, index) => {
      return (
        <CollapsableCard
          key={index}
          maCode={item.maPhim}
          hinhAnh={item.hinhAnh}
          title={item.tenPhim}
          scheduleList={item.lstLichChieuTheoPhim}
        />
      );
    });
  };

  return (
    <div className="accordion film__container">{renderListShowTimes()}</div>
  );
}
