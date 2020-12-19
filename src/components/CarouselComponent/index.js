import React from "react";
import { carouselImages } from "../../data";

export default function CarouselComponent({ Component }) {
  return (
    <div className="wrapperTrailer container-fluid">
      <div id="filmsCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#filmsCarousel"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#filmsCarousel" data-slide-to={1} />
          <li data-target="#filmsCarousel" data-slide-to={2} />
          <li data-target="#filmsCarousel" data-slide-to={3} />
          <li data-target="#filmsCarousel" data-slide-to={4} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carouselImages.banner_1}
              className="d-block w-100 trailerImg"
              alt=""
            />
            <button className="btnPlay">
              <img src="./img/play-video.png" alt="" />
            </button>
          </div>
          <div className="carousel-item">
            <img
              src={carouselImages.banner_2}
              className="d-block w-100 trailerImg"
              alt=""
            />
            <button className="btnPlay">
              <img src="../../img/play-video.png" alt="" />
            </button>
          </div>
          <div className="carousel-item">
            <img
              src={carouselImages.banner_3}
              className="d-block w-100 trailerImg"
              alt=""
            />
            <button className="btnPlay">
              <img src="../../img/play-video.png" alt="" />
            </button>
          </div>
          <div className="carousel-item">
            <img
              src={carouselImages.banner_4}
              className="d-block w-100 trailerImg"
              alt=""
            />
            <button className="btnPlay">
              <img src="../../img/play-video.png" alt="" />
            </button>
          </div>
          <div className="carousel-item">
            <img
              src={carouselImages.banner_5}
              className="d-block w-100 trailerImg"
              alt=""
            />
            {/* <button className="btnPlay">
              <img src="../../img/play-video.png" alt="" />
            </button> */}
          </div>
        </div>
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
