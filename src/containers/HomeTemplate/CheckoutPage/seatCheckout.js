import React, { Fragment, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import TimeCounter from "./timer";
import screen from "../../../img/screen.png";
import SeatComponent from "./seatComponent";

const SeatCheckout = ({ setSeat }) => {
  const seatsPerRow = 16;
  const listCinema = useSelector((state) => state.ListCinemaSystemReducer.data);
  const detailRoom = useSelector((state) => state.DetailCinemaRoomReducer.data);
  const [refresh, setRefresh] = useState(false);

  const renderSeats = () => {
    const listSeat = detailRoom.danhSachGhe.map((item, index) => (
      <SeatComponent currentSeat={item} key={index} setSeat={setSeat} />
    ));
    const listRow = [];
    for (let i = 0; i < listSeat.length / seatsPerRow; i++) {
      listRow.push(
        <div className="rowSeat" key={i}>
          <div
            className="seat"
            style={{
              cursor: "default",
              marginRight: 25,
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            {String.fromCharCode(i + 65)}
          </div>
          {renderSeatPerRow(i, listSeat)}
        </div>
      );
    }
    return listRow;
  };

  const renderSeatPerRow = (i, listSeat) => {
    const tempList = [];
    for (let y = i * seatsPerRow; y < i * seatsPerRow + seatsPerRow - 1; y++) {
      if (!listSeat[y]) break;
      tempList.push(listSeat[y]);
    }
    return tempList;
  };

  const cinemaLogo = () => {
    const cinema = listCinema.find(
      (item) =>
        detailRoom.thongTinPhim.tenCumRap
          .toLowerCase()
          .search(item.tenHeThongRap.toLowerCase()) !== -1
    );
    return cinema.logo;
  };

  const openRefreshModal = useCallback(() => {
    setRefresh(true);
  }, []);

  return (
    <Fragment>
      <div id="seatCheckout">
        <div className="row mx-0" id="seats">
          <div className="topContent">
            <div className="leftContent">
              <div className="logoCinema">
                {listCinema ? (
                  <img
                    src={cinemaLogo()}
                    alt="Cinema logo"
                    style={{ width: "100%" }}
                  />
                ) : (
                  <div style={{ width: "100%" }} />
                )}
              </div>
              <div className="contentCinema">
                <div
                  className="address"
                  style={{ marginTop: 1, marginBottom: 10, fontSize: 16 }}
                >
                  <span style={{ color: "#008FE5" }}>
                    {detailRoom.thongTinPhim.tenCumRap.slice(
                      0,
                      detailRoom.thongTinPhim.tenCumRap.indexOf(" -")
                    )}
                  </span>
                  <span>
                    {detailRoom.thongTinPhim.tenCumRap.slice(
                      detailRoom.thongTinPhim.tenCumRap.indexOf(" - ")
                    )}
                  </span>
                </div>
                <div className="hour" style={{ marginTop: 3 }}>
                  {detailRoom.thongTinPhim.ngayChieu} -{" "}
                  {detailRoom.thongTinPhim.gioChieu} -{" "}
                  {detailRoom.thongTinPhim.tenRap}
                </div>
              </div>
            </div>
            <div className="rightContent">
              <p className="info1">thời gian giữ ghế</p>
              <TimeCounter stopCounter={openRefreshModal} />
            </div>
          </div>
          <div className="seatMap" style={{ marginTop: 10, width: "100%" }}>
            <div className="parent">
              <div
                className="room"
                style={{ margin: "auto", textAlign: "center" }}
              >
                <div className="screen">
                  <img src={screen} alt="Screen" style={{ width: "90%" }} />
                </div>
                <div className="listSeat">
                  <div
                    style={{
                      textAlign: "left",
                      margin: "auto",
                      width: "fit-content",
                    }}
                  >
                    {detailRoom && renderSeats()}
                  </div>
                </div>
              </div>
            </div>
            <div className="noteSeat"></div>
          </div>
        </div>
      </div>
      <div id="rebookTicket" style={{ display: !refresh ? "none" : "block" }}>
        <div className="rebookContent">
          Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5
          phút.
          <button onClick={() => window.location.reload()}>Đặt vé lại</button>
        </div>
      </div>
    </Fragment>
  );
};

export default SeatCheckout;
