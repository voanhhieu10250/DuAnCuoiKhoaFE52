import React, { Fragment, memo } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { StepCheckout, StepLeftSide, StepRightSide } from "./styles";
import defaultFilm from "../../img/Default-film.png";
import avatarLogo from "../../img/icons/avatar.png";
import xController from "../../img/icons/xController.png";

const CheckoutStepController = () => {
  const detailRoom = useSelector((state) => state.DetailCinemaRoomReducer.data);
  const userAccount = JSON.parse(localStorage.getItem("UserAccount"));
  const location = useLocation();
  const onResultPage =
    location.pathname.indexOf("/result") !== -1 ? true : false;

  return (
    <Fragment>
      <StepCheckout id="stepCheckout" fullSize={onResultPage}>
        <StepLeftSide className="stepLeftSide">
          <ul>
            <li className={!onResultPage ? "active" : ""}>
              <span className="stepNumber">01 </span>
              {"Chọn ghế & thanh toán"}
            </li>
            <li className={onResultPage ? "active" : ""}>
              <span className="stepNumber">02 </span>
              Kết quả đặt vé
            </li>
          </ul>
          <Link to="/" className="closeBtn">
            <img src={xController} alt="close" />
          </Link>
        </StepLeftSide>
        <StepRightSide className="stepRightSide">
          <div id="account">
            <p className="titleDisplay">
              <img
                className="btnLogin"
                src={
                  userAccount
                    ? `https://i.pravatar.cc/150?u=${userAccount.taiKhoan}`
                    : avatarLogo
                }
                alt="avatar"
              />
              <span>{userAccount ? userAccount.hoTen : "Tài khoản"}</span>
            </p>
          </div>
        </StepRightSide>
      </StepCheckout>
      <div
        id="leftCheckout"
        style={{
          backgroundImage: `url(${
            detailRoom ? detailRoom.thongTinPhim.hinhAnh : defaultFilm
          })`,
          left: onResultPage && detailRoom ? 0 : "-22%",
        }}
      >
        <div className="blurLeftImg" />
        {detailRoom && (
          <div
            className="titleFilm"
            style={{ display: onResultPage ? "block" : "none" }}
          >
            <p className="info1">{detailRoom.thongTinPhim.ngayChieu}</p>
            <p className="info2">
              <span className="spanRed">C16</span>
              {detailRoom.thongTinPhim.tenPhim}
            </p>
            <p className="info3">120 phút - TIX - IMDb 0 - 2D/Digital</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default memo(CheckoutStepController);
