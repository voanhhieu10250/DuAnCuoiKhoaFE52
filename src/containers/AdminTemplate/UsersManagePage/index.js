import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actGetListUserApi } from "../../../redux/actions/actGetListUserApi";
import * as s from "../FilmsManagePage/filmManage.styles";
import PaginationBar from "./Pagination";
import UserSearchbox from "./SearchBox";
import UserSearchResult from "./SearchResult";

const UsersManagePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetListUserApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <s.SearchContainer>
      <UserSearchbox />
      <PaginationBar />
      <UserSearchResult />
    </s.SearchContainer>
  );
};

export default UsersManagePage;
