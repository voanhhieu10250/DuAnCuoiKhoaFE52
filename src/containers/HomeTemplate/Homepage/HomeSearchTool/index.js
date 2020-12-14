import React, { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetMovieDetailsApi } from "../../../../redux/actions/actMovieDetailsApi";
import handleExchangeDateString from "../../../../functions/exchangeDateString";

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
      detail: "Ngày xem",
    },
    time: {
      id: 4,
      detail: "Suất chiếu",
    },
    ngayGioChieuTheoPhim: [],
    ticketInfo: "",
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
            {content.detail}
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
        let listScreenings = ngayGioChieuTheoPhim.map((date) => {
          return handleExchangeDateString(date, "date");
        });
        // Lọc lại mảng, cắt bỏ các ngày bị trùng lặp
        for (let index = 0; index < listScreenings.length; index++) {
          while (listScreenings[index] === listScreenings[index + 1]) {
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
              {item}
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
        date.detail !== "Ngày xem"
      ) {
        let tempListDate = ngayGioChieuTheoPhim.map((item) =>
          handleExchangeDateString(item, "date/time")
        );
        for (let object of tempListDate) {
          if (object.date === date.detail) {
            timeList.push(object.time);
          }
        }
        return timeList.map((time, index) => (
          <button
            className="dropdown-item"
            key={index}
            onClick={() => handleChoosing(time, id)}
          >
            {time}
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
          ...state,
          movie: {
            ...state.movie, //nhớ là phải copy lại, vì movie cũng là 1 cái object
            detail: item.tenPhim,
          },
          theater: {
            ...state.theater,
            detail: "Rạp",
          },
          date: {
            ...state.date,
            detail: "Ngày xem",
          },
          time: {
            ...state.time,
            detail: "Suất chiếu",
          },
          ticketInfo: "",
        });
        dispatch(actGetMovieDetailsApi(item.maPhim));
        break;
      case 2:
        let cacSuatChieuHienCo = item.cumRapChieu.map((rap) => {
          return rap.lichChieuPhim.map((thongTinSuatChieu) => {
            return thongTinSuatChieu.ngayChieuGioChieu;
          });
        });
        let rapDangChon = item.cumRapChieu.map((rap) => rap.tenCumRap);
        if (rapDangChon[0] === state.theater.detail) return;
        setstate({
          ...state,
          theater: {
            ...state.theater,
            detail: rapDangChon[0],
          },
          date: {
            ...state.date,
            detail: "Ngày xem",
          },
          time: {
            ...state.time,
            detail: "Suất chiếu",
          },
          ticketInfo: "",
          ngayGioChieuTheoPhim: cacSuatChieuHienCo[0],
        });
        break;
      case 3:
        if (item === state.date.detail) return;
        setstate({
          ...state,
          date: {
            ...state.date,
            detail: item,
          },
          time: {
            ...state.time,
            detail: "Suất chiếu",
          },
          ticketInfo: "",
        });
        break;
      case 4:
        let { movie, theater, date, time } = state;
        setstate({
          ...state,
          time: {
            ...state.time,
            detail: item,
          },
          ticketInfo: {
            movie: movie.detail,
            theater: theater.detail,
            date: date.detail,
            time: time.detail,
          },
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
        {state.ticketInfo !== "" ? (
          <button className="btn text-white btnMuaVeActivated">
            MUA VÉ NGAY
          </button>
        ) : (
          <button className="btn btn-primary btnMuaVe">MUA VÉ NGAY</button>
        )}
      </div>
    </div>
  );
}

export default memo(HomeSearchTool);
