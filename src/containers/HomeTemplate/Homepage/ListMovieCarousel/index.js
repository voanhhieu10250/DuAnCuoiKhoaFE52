import React, { memo } from "react";
import ListMovieTemplate from "./listMovieTemplate";
import { Element } from "react-scroll";

function ListMovieCarousel() {
  return (
    <div className="row m-0">
      <Element
        name="homeMovies"
        className="col-12 mainMaxWidth"
        id="homeMovies"
      >
        <ul className="nav nav-tabs navCenter">
          <li style={{ marginRight: 5 }}>
            <button
              data-toggle="tab"
              data-target="#nowShowingFilms"
              aria-expanded="true"
              className="active"
            >
              Đang Chiếu
            </button>
          </li>
          <li style={{ marginLeft: 5 }}>
            <button
              data-toggle="tab"
              data-target="#upComingFlims"
              aria-expanded="false"
            >
              Sắp Chiếu
            </button>
          </li>
        </ul>
        <div className="tab-content">
          <ListMovieTemplate firstShow />
          <ListMovieTemplate upComingFilms />
        </div>
      </Element>
    </div>
  );
}

export default memo(ListMovieCarousel);
