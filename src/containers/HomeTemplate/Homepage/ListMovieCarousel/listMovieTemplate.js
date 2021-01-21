import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Movie from "../../../../components/Movie";
import $ from "jquery";
import backBtn from "../../../../img/icons/back-session.png";
import nextBtn from "../../../../img/icons/next-session.png";

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
    // Nếu redux đã trả data về thì render list movie
    if (listMovie && listMovie.length > 0) {
      let tempVar = listMovie.length % 8;
      // render những slide có đủ 8 phim ra trước
      for (let index = 0; index < (listMovie.length - tempVar) / 8; index++) {
        index === 0
          ? listMoviePart.push(
              <div className="carousel-item active" key={index}>
                <div className="content_part mx-0 row">
                  {renderContent(index)}
                </div>
              </div>
            )
          : listMoviePart.push(
              <div className="carousel-item" key={index}>
                <div className="content_part mx-0 row">
                  {renderContent(index)}
                </div>
              </div>
            );
      }
      // Nếu có dư phim (slide không đủ 8 phim) thì render thêm 1 slide dành cho những phim bị dư ra
      if (tempVar > 0) {
        // Nếu list movie mà backend trả về có ít hơn 8 phim (chưa đầy 1 slide) thì thêm class active vào
        listMovie.length < 8
          ? listMoviePart.push(
              <div className="carousel-item active">
                <div className="content_part mx-0 row">
                  {redundantCase(tempVar)}
                </div>
              </div>
            )
          : listMoviePart.push(
              <div className="carousel-item" key={listMoviePart.length}>
                <div className="content_part mx-0 row">
                  {redundantCase(tempVar)}
                </div>
              </div>
            );
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

  const renderContent = (index) => {
    let tempListMovie = [];
    // Dùng vòng lặp for để thực hiện phép tính phức tạp, như vậy sẽ tránh đc trường hợp các element bị trùng key
    for (let item = index * 8; item < index * 8 + 8; item++) {
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
        <img src={backBtn} className="btn_Prev" alt="" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href={eleIdNum}
        role="button"
        data-slide="next"
      >
        <img src={nextBtn} className="btn_Next" alt="" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
