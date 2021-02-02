import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actGetListMovieApi } from "../../../redux/actions/actListMovieApi";
import * as s from "./filmManage.styles";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";

const FilmsManagePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetListMovieApi("GP01"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <s.SearchContainer>
      <SearchBox />
      <SearchResult />
    </s.SearchContainer>
  );
};

export default FilmsManagePage;
