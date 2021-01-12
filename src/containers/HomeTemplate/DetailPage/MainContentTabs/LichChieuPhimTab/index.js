import React, { memo } from "react";
import { useSelector } from "react-redux";
import ShowingDaysTable from "./ShowingDaysTable";
import { getListCinemaAddress } from "./ShowingDaysTable/getListCinemaAddress";

function LichChieuPhimTab() {
  const listCinema = useSelector((state) => state.ListCinemaSystemReducer.data);
  const ObjMovieDetail = useSelector((state) => state.MovieDetailsReducer.data);
  const cinemasData = useSelector(
    (state) => state.ListCinemaShowTimesReducer.data
  );
  const renderListCinema = () => {
    if (!listCinema) return;
    const tempObj = ObjMovieDetail.heThongRapChieu.map(
      (item) => item.maHeThongRap
    );
    if (tempObj.length > 0) {
      return listCinema.map((item, index) => (
        <li key={index}>
          <button
            data-toggle="tab"
            data-target={`#${item.maHeThongRap}`}
            aria-expanded={tempObj[0] === item.maHeThongRap ? "true" : "false"}
            className={tempObj[0] === item.maHeThongRap ? "active" : ""}
          >
            <img src={item.logo} alt="" />
            <div className="wrap_cinema">
              <p className="cinema_name m-0">{item.tenHeThongRap}</p>
            </div>
          </button>
        </li>
      ));
    } else {
      return listCinema.map((item, index) => (
        <li key={index}>
          <button
            data-toggle="tab"
            data-target={`#${item.maHeThongRap}`}
            aria-expanded={index === 0 ? "true" : "false"}
            className={index === 0 ? "active" : ""}
          >
            <img src={item.logo} alt="" />
            <div className="wrap_cinema">
              <p className="cinema_name m-0">{item.tenHeThongRap}</p>
            </div>
          </button>
        </li>
      ));
    }
  };

  // lấy mã hệ thống dựa vào đây
  const renderTabContent = () => {
    if (!ObjMovieDetail || !cinemasData || !listCinema) return;
    // Lấy danh sách địa chỉ của các cinema trong từng hệ thống rạp
    const cinemasBox = getListCinemaAddress(cinemasData);
    // Lấy danh sách tên của các cinema hiện đang có suất chiếu của phim này
    const tempObj = ObjMovieDetail.heThongRapChieu.map(
      (item) => item.maHeThongRap
    );
    if (tempObj.length > 0) {
      const checkedCinemaAddress = tempObj.map((str) => {
        return cinemasBox.find((item) => item.maHeThongRap === str);
      });
      return listCinema.map((item, index) => {
        return (
          <div
            // So sánh để hiện ra những cinema nào có suất chiếu lên trước, những cinema không có suất chiếu sẽ ẩn
            className={
              tempObj[0] === item.maHeThongRap
                ? "tab-pane fade show active"
                : "tab-pane fade"
            }
            id={item.maHeThongRap}
            key={index}
          >
            <ShowingDaysTable
              ObjMovieDetail={ObjMovieDetail.heThongRapChieu.find(
                (index) => index.maHeThongRap === item.maHeThongRap
              )}
              boxCinemasAddress={checkedCinemaAddress.find(
                (obj) => obj.maHeThongRap === item.maHeThongRap
              )}
            />
          </div>
        );
      });
    } else {
      return listCinema.map((item, index) => {
        return (
          <div
            className={
              index === 0 ? "tab-pane fade show active" : "tab-pane fade"
            }
            id={item.maHeThongRap}
            key={index}
          >
            <ShowingDaysTable />
          </div>
        );
      });
    }
  };

  if (!ObjMovieDetail || !listCinema) return <div></div>;
  return (
    <div className="tab-pane fade show active" id="lichChieuPhim">
      <div
        className="col-12 mainMaxWidth2 px-0 detailMainStyle"
        id="detailCinemaComplex"
      >
        <ul className="nav nav-tabs flex-column listCinemas">
          {renderListCinema()}
        </ul>
        <div className="tab-content" id="listAvailableDay">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default memo(LichChieuPhimTab);
