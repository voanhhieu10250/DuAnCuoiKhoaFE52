import React, { Fragment } from "react";
import handleExchangeDateString from "../../../../../functions/exchangeDateString";
import { spliceSameArrObj } from "../../../../../functions/handleArrStuff";
import CardsContainer from "./cardsContainer";

export default function ShowingDaysTable({
  ObjMovieDetail,
  boxCinemasAddress,
}) {
  let datesForDisableTab = [
    `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
  ];

  const renderWrapDayOfWeek = (listDates) => {
    let listHTMLdayOfWeek = [];
    if (ObjMovieDetail) {
      listHTMLdayOfWeek = listDates.map((item, index) => (
        <li className="selectDate" key={index}>
          <button
            data-toggle="tab"
            data-target={`#${ObjMovieDetail.maHeThongRap}-${item}`}
            aria-expanded={index === 0 ? "true" : "false"}
            className={index === 0 ? "active" : ""}
          >
            <p className="day m-0">Tháng {item.slice(5, 7)}</p>
            <p className="date m-0">{item.slice(item.lastIndexOf("-") + 1)}</p>
          </button>
        </li>
      ));
    }

    let tempVar = 0;
    while (listHTMLdayOfWeek.length < 7) {
      listHTMLdayOfWeek.push(
        <li className="selectDate" key={listHTMLdayOfWeek.length + tempVar}>
          <button
            data-toggle="tab"
            data-target={`#bonusTabs`}
            aria-expanded="false"
            disabled
          >
            <p className="day m-0">Tháng {new Date().getMonth()}</p>
            <p className="date m-0">{new Date().getDate() + tempVar}</p>
          </button>
        </li>
      );
    }
    return listHTMLdayOfWeek;
  };

  const renderCinemaCollapsableCards = (listShowingDay) => {
    return listShowingDay.map((item, index) => (
      <div
        className={index === 0 ? "tab-pane fade show active" : "tab-pane fade"}
        id={`${ObjMovieDetail.maHeThongRap}-${item}`}
        key={index}
      >
        <div className="accordion">
          <CardsContainer
            cumRapChieu={ObjMovieDetail.cumRapChieu}
            logo={ObjMovieDetail.logo}
            selectedDay={item}
            boxCinemasAddress={boxCinemasAddress}
          />
        </div>
      </div>
    ));
  };

  const handleBrowsingListDate = (arr) => {
    // Lấy ra toàn bộ thời gian chiếu phim hiện có của hệ thống rạp
    let tempArr = arr.map((item) => {
      return item.lichChieuPhim.map((i) => i.ngayChieuGioChieu);
    });
    // Ghép 2 mảng nhỏ trong mảng lớn lại với nhau => thành 1 mảng
    while (tempArr.length > 1) {
      for (let i = 0; i < tempArr.length - 1; i++) {
        let tempArr2;
        tempArr2 = tempArr[i].concat(tempArr[i + 1]);
        tempArr[i] = tempArr2;
        tempArr.splice(1, 1);
      }
    }
    // loại bỏ bớt những string bị trùng nhau trong mảng và chuyển toàn bộ các phần tử trong mảng thành Date
    const listStringDate = spliceSameArrObj(tempArr[0]).map((item) =>
      handleExchangeDateString(item, "date")
    );
    // Tiếp tục loại bỏ bớt những ngày bị trùng nhau và trả về mảng chứa các ngày khác nhau hoàn chỉnh
    return spliceSameArrObj(listStringDate);
  };

  if (ObjMovieDetail) {
    const listMovieShowingDate = handleBrowsingListDate(
      ObjMovieDetail.cumRapChieu
    );
    const dateAmount =
      listMovieShowingDate.length > 6 ? listMovieShowingDate.length : 7;
    return (
      <Fragment>
        <div className="listShowingDay">
          <ul
            className="nav nav-tabs wrapDayOfWeek"
            style={{ width: `calc(100%*${dateAmount}/7)` }}
          >
            {renderWrapDayOfWeek(listMovieShowingDate)}
          </ul>
        </div>
        <div className="tab-content" id="listSession">
          {renderCinemaCollapsableCards(listMovieShowingDate)}
        </div>
      </Fragment>
    );
  }
  // Nếu không có bất kì suất chiếu nào thì render ra như sau
  return (
    <Fragment>
      <div className="listShowingDay">
        <ul className="nav nav-tabs wrapDayOfWeek" style={{ width: "100%" }}>
          {renderWrapDayOfWeek(datesForDisableTab)}
        </ul>
      </div>
      <div className="tab-content" id="listSession">
        <div className="tab-pane fade show active" id="sessionFilm-1">
          <div className="accordion text-center mt-3" style={{ color: "#333" }}>
            Không có suất chiếu
          </div>
        </div>
      </div>
    </Fragment>
  );
}
