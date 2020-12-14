import React from "react";

export default function CarouselComponent({ Component, ...props }) {
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
              src="../../img/ac-quy-doi-dau-deliver-us-from-evil-c16-15994546580686.jpg"
              className="d-block w-100 trailerImg"
              alt=""
            />
            <button className="btnPlay">
              <img src="./img/play-video.png" alt="" />
            </button>
          </div>
          <div className="carousel-item">
            <img
              src="../../img/tenet-15984144207145.png"
              className="d-block w-100 trailerImg"
              alt=""
            />
            <button className="btnPlay">
              <img src="../../img/play-video.png" alt="" />
            </button>
          </div>
          <div className="carousel-item">
            <img
              src="../../img/vi-sao-dua-ban-toi-jungle-beat-p-15994654710579.png"
              className="d-block w-100 trailerImg"
              alt=""
            />
            <button className="btnPlay">
              <img src="../../img/play-video.png" alt="" />
            </button>
          </div>
          <div className="carousel-item">
            <img
              src="../../img/tenet-15984144207145.png"
              className="d-block w-100 trailerImg"
              alt=""
            />
            <button className="btnPlay">
              <img src="../../img/play-video.png" alt="" />
            </button>
          </div>
          <div className="carousel-item">
            <img
              src="../../img/di-nhan-the-he-moi-the-new-mutants-15985202688070.jpg"
              className="d-block w-100 trailerImg"
              alt=""
            />
            <button className="btnPlay">
              <img src="../../img/play-video.png" alt="" />
            </button>
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
