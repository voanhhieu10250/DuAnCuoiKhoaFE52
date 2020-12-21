import React, { memo } from "react";
import { listPartner } from "../../data";

function HomeFooter() {
  const renderListPartner = (arr) => {
    const tempVar = arr.length % 5;
    let listIcons = [];

    for (let index = 0; index < (arr.length - tempVar) / 5; index++) {
      listIcons.push(
        <div className="row col-sm-12 col-xs-12 linePartner" key={index}>
          {renderContent(arr, index)}
        </div>
      );
    }
    if (tempVar !== 0) {
      listIcons.push(
        <div
          className="row col-sm-12 col-xs-12 linePartner"
          key={listIcons.length}
        >
          {redundantCase(arr, tempVar)}
        </div>
      );
    }
    return listIcons;
  };

  const renderContent = (arr, num) => {
    let index = num * 5;
    let returnList = [];
    while (index < num * 5 + 5) {
      returnList.push(
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={arr[index].href}
          title={arr[index].name}
          key={index * 5}
        >
          <img
            className={
              arr[index].special ? "iconConnect bg-light" : "iconConnect"
            }
            src={arr[index].img}
            alt=""
          />
        </a>
      );
      index++;
    }
    return returnList;
  };

  const redundantCase = (arr, index) => {
    let tempList = [];
    while (index !== 0) {
      tempList.push(
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={arr[arr.length - index].href}
          title={arr[arr.length - index].name}
          key={arr.length - index}
        >
          <img
            className={
              arr[arr.length - index].special
                ? "iconConnect bg-light"
                : "iconConnect"
            }
            src={arr[arr.length - index].img}
            alt=""
          />
        </a>
      );
      index--;
    }
    return tempList;
  };

  const renderCompanyInfo = () => (
    <div className="row mr-0 ml-0 text-center justify-content-center">
      {/* Company Logo */}
      <div className="col-md-1 p-0 col-12 imgFooter">
        <img className="vngIcon" src="./img/icons/zion-logo.jpg" alt="" />
      </div>

      {/* Company Info */}
      <div className="col-md-9 col-12 text-center infoFooter">
        <p className="text-white">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
        <p>
          Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
          Minh, Việt Nam.
        </p>
        <p>
          Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
          <br />
          đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
          ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
          Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí Minh
          cấp.
        </p>
        <p>
          Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
          <br />
          Email:
          <a href="mailto:support@tix.vn">support@tix.vn</a>
        </p>
      </div>

      {/* Certification */}
      <div className="col-md-2 col-12 p-0 imgFooter text-md-center text-lg-right">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://online.gov.vn/Home/WebDetails/62782"
        >
          <img
            className="imgBoCo"
            alt="Bộ Công Thương"
            src="./img/icons/bct.png"
          />
        </a>
      </div>
    </div>
  );

  return (
    <footer>
      <div className="mainMaxWidth container-fluid">
        <div className="row mr-0 ml-0">
          <div className="col-12 col-md-5 col-lg-4">
            <p className="title text-white hideOnMobile">TIX</p>
            <div className="row mr-0 ml-0">
              <div className="col-lg-6 pl-0 topLeft-1 hideOnMobile">
                <a href="/faq">FAQ</a>
                <a href="/brand-guideline/">Brand Guidelines</a>
              </div>
              <div className="col-lg-6 pl-0 topLeft-2 justify-content-center text-center text-lg-left">
                <a href="/thoa-thuan-su-dung">Thỏa thuận sử dụng </a>
                <a href="/chinh-sach-bao-mat"> Chính sách bảo mật </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-white hideOnMobile">
            <p className="title">ĐỐI TÁC</p>
            {renderListPartner(listPartner)}
          </div>
          <div className="col-12 col-md-4 text-white row">
            <div className="col-lg-6 topRight-1 hideOnMobile textCenter">
              <p className="title">MOBILE APP</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                title="Apple App"
              >
                <img
                  className="iconApp"
                  src="./img/icons/apple-logo.png"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                title="Android App"
              >
                <img
                  className="iconApp"
                  src="./img/icons/android-logo.png"
                  alt=""
                />
              </a>
            </div>
            <div className="col-12 col-lg-6 topRight-2 textCenter">
              <p className="title hideOnMobile">SOCIAL</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/tix.vn/"
                title="Facebook social"
              >
                <img
                  className="iconApp"
                  src="./img/icons/facebook-logo.png"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://zalo.me/tixdatve"
                title="Zalo social"
              >
                <img
                  className="iconApp"
                  src="./img/icons/zalo-logo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <hr className="hrFooter" />
        {renderCompanyInfo()}
      </div>
    </footer>
  );
}

export default memo(HomeFooter);
