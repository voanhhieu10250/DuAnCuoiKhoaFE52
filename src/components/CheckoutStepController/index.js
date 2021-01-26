import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import { StepCheckout, StepLeftSide, StepRightSide } from "./styles";

const CheckoutStepController = () => {
  const userAccount = JSON.parse(localStorage.getItem("UserAccount"));
  const location = useLocation();
  return (
    <StepCheckout id="stepCheckout">
      <StepLeftSide className="stepLeftSide">
        <ul>
          <li
            className={
              location.pathname.indexOf("/result") === -1 ? "active" : ""
            }
          >
            <span className="stepNumber">01 </span>
            {"Chọn ghế & thanh toán"}
          </li>
          <li
            className={
              location.pathname.indexOf("/result") !== -1 ? "active" : ""
            }
          >
            <span className="stepNumber">02 </span>
            Kết quả đặt vé
          </li>
        </ul>
      </StepLeftSide>
      <StepRightSide className="stepRightSide">
        <div id="account">
          <p className="titleDisplay">
            <img
              className="btnLogin"
              src={`https://i.pravatar.cc/150?u=${userAccount.taiKhoan}`}
              alt="avatar"
            />
            {userAccount.hoTen}
          </p>
        </div>
      </StepRightSide>
    </StepCheckout>
  );
};

export default memo(CheckoutStepController);
