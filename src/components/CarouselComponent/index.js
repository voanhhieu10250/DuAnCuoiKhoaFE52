import React from "react";
import { carouselItems } from "../../data";

export default function CarouselComponent({ Component }) {
  const renderItemDetail = (listData) => {
    return listData.map((item, index) => (
      <div
        className={index === 0 ? "carousel-item active" : "carousel-item"}
        key={index}
      >
        <img src={item.banner} className="d-block w-100 trailerImg" alt="" />
        {item.playBtn ? (
          <button className="btnPlay">
            <img src="./img/play-video.png" alt="" />
          </button>
        ) : (
          ""
        )}
      </div>
    ));
  };

  const renderListCarouselItem = (listData) => {
    let tempList = [];
    for (const index in listData) {
      tempList.push(
        <li
          data-target="#filmsCarousel"
          data-slide-to={index}
          className={parseInt(index) === 0 ? "active" : ""}
          key={index}
        />
      );
    }
    return tempList;
  };

  return (
    <div className="wrapperTrailer container-fluid">
      <div id="filmsCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {renderListCarouselItem(carouselItems)}
        </ol>
        <div className="carousel-inner">{renderItemDetail(carouselItems)}</div>
        <a
          className="carousel-control-prev"
          href="#filmsCarousel"
          role="button"
          data-slide="prev"
        >
          <img src="../../img/back-session.png" className="btn_Prev" alt="" />
        </a>
        <a
          className="carousel-control-next"
          href="#filmsCarousel"
          role="button"
          data-slide="next"
        >
          <img src="../../img/next-session.png" className="btn_Next" alt="" />
        </a>
      </div>
      <Component />
    </div>
  );
}
