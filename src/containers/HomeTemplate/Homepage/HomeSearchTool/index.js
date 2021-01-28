import React, { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetMovieDetailsApi } from "../../../../redux/actions/actMovieDetailsApi";
import handleExchangeDateString from "../../../../functions/exchangeDateString";
import { Link } from "react-router-dom";

function HomeSearchTool() {
  const dispatch = useDispatch();
  const loadMovie = useSelector((state) => state.ListMovieReducer.loading);
  const listMovie = useSelector((state) => state.ListMovieReducer.data);
  const loadTheater = useSelector((state) => state.MovieDetailsReducer.loading);
  const movieDetails = useSelector((state) => state.MovieDetailsReducer.data);

  const [state, setstate] = useState({
    movie: {
      id: 1,
      detail: "Phim",
    },
    theater: {
      id: 2,
      detail: "Rạp",
    },
    date: {
      id: 3,
      detail: { date: "Ngày xem", maLichChieu: "" },
    },
    time: {
      id: 4,
      detail: "Suất chiếu",
    },
    ngayGioChieuTheoPhim: [],
    ticketCode: "",
  });

  const renderDropdown = (content, size) => {
    return (
      <div className={`${size} p-0 borderRight`}>
        <div className="dropdown">
          <button
            className="dropdown-toggle selectMenu"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {content.id === 3 ? content.detail.date : content.detail}
          </button>
          <div
            className="scrollBarStyle dropdown-menu"
            aria-labelledby="dropdownMenuButton"
          >
            {renderDropdownTable(content.id)}
          </div>
        </div>
      </div>
    );
  };

  const renderDropdownTable = (id) => {
    // Nếu là tab phim thì hiện dropdown list phim
    if (id === 1) {
      if (loadMovie)
        return <button className="dropdown-item">Loading...</button>;
      if (listMovie && listMovie.length > 0) {
        return listMovie.map((item, index) => {
          return (
            <button
              className="dropdown-item"
              key={index}
              onClick={() => handleChoosing(item, id)}
            >
              {item.tenPhim}
            </button>
          );
        });
      }
    }
    if (id === 2) {
      if (loadTheater)
        return <button className="dropdown-item">Loading...</button>;
      if (movieDetails && state.movie.detail !== "Phim") {
        return movieDetails.heThongRapChieu.map((item, index) => {
          return (
            <button
              className="dropdown-item"
              key={index}
              onClick={() => handleChoosing(item, id)}
            >
              {item.cumRapChieu.map((itemCupRap) => itemCupRap.tenCumRap)}
            </button>
          );
        });
      } else
        return <button className="dropdown-item">Vui lòng chọn phim</button>;
    }
    if (id === 3) {
      let { movie, theater, ngayGioChieuTheoPhim } = state;
      if (movie.detail !== "Phim" && theater.detail !== "Rạp") {
        // Chuyển mảng chứa arr ngày giờ chiếu từ định dạng ISO thành định dạng yyyy-mm-dd và gán cho mảng mới
        let listScreenings = ngayGioChieuTheoPhim.map((item) => {
          const tempString = handleExchangeDateString(
            item.ngayChieuGioChieu,
            "date"
          );
          return { date: tempString, maLichChieu: item.maLichChieu };
        });
        // Lọc lại mảng, cắt bỏ các ngày bị trùng lặp
        for (let index = 0; index < listScreenings.length - 1; index++) {
          while (
            listScreenings[index].date === listScreenings[index + 1].date
          ) {
            listScreenings.splice(index + 1, 1);
          }
        }
        return listScreenings.map((item, index) => {
          return (
            <button
              className="dropdown-item"
              key={index}
              onClick={() => handleChoosing(item, id)}
            >
              {item.date}
            </button>
          );
        });
      }
      return (
        <button className="dropdown-item">Vui lòng chọn phim và rạp</button>
      );
    }
    if (id === 4) {
      let { ngayGioChieuTheoPhim, date, movie, theater } = state;
      let timeList = [];
      if (
        movie.detail !== "Phim" &&
        theater.detail !== "Rạp" &&
        date.detail.date !== "Ngày xem"
      ) {
        let tempListDate = ngayGioChieuTheoPhim.map((item) => {
          const tempObj = handleExchangeDateString(
            item.ngayChieuGioChieu,
            "date/time"
          );
          return { dateTime: tempObj, maLichChieu: item.maLichChieu };
        });
        for (let object of tempListDate) {
          if (object.dateTime.date === date.detail.date) {
            timeList.push(object);
          }
        }
        return timeList.map((time, index) => (
          <button
            className="dropdown-item"
            key={index}
            onClick={() => handleChoosing(time, id)}
          >
            {time.dateTime.time}
          </button>
        ));
      }
      return (
        <button className="dropdown-item">
          Vui lòng chọn phim, rạp và ngày xem
        </button>
      );
    }
  };

  const handleChoosing = (item, id) => {
    switch (id) {
      case 1:
        if (item.tenPhim === state.movie.detail) return;
        setstate({
          movie: {
            ...state.movie,
            detail: item.tenPhim,
          },
          theater: {
            id: 2,
            detail: "Rạp",
          },
          date: {
            id: 3,
            detail: { date: "Ngày xem", maLichChieu: "" },
          },
          time: {
            id: 4,
            detail: "Suất chiếu",
          },
          ngayGioChieuTheoPhim: [],
          ticketCode: "",
        });
        dispatch(actGetMovieDetailsApi(item.maPhim));
        break;
      case 2:
        let cacSuatChieuHienCo = [];
        item.cumRapChieu.forEach((rap) => {
          const tempArr = rap.lichChieuPhim.map((thongTinSuatChieu) => {
            return {
              ngayChieuGioChieu: thongTinSuatChieu.ngayChieuGioChieu,
              maLichChieu: thongTinSuatChieu.maLichChieu,
            };
          });
          cacSuatChieuHienCo.push(...tempArr);
        });
        let rapDangChon = item.cumRapChieu.map((rap) => rap.tenCumRap);
        if (rapDangChon[0] === state.theater.detail) return;
        setstate({
          ...state,
          theater: {
            ...state.theater,
            detail: rapDangChon[0],
          },
          ngayGioChieuTheoPhim: [...cacSuatChieuHienCo],
          date: {
            id: 3,
            detail: { date: "Ngày xem", maLichChieu: "" },
          },
          time: {
            id: 4,
            detail: "Suất chiếu",
          },
          ticketCode: "",
        });
        break;
      case 3:
        if (item.date === state.date.detail.date) return;
        setstate({
          ...state,
          date: {
            ...state.date,
            detail: item,
          },
          time: {
            id: 4,
            detail: "Suất chiếu",
          },
          ticketCode: "",
        });
        break;
      case 4:
        setstate({
          ...state,
          time: {
            ...state.time,
            detail: item.dateTime.time,
          },
          ticketCode: item.maLichChieu,
        });
        break;
      default:
        return;
    }
  };

  return (
    <div id="homeTools" className="row">
      {renderDropdown(state.movie, "col-4")}
      {renderDropdown(state.theater, "col-2")}
      {renderDropdown(state.date, "col-2")}
      {renderDropdown(state.time, "col-2")}
      <div className="col-2">
        {state.ticketCode !== "" ? (
          <button className="btn text-white btnMuaVeActivated">
            <Link
              to={`/checkout/${state.ticketCode}`}
              style={{
                display: "block",
                color: "inherit",
                width: "100%",
                padding: "9px 22px",
              }}
            >
              MUA VÉ NGAY
            </Link>
          </button>
        ) : (
          <button className="btn btn-primary btnMuaVe" disabled>
            MUA VÉ NGAY
          </button>
        )}
      </div>
    </div>
  );
}

export default memo(HomeSearchTool);
