import React, { Suspense } from "react";
import ErrorBoundary from "../../../components/ErrorBoundary";
import Loader from "../../../components/Loader";

const CarouselComponent = React.lazy(() =>
  import("../../../components/CarouselComponent")
);
const HomeSearchTool = React.lazy(() => import("./HomeSearchTool"));
const ListMovieCarousel = React.lazy(() => import("./ListMovieCarousel"));
const CinemaComplex = React.lazy(() => import("./CinemaComplex"));
const NewsBlock = React.lazy(() => import("./NewsBlock"));
const AppBlock = React.lazy(() => import("./AppBlock"));
const HomeFooter = React.lazy(() => import("../../../components/HomeFooter"));

export default function HomePage() {
  return (
    // class mainContent là để margin-top 60px. Không ảnh hưởng tới layout các component con
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <div className="mainContent p-0">
          <CarouselComponent Component={HomeSearchTool} />
          <ListMovieCarousel />
          <CinemaComplex />
          <NewsBlock />
          <AppBlock />
          <HomeFooter />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
