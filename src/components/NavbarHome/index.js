import React from "react";

export default function NavbarHome() {
  return (
    <div className="myNavBar">
      <nav className="navbar navbar-expand-md navbar-light" id="navbarHeader">
        {/* logo */}
        <div className="col-md-4 logo-pd">
          <a className="navbar-brand" href="#">
            <img src="./img/web-logo.png" alt="logo" />
          </a>
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
                  <img src="./img/location-header.png" alt />
                  Hồ Chí Minh
                  {/* <img src="./img/dropdown-icon.png" alt=""> */}
                </a>
                <div
                  className="dropdown-menu scrollBarStyle"
                  aria-labelledby="navbarDropdown"
                  id="dropdown-menu"
                >
                  <a className="dropdown-item" href="#">
                    Hồ Chí Minh
                  </a>
                  <a className="dropdown-item" href="#">
                    Hà Nội
                  </a>
                  <a className="dropdown-item" href="#">
                    Đà Nẵng
                  </a>
                  <a className="dropdown-item" href="#">
                    Hải Phòng
                  </a>
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
