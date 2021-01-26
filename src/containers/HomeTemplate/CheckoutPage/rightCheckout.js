import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../../functions/useForm";
import exclamation from "../../../img/icons/exclamation.png";

const RightCheckout = ({ listBookedChair }) => {
  const account = JSON.parse(localStorage.getItem("UserAccount"));
  const detailRoom = useSelector((state) => state.DetailCinemaRoomReducer.data);
  const [{ email, phone }, setFormState] = useForm({
    email: account.email,
    phone: "+84-",
  });

  const totalPrice = () => {
    let total = 0;
    listBookedChair.forEach((i) => {
      total += i.giaVe;
    });
    total = total.toLocaleString({
      style: "currency",
      currency: "VND",
    });
    return total;
  };

  const convertSeatNamesToString = () => {
    const listSeatNames = listBookedChair.map((i) => {
      let rowIndex = (parseInt(i.tenGhe) - 12) / 13;
      if (rowIndex < 0) rowIndex = 0;
      return String.fromCharCode(rowIndex + 65) + i.tenGhe;
    });
    return listSeatNames.join(", ");
  };

  return (
    <div id="rightCheckout" style={{ right: 0 }}>
      <div className="contentFullRight scrollBarStyle">
        <div className="mx-0 total">
          <p className="cash">{listBookedChair ? totalPrice() : 0} đ</p>
        </div>
        <div className="cinemaInfo">
          <span className="spanRed">
            <strong>C18</strong>
          </span>
          {detailRoom.thongTinPhim.tenPhim}
          <div className="contentCinema">
            <div className="address" style={{ fontWeight: "normal" }}>
              {detailRoom.thongTinPhim.tenCumRap}
            </div>
            <div className="hour" style={{ marginTop: 3 }}>
              {detailRoom.thongTinPhim.ngayChieu} -{" "}
              {detailRoom.thongTinPhim.gioChieu} -{" "}
              {detailRoom.thongTinPhim.tenRap}
            </div>
          </div>
        </div>
        <div className="row mx-0 chair">
          <div className="info col-sm-7 col-7">
            <span style={{ color: "#fb4226" }}>Ghế </span>
            <span className="title">
              {listBookedChair && convertSeatNamesToString()}
            </span>
          </div>
          <div className="totalChair col-sm-5 col-5">
            {listBookedChair ? totalPrice() : 0} đ
          </div>
        </div>
        <div className="infoUser">
          <div className="mx-0 row">
            <input
              id="emailCheckout"
              name="email"
              className="content col-sm-10 col-10"
              type="text"
              value={email}
              onChange={setFormState}
              required
            />
            <label htmlFor="emailCheckout">E-mail</label>
          </div>
          <div
            className="inputError"
            style={{ display: !email ? "contents" : "none" }}
          >
            Email không được bỏ trống
          </div>
        </div>
        <div className="infoUser">
          <div className="mx-0 row">
            <input
              id="phoneCheckout"
              name="phone"
              className="content col-sm-10 col-10"
              type="text"
              value={phone}
              onChange={setFormState}
              required
            />
            <label htmlFor="phoneCheckout">Phone</label>
          </div>
          <div
            className="inputError"
            style={{
              display: phone.length > 15 ? "contents" : "none",
            }}
          >
            Độ dài số phone không phù hợp
          </div>
        </div>
        <div className="infoUser">
          <div className="mx-0 row">
            <input
              id="discountCheckout"
              className=" col-sm-10 col-10"
              type="text"
              placeholder="Nhập tại đây..."
              required
            />
            <label htmlFor="discountCheckout">Mã giảm giá</label>
          </div>
        </div>
        <div className="payMethod">
          <div className="titlePayMethod" style={{ marginBottom: 5 }}>
            Hình thức thanh toán
          </div>
          <div className="subtitlePayMethod">
            Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
          </div>
        </div>
        <div className="notice">
          <img className="icon" src={exclamation} alt="exclamation" />
          <span className="content">
            Vé đã mua không thể đổi hoặc hoàn tiền <br />
          </span>
          <span className="content">
            Mã vé sẽ được gửi qua tin nhắn
            <span style={{ color: "#f79320" }}> ZMS</span> (tin nhắn Zalo) và{" "}
            <span style={{ color: "#f79320" }}>Email</span> đã nhập.
          </span>
        </div>
      </div>
      <button
        className="buyTicket"
        style={{ backgroundColor: "#afafaf", backgroundImage: "none" }}
        disabled
      >
        Đặt Vé
      </button>
    </div>
  );
};

export default memo(RightCheckout);
