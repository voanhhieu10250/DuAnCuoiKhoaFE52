import React, { useEffect } from "react";
// import ListMovie from "./listMovie";
import { useSelector } from "react-redux";
import Movie from "../../../../components/Movie";
import $ from "jquery";

export default function ListMovieTemplate(props) {
  const eleId = props.upComingFilms ? "upComingFlims" : "nowShowingFilms";
  const eleIdNum = "#" + eleId;
  const eleClasses = props.firstShow ? "show active in" : "";
  const nowMovieList = useSelector((state) => state.ListMovieReducer.data);
  const upComingMovieList = useSelector(
    (state) => state.ListUpComingMovieReducer.data
  );
  const listMovie = props.firstShow ? nowMovieList : upComingMovieList;

  useEffect(() => {
    $(".carouselStop").carousel({
      interval: false,
    });
  }, []);

  const renderMovieListParts = () => {
    let listMoviePart = [];
    if (listMovie && listMovie.length > 0) {
      let tempVar = listMovie.length % 8;
      for (let index = 0; index < (listMovie.length - tempVar) / 8; index++) {
        if (index === 0) {
          listMoviePart.push(
            <div className="carousel-item active" key={index}>
              <div className="content_part mx-0 row">
                {renderContent(index)}
              </div>
            </div>
          );
        } else {
          listMoviePart.push(
            <div className="carousel-item" key={index}>
              <div className="content_part mx-0 row">
                {renderContent(index)}
              </div>
            </div>
          );
        }
      }
      if (tempVar > 0) {
        if (listMovie.length < 8) {
          listMoviePart.push(
            <div className="carousel-item active">
              <div className="content_part mx-0 row">
                {redundantCase(tempVar)}
              </div>
            </div>
          );
        } else {
          listMoviePart.push(
            <div className="carousel-item" key={listMoviePart.length}>
              <div className="content_part mx-0 row">
                {redundantCase(tempVar)}
              </div>
            </div>
          );
        }
      }
    }
    return listMoviePart;
  };

  const redundantCase = (tempVar) => {
    let tempList = [];
    for (
      let index = listMovie.length - tempVar;
      index < listMovie.length;
      index++
    ) {
      tempList.push(
        <div className="content__item px-0 col-lg-3" key={index}>
          <Movie item={listMovie[index]} />
        </div>
      );
    }
    return tempList;
  };

  const renderContent = (number) => {
    let tempListMovie = [];
    for (let item = number * 8; item < number * 8 + 8; item++) {
      tempListMovie.push(
        <div className="content__item px-0 col-lg-3" key={item}>
          <Movie item={listMovie[item]} />
        </div>
      );
    }
    return tempListMovie;
  };

  return (
    <div
      id={eleId}
      className={`carousel carouselStop slide tab-pane fade ${eleClasses}`}
      data-ride="carousel"
    >
      <div className="carousel-inner" style={{ height: "882px" }}>
        {renderMovieListParts()}
      </div>
      <a
        className="carousel-control-prev"
        href={eleIdNum}
        role="button"
        data-slide="prev"
      >
        <img src="./img/back-session.png" className="btn_Prev" alt="" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href={eleIdNum}
        role="button"
        data-slide="next"
      >
        <img src="./img/next-session.png" className="btn_Next" alt="" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
