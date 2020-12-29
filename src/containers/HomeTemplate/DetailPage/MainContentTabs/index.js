import React from "react";

export default function MainContentTabs() {
  const dateAmount = 9;
  return (
    <div className="mainMaxWidth2 contentMain">
      <ul className="nav nav-tabs navCenter" role="tablist">
        <li>
          <button
            data-toggle="tab"
            data-target="#lichChieuPhim"
            aria-expanded="true"
            className="active"
          >
            Lịch Chiếu
          </button>
        </li>
        <li>
          <button
            data-toggle="tab"
            data-target="#thongTinPhim"
            aria-expanded="false"
          >
            Thông Tin
          </button>
        </li>
        <li>
          <button
            data-toggle="tab"
            data-target="#danhGiaPhim"
            aria-expanded="false"
          >
            Đánh Giá
          </button>
        </li>
      </ul>
      <div className="tab-content text-white">
        <div className="tab-pane fade show active" id="lichChieuPhim">
          <div className="col-12 mainMaxWidth2 px-0" id="detailCinemaComplex">
            <ul className="nav nav-tabs flex-column listCinemas">
              <li>
                <button
                  data-toggle="tab"
                  data-target="#theater-1"
                  aria-expanded="true"
                  className="active"
                >
                  <img src="./img/icons/bhd.png" alt="" />
                  <div className="wrap_cinema">
                    <p className="cinema_name m-0">BHD Star Cineplex</p>
                  </div>
                </button>
              </li>
              <li>
                <button
                  data-toggle="tab"
                  data-target="#theater-2"
                  aria-expanded="false"
                >
                  rạp 2
                </button>
              </li>
              <li>
                <button
                  data-toggle="tab"
                  data-target="#theater-3"
                  aria-expanded="false"
                >
                  rạp 3
                </button>
              </li>
            </ul>
            <div className="tab-content" id="listAvailableDay">
              <div className="tab-pane fade show active" id="theater-1">
                <div id="listShowingDay">
                  <ul
                    className="nav nav-tabs wrapDayOfWeek"
                    style={{ width: `calc(100%*${dateAmount}/7)` }}
                  >
                    <li className="selectDate">
                      <button
                        data-toggle="tab"
                        data-target="#sessionFilm-1"
                        aria-expanded="true"
                        className="active"
                      >
                        <p className="day m-0">Thứ 2</p>
                        <p className="date m-0">31</p>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="listSession">
                  <div className="tab-pane fade show active" id="sessionFilm-1">
                    <div className="accordion">collapsable Cards</div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="theater-2">
                theater 2
              </div>
              <div className="tab-pane fade" id="theater-3">
                theater 3
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="thongTinPhim">
          thông tin phim
        </div>
        <div className="tab-pane fade" id="danhGiaPhim">
          đánh giá phim
        </div>
      </div>
    </div>
  );
}
