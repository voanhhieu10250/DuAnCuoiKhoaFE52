import React, { Fragment, memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { locationList } from "../../data";
import { Link as ScrollBtn, animateScroll as Scroll } from "react-scroll";
// icons
import webLogo from "../../img/icons/web-logo.png";
import avatarLogo from "../../img/icons/avatar.png";
import locationLogo from "../../img/icons/location-header.png";
import dropdownIcon from "../../img/icons/dropdown-icon.png";

function NavbarHome() {
  let location = useLocation();
  const [state, setState] = useState({ locationBase: locationList[0] });
  const [locationState, setLocationState] = useState(true);
  const userAccount = JSON.parse(localStorage.getItem("UserAccount"));
  useEffect(() => {
    if (location.pathname === "/" && locationState) setLocationState(false);
    if (location.pathname !== "/" && !locationState) setLocationState(true);
  }, [location.pathname, locationState]);

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
    if (location === state.locationBase) return;
    setState({
      locationBase: location,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("UserAccount");
    window.location.reload();
  };

  return (
    <div className="myNavBar">
      <nav className="navbar navbar-expand-md navbar-light" id="navbarHeader">
        {/* logo */}
        <div className="col-md-4 logo-pd">
          {locationState ? (
            <Link className="navbar-brand" to="/">
              <img src={webLogo} alt="logo" />
            </Link>
          ) : (
            <button
              className="navbar-brand"
              onClick={() => {
                Scroll.scrollToTop({ duration: 500 });
              }}
              style={{ border: "none", outline: "none" }}
            >
              <img src={webLogo} alt="logo" />
            </button>
          )}
        </div>
        {/* phần navbar giữa */}
        <div className="col-md-4">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto linkPage">
              <li className="nav-item">
                {locationState ? (
                  <Link
                    className="nav-link navbarLinkHover"
                    to="/?src=homeMovies"
                  >
                    Lịch Chiếu
                  </Link>
                ) : (
                  <ScrollBtn
                    activeClass="activeClass"
                    className="nav-link navbarLinkHover"
                    to="homeMovies"
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={500}
                  >
                    Lịch Chiếu
                  </ScrollBtn>
                )}
              </li>
              <li className="nav-item">
                {locationState ? (
                  <Link
                    className="nav-link navbarLinkHover"
                    to="/?src=homeCinemaComplex"
                  >
                    Cụm rạp
                  </Link>
                ) : (
                  <ScrollBtn
                    activeClass="activeClass"
                    className="nav-link navbarLinkHover"
                    to="homeCinemaComplex"
                    spy={true}
                    smooth={true}
                    offset={25}
                    duration={500}
                  >
                    Cụm rạp
                  </ScrollBtn>
                )}
              </li>
              <li className="nav-item">
                {locationState ? (
                  <Link
                    className="nav-link navbarLinkHover"
                    to="/?src=newsblock"
                  >
                    Tin Tức
                  </Link>
                ) : (
                  <ScrollBtn
                    activeClass="activeClass"
                    className="nav-link navbarLinkHover"
                    to="newsblock"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}
                  >
                    Tin Tức
                  </ScrollBtn>
                )}
              </li>
              <li className="nav-item">
                {locationState ? (
                  <Link
                    className="nav-link navbarLinkHover"
                    to="/?src=appblock"
                  >
                    Ứng dụng
                  </Link>
                ) : (
                  <ScrollBtn
                    activeClass="activeClass"
                    className="nav-link navbarLinkHover"
                    to="appblock"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={20}
                  >
                    Ứng dụng
                  </ScrollBtn>
                )}
              </li>
            </ul>
          </div>
        </div>
        {/* phần navbar phải */}
        <div className="col-md-4 pr-0 userAccount">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" id="account">
                {userAccount ? (
                  <Fragment>
                    <button type="button" id="userBtn">
                      <img
                        src={`https://i.pravatar.cc/150?u=${userAccount.taiKhoan}`}
                        alt="avatar"
                      />
                      <p className="white m-0 username">{userAccount.hoTen}</p>
                    </button>
                    <div id="logoutBtn">
                      <button onClick={handleLogout}>Đăng xuất</button>
                    </div>
                  </Fragment>
                ) : (
                  <Link to="/login">
                    <img src={avatarLogo} alt="login" />
                    <p className="white m-0">Đăng Nhập</p>
                  </Link>
                )}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    backgroundImage: `url(${dropdownIcon})`,
                  }}
                >
                  <img src={locationLogo} alt="" />
                  {state.locationBase}
                </a>
                <div
                  className="dropdown-menu scrollBarStyle"
                  aria-labelledby="navbarDropdown"
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
export default memo(NavbarHome);
