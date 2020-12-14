import React, { useEffect } from "react";
import CarouselComponent from "../../../components/CarouselComponent";
import ListMovieCarousel from "./ListMovieCarousel";
import HomeSearchTool from "./HomeSearchTool";
import { useDispatch, useSelector } from "react-redux";
import { actGetListMovieApi } from "../../../redux/actions/actListMovieApi";
import { actListUpComingMovieApi } from "../../../redux/actions/actListUpComingMovieApi";

export default function HomePage() {
  const loadingMovieList = useSelector(
    (state) => state.ListMovieReducer.loading
  );
  const loadingUpcoming = useSelector(
    (state) => state.ListUpComingMovieReducer.loading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetListMovieApi());
    dispatch(actListUpComingMovieApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingMovieList || loadingUpcoming)
    return <div className="mainContent text-center">Loading...........</div>;

  return (
    // class mainContent là để margin-top 60px. Không ảnh hưởng tới layout các component con
    <div className="mainContent p-0">
      <CarouselComponent Component={HomeSearchTool} />
      <ListMovieCarousel />
    </div>
  );
}
