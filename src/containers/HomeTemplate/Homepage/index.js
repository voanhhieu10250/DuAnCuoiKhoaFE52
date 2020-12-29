import React from "react";
import CarouselComponent from "../../../components/CarouselComponent";
import HomeSearchTool from "./HomeSearchTool";
import ListMovieCarousel from "./ListMovieCarousel";
import CinemaComplex from "./CinemaComplex";
import NewsBlock from "./NewsBlock";
import AppBlock from "./AppBlock";
import HomeFooter from "../../../components/HomeFooter";

export default function HomePage() {
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
