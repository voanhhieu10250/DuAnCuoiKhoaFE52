import React, { useEffect } from "react";
import CarouselComponent from "../../../components/CarouselComponent";
import HomeSearchTool from "./HomeSearchTool";
import ListMovieCarousel from "./ListMovieCarousel";
import CinemaComplex from "./CinemaComplex";
import NewsBlock from "./NewsBlock";
import AppBlock from "./AppBlock";
import HomeFooter from "../../../components/HomeFooter";
import { useDispatch, useSelector } from "react-redux";
import { actGetListCinemaSystemApi } from "../../../redux/actions/actListCinemaSystemApi";
import { actGetListMovieApi } from "../../../redux/actions/actListMovieApi";
import { actListUpComingMovieApi } from "../../../redux/actions/actListUpComingMovieApi";
import Loader from "../../../components/Loader";
import { scroller, animateScroll } from "react-scroll";
import { useLocation } from "react-router-dom";
import SetPathNameToLocal from "../../../functions/setPathToLocal";

export default function HomePage() {
  const loading1 = useSelector((state) => state.ListMovieReducer.loading);
  const loading2 = useSelector(
    (state) => state.ListUpComingMovieReducer.loading
  );
  const loading3 = useSelector(
    (state) => state.ListCinemaSystemReducer.loading
  );
  const dispatch = useDispatch();
  useEffect(() => {
    SetPathNameToLocal();
    dispatch(actGetListMovieApi());
    dispatch(actListUpComingMovieApi());
    dispatch(actGetListCinemaSystemApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  useEffect(() => {
    if (!loading1 && !loading2 && !loading3) {
      let name = query.get("src");
      if (name) {
        scroller.scrollTo(name, {
          duration: 700,
          smooth: true,
          offset: -5,
        });
      } else {
        animateScroll.scrollToTop();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading1 || loading2 || loading3) return <Loader />;

  return (
    <div className="mainContent p-0">
      <CarouselComponent Component={HomeSearchTool} />
      <ListMovieCarousel />
      <CinemaComplex />
      <NewsBlock />
      <AppBlock />
      <HomeFooter />
    </div>
  );
}
