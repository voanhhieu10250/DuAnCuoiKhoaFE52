import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavbarHome() {
  let locationList = [
    "Hồ Chí Minh",
    "Hà Nội",
    "Đà Nẵng",
    "Hải Phòng",
    "Biên Hòa",
    "Nha Trang",
    "Bình Dương",
    "Phan Thiết",
    "Hạ Long",
    "Cần Thơ",
    "Vũng Tàu",
    "Quy Nhơn",
    "Huế",
    "An Giang",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
  ];
  const [state, setState] = useState({ locationBase: locationList[0] });

  const renderListLocation = () => {
    return locationList.map((item, index) => {
      return (
        <button
          className="dropdown-item"
          onClick={() => handleOnClick(item)}
          key={index}
        >
          {item}
        </button>
      );
    });
  };

  const handleOnClick = (location) => {
    console.log(location);
    setState({
      locationBase: location,
    });
  };

  return (
    <div className="myNavBar">
      <nav className="navbar navbar-expand-md navbar-light" id="navbarHeader">
        {/* logo */}
        <div className="col-md-4 logo-pd">
          <Link className="navbar-brand" to="/">
            <img src="./img/web-logo.png" alt="logo" />
          </Link>
        </div>
        {/* phần navbar giữa */}
        <div className="col-md-4">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto linkPage">
              <li className="nav-item active">
                <a className="nav-link navbarLinkHover" href="#">
                  Lịch Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbarLinkHover" href="#">
                  Cụm rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbarLinkHover" href="#">
                  Tin Tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbarLinkHover" href="#">
                  Ứng dụng
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* phần navbar phải */}
        <div className="col-md-4 pr-0">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" id="account">
                <a href="#">
                  <img src="./img/avatar.png" alt="login" />
                  <p className="white m-0">Đăng Nhập</p>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ backgroundImage: "url(./img/dropdown-icon.png)" }}
                >
                  <img src="./img/location-header.png" alt="" />
                  {state.locationBase}
                </a>
                <div
                  className="dropdown-menu scrollBarStyle"
                  aria-labelledby="navbarDropdown"
                  id="dropdown-menu"
                >
                  {renderListLocation()}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    </div>
  );
}
