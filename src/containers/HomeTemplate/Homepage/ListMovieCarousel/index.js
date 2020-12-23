import React, { useEffect, memo } from "react";
import ListMovieTemplate from "./listMovieTemplate";
import { useDispatch } from "react-redux";
import { actGetListMovieApi } from "../../../../redux/actions/actListMovieApi";
import { actListUpComingMovieApi } from "../../../../redux/actions/actListUpComingMovieApi";

function ListMovieCarousel() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetListMovieApi());
    dispatch(actListUpComingMovieApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row m-0">
      <div className="col-12 mainMaxWidth" id="homeMovies">
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
      </div>
    </div>
  );
}

export default memo(ListMovieCarousel);
