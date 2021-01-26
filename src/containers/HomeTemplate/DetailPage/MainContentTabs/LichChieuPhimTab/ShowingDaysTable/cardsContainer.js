import React, { Fragment } from "react";
import CollapsableCard from "../../../../../../components/CollapsableCard";
import handleExchangeDateString from "../../../../../../functions/exchangeDateString";

export default function CardsContainer({
  cumRapChieu,
  logo,
  selectedDay,
  boxCinemasAddress,
}) {
  const renderCinameCards = () => {
    return cumRapChieu.map((item, index) => {
      // Lấy danh sách các ngảy hiện có suất chiếu của hệ thống rạp được chọn
      const danhSachLichChieu = item.lichChieuPhim.map((obj) => {
        return {
          date: handleExchangeDateString(obj.ngayChieuGioChieu, "date"),
          time: handleExchangeDateString(obj.ngayChieuGioChieu, "time"),
          maLichChieu: obj.maLichChieu,
        };
      });
      // Check xem trong danh sách ngày vừa lấy có ngày nào trùng với tabs ngày được chọn hay không
      const checkedList = danhSachLichChieu.filter(
        (str) => str.date === selectedDay
      );
      // nếu rạp của hệ thống này không có ngày trùng thì bỏ qua, còn có thì render collapsableCard cho rạp này
      if (checkedList.length === 0) return [];
      return (
        <CollapsableCard
          key={index}
          maCode={`${item.maCumRap}-${selectedDay}`}
          hinhAnh={logo}
          title={item.tenCumRap}
          scheduleList={checkedList}
          handleTime
          cinemaAddress={boxCinemasAddress.cinemas.find(
            (cinema) => cinema.maCumRap === item.maCumRap
          )}
        />
      );
    });
  };

  return <Fragment>{renderCinameCards()}</Fragment>;
}
