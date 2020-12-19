import React, { useEffect, Suspense } from "react";
import HomeSearchTool from "./HomeSearchTool";
import { useDispatch } from "react-redux";
import { actGetListMovieApi } from "../../../redux/actions/actListMovieApi";
import { actListUpComingMovieApi } from "../../../redux/actions/actListUpComingMovieApi";
import ErrorBoundary from "../../../components/ErrorBoundary";
import { actGetListCinemaSystemApi } from "../../../redux/actions/actListCinemaSystemApi";
import NewsBlock from "./NewsBlock";
import AppBlock from "./AppBlock";

const CarouselComponent = React.lazy(() =>
  import("../../../components/CarouselComponent")
);
const ListMovieCarousel = React.lazy(() => import("./ListMovieCarousel"));
const CinemaComplex = React.lazy(() => import("./CinemaComplex"));

export default function HomePage() {
  // const loadingMovieList = useSelector(
  //   (state) => state.ListMovieReducer.loading
  // );
  // const loadingUpcoming = useSelector(
  //   (state) => state.ListUpComingMovieReducer.loading
  // );

  // if (loadingMovieList || loadingUpcoming)
  //   return <div className="mainContent text-center">Loading...........</div>;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetListMovieApi());
    dispatch(actListUpComingMovieApi());
    dispatch(actGetListCinemaSystemApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // class mainContent là để margin-top 60px. Không ảnh hưởng tới layout các component con
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="mainContent text-center">
            <h1>Loading...........</h1>
          </div>
        }
      >
        <div className="mainContent p-0">
          <CarouselComponent Component={HomeSearchTool} />
          <ListMovieCarousel />
          <CinemaComplex />
          <NewsBlock />
          <AppBlock />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
