import React, { memo } from "react";
import Slider from "react-slick";
import { appBlockCarouselImgs } from "../../../../data";
import { Element } from "react-scroll";
import mobileImage from "../../../../img/AppBlockCarousel/mobile.png";

function AppBlock() {
  const setting = {
    className: "wraperSlick",
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    dot: false,
    cssEase: "ease",
  };

  const renderAppSlider = () => {
    return appBlockCarouselImgs.map((item, index) => {
      return (
        <div className="appSlider" key={index}>
          <img src={item} alt="" />
        </div>
      );
    });
  };

  return (
    <Element name="appblock" id="appblock">
      <div className="mainMaxWidth container-fluid">
        <div className="row mr-auto ml-auto col-12">
          <div className="col-12 col-lg-6 left text-white text-center text-lg-left">
            <p className="largeText">Ứng dụng tiện lợi dành cho</p>
            <p className="largeText">người yêu điện ảnh</p>
            <br />
            <p className="smallText">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <br />
            <button className="buttonLeft">App miễn phí - Tải về ngay!</button>
            <p className="textUnderApp">
              TIX có hai phiên bản &nbsp;
              <a
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
                href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
              >
                iOS
              </a>
              &nbsp;&amp;&nbsp;
              <a
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
              >
                Android
              </a>
            </p>
          </div>
          <div className="col-12 col-lg-6 pl-0 pr-0 text-white right">
            <img className="phone-img" src={mobileImage} alt="Loading..." />
            <Slider {...setting}>{renderAppSlider()}</Slider>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default memo(AppBlock);
