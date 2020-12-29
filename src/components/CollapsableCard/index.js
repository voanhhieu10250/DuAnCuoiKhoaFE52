import React from "react";
import handleExchangeDateString from "../../functions/exchangeDateString";

export default function CollapsableCard({
  maCode,
  hinhAnh,
  title,
  scheduleList,
}) {
  const renderMovieSchedule = (listMovieSchedule) => {
    let lastestDate = "";
    let timeList = [];

    // Duyệt mảng và lấy ngày gần với hiện tại nhất gán vào biến lastestDate
    listMovieSchedule.forEach((item) => {
      let tempDate = handleExchangeDateString(
        item.ngayChieuGioChieu,
        "date/time"
      );
      if (tempDate.date > lastestDate) lastestDate = tempDate.date;
    });
    // Duyệt mảng và lấy danh sách giờ chiếu hiện có của ngày gần với hiện tại nhất
    listMovieSchedule.forEach((item) => {
      let tempDate = handleExchangeDateString(
        item.ngayChieuGioChieu,
        "date/time"
      );
      if (tempDate.date === lastestDate) timeList.push(tempDate.time);
    });
    return timeList.map((item, index) => (
      <a href="/" key={index}>
        <span className="start_time">{item}</span> ~ {handleIncreaceTime(item)}
      </a>
    ));
  };

  const handleIncreaceTime = (time) => {
    let hour = Number(time.slice(0, time.indexOf(":")));
    let minute = Number(time.slice(time.indexOf(":") + 1));
    minute += 90;
    while (minute > 59) {
      hour += 1;
      minute -= 60;
    }
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    return `${hour}:${minute}`;
  };
  return (
    <div className="card">
      <div className="card-header" id={`heading${maCode}`}>
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left"
            type="button"
            data-toggle="collapse"
            data-target={`#collapse${maCode}`}
            aria-expanded="true"
            aria-controls={`collapse${maCode}`}
          >
            <img src={hinhAnh} className="movieImage" alt="" />
            <div className="wrapInfo">
              <p>
                <span className="spanRed ageType">C16</span>
                <span className="movieTitle">{title}</span>
              </p>
              <p>100 phút - TIX 6.4 - IMDb 7</p>
            </div>
          </button>
        </h2>
      </div>
      <div
        id={`collapse${maCode}`}
        className="collapse show"
        aria-labelledby={`heading${maCode}`}
      >
        <div className="card-body">
          <p className="s-version">2D Digital</p>
          <div className="session">{renderMovieSchedule(scheduleList)}</div>
        </div>
      </div>
    </div>
  );
}
