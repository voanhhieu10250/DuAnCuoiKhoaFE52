import React, { Fragment, memo, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BookedSeatsContext } from "../../../contexts";
import {
  useForm,
  validateEmail,
  validateVnPhoneNum,
} from "../../../functions/useForm";
import exclamation from "../../../img/icons/exclamation.png";
import zaloLogo from "../../../img/icons/ZaloPay.jpg";
import CCicon from "../../../img/icons/CCicon.png";
import { actPostBookedSeat } from "../../../redux/actions/actPostBookedSeats";
import { useHistory } from "react-router-dom";

const RightCheckout = () => {
  const { bookedSeats } = useContext(BookedSeatsContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const account = JSON.parse(localStorage.getItem("UserAccount"));
  const detailRoom = useSelector((state) => state.DetailCinemaRoomReducer.data);
  const [onToggle, setOnToggle] = useState(false);
  const [checked, setChecked] = useState("ZaloPay");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [{ email, phone }, setFormState] = useForm({
    email: account.email,
    phone: "",
  });
  const validEmail = validateEmail(email);
  const validPhone = validateVnPhoneNum(phone);

  const handleClickedConfirm = () => {
    const danhSachVe = bookedSeats.map((item) => ({
      maGhe: item.maGhe,
      giaVe: item.giaVe,
    }));
    const data = {
      maLichChieu: detailRoom.thongTinPhim.maLichChieu,
      danhSachVe,
      taiKhoanNguoiDung: account.taiKhoan,
    };
    const bookedDate = Date.now();
    const listTicket = convertSeatNamesToString();
    const ticketData = {
      thongTinPhim: detailRoom.thongTinPhim,
      listTicket,
      maVe: bookedDate,
    };
    localStorage.setItem("ticket", JSON.stringify(ticketData));
    dispatch(actPostBookedSeat(data, account.accessToken, history));
  };

  const handleSubmit = () => {
    if (!validPhone) setOnToggle(true);
    if (validEmail && validPhone && bookedSeats.length > 0) {
      setOpenConfirm(true);
    }
  };

  const handleChoosePayMethod = (e) => {
    setChecked(e.target.name);
  };

  const totalPrice = () => {
    let total = 0;
    bookedSeats.forEach((i) => {
      total += i.giaVe;
    });
    total = total.toLocaleString({
      style: "currency",
      currency: "VND",
    });
    return total;
  };

  const convertSeatNamesToString = () => {
    const listSeatNames = bookedSeats.map((i) => {
      let rowIndex = (parseInt(i.tenGhe) - 12) / 13;
      if (rowIndex < 0) rowIndex = 0;
      return String.fromCharCode(rowIndex + 65) + i.tenGhe;
    });
    return listSeatNames.join(", ");
  };

  return (
    <Fragment>
      <div id="rightCheckout">
        <div className="contentFullRight scrollBarStyle">
          <div className="mx-0 total">
            <p className="cash">{bookedSeats ? totalPrice() : 0} đ</p>
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
                {bookedSeats && convertSeatNamesToString()}
              </span>
            </div>
            <div className="totalChair col-sm-5 col-5">
              {bookedSeats ? totalPrice() : 0} đ
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
              style={{ display: !validEmail ? "contents" : "none" }}
            >
              {!email
                ? "Email không được bỏ trống"
                : "Email không đúng định dạng"}
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
                onBlur={() => {
                  setOnToggle(true);
                }}
                onKeyUp={() => {
                  setOnToggle(true);
                }}
                required
              />
              <label htmlFor="phoneCheckout">Phone</label>
            </div>
            <div
              className="inputError"
              style={{
                display: !validPhone && onToggle ? "contents" : "none",
              }}
            >
              {!phone
                ? "Phone không được bỏ trống"
                : "Phone không đúng định dạng"}
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
            <div
              className="subtitlePayMethod"
              style={{ display: bookedSeats.length > 0 ? "none" : "block" }}
            >
              Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
            </div>
            <div
              className="chosenMethod"
              style={{ display: bookedSeats.length === 0 ? "none" : "block" }}
            >
              <input
                type="radio"
                name="ZaloPay"
                checked={checked === "ZaloPay" ? true : false}
                onChange={handleChoosePayMethod}
              />
              <img src={zaloLogo} className="icon" alt="zalo pay" />
              <div className="titleChosen">Thanh toán qua ZaloPay</div>
            </div>
            <div
              className="chosenMethod"
              style={{ display: bookedSeats.length === 0 ? "none" : "block" }}
            >
              <input
                type="radio"
                name="CC"
                checked={checked === "CC" ? true : false}
                onChange={handleChoosePayMethod}
              />
              <img src={CCicon} className="icon" alt="CC" />
              <div className="titleChosen">Visa, Master, JCB</div>
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
          style={
            bookedSeats.length > 0 && validPhone && validEmail
              ? null
              : {
                  backgroundColor: "#afafaf",
                  backgroundImage: "none",
                  cursor: "default",
                }
          }
          onClick={handleSubmit}
        >
          Đặt Vé
        </button>
      </div>
      <div
        id="confirmModal"
        style={{ display: openConfirm ? "block" : "none" }}
      >
        <div className="modalAge">
          <div className="modal_body">
            <p className="title">
              <span className="spanRed">C16</span> Phim dành cho khán giả từ 16
              tuổi trở lên
            </p>
            <p style={{ fontSize: 16 }}>
              Hãy xác nhận bạn đang mua vé cho khán giả từ <b>16 tuổi</b> trở
              lên. Theo quy định của Bộ Văn Hoá, Thể Thao và Du Lịch, khán giả
              sẽ không được vào rạp và không được hoàn trả tiền vé nếu không
              chứng thực được độ tuổi của mình là từ <b>16 tuổi</b> trở lên.
            </p>
          </div>
          <div className="row mx-0 modal_footer">
            <div
              className="col-6 btn_close"
              onClick={() => setOpenConfirm(false)}
            >
              Hủy
            </div>
            <div className="col-6 btn_go" onClick={handleClickedConfirm}>
              Xác nhận
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(RightCheckout);
