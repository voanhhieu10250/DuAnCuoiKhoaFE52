import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../../functions/useForm";
import { actGetListMoviePerPage } from "../../../../redux/actions/actGetMoviePerPage";
import * as s from "./searchBox.styles";

const SearchBox = () => {
  const dispatch = useDispatch();
  const clicked = useRef(false);
  const listMovie = useSelector((state) => state.ListMovieReducer.data);
  const [suggestionList, setSuggestionList] = useState([]);
  const [activeBox, setActiveBox] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [{ maNhom, tuNgay, denNgay }, setFormState] = useForm({
    maNhom: "",
    tuNgay: "",
    denNgay: "",
  });

  useEffect(() => {
    if (listMovie)
      setSuggestionList([...listMovie.map((item) => item.tenPhim)]);
  }, [listMovie]);

  useEffect(() => {
    if (clicked.current) dispatchAction();
    clicked.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBox, clicked.current]);

  const handleInputKeyword = (e) => {
    setSearchValue(e.target.value);
    if (!listMovie) return;
    const userData = e.target.value;
    if (userData) {
      setActiveBox(true);
      const tempArray = listMovie.filter((movie) => {
        return (
          movie.tenPhim
            .toLocaleLowerCase()
            .search(userData.toLocaleLowerCase()) !== -1
        );
      });
      const founedList = tempArray.map((item) => item.tenPhim);
      if (!!founedList.length) setSuggestionList([...founedList]);
      else setSuggestionList([userData]);
    } else {
      setSuggestionList([]);
      setActiveBox(false);
    }
  };

  const renderSuggestionList = () => {
    return suggestionList.map((item, index) => {
      return (
        <s.Item key={index} onClick={() => handleSelectName(item)}>
          {item}
        </s.Item>
      );
    });
  };

  const handleSelectName = (item) => {
    clicked.current = true;
    setSearchValue(item);
    setActiveBox(false);
  };

  const handleSubmitKeyword = (e) => {
    e.preventDefault();
    setActiveBox(false);
    dispatchAction();
  };
  const dispatchAction = () => {
    const from = encodeURIComponent(tuNgay);
    const to = encodeURIComponent(denNgay);
    const value = encodeURIComponent(searchValue);
    const groupCode = maNhom.trim().toLocaleUpperCase();
    if (groupCode.length !== 4 && groupCode.length > 0) {
      alert("Mã nhóm không đúng định dạng. (vd: GP01, GP02,...)");
    }
    const data = {
      maNhom: groupCode,
      tenPhim: value,
      soTrang: 1,
      soPhanTuTrenTrang: 10,
      tuNgay: from,
      denNgay: to,
    };
    localStorage.setItem("filmsearch", JSON.stringify(data));
    dispatch(actGetListMoviePerPage(data));
  };
  return (
    <s.Wrapper>
      <s.Title>Search For Film</s.Title>
      <s.ContainDetail>
        <s.DetailBox>
          <s.Label htmlFor="maNhom">Mã nhóm: </s.Label>
          <s.Input
            id="maNhom"
            value={maNhom}
            name="maNhom"
            onChange={setFormState}
            placeholder="GP01"
          />
        </s.DetailBox>
        <s.DetailBox>
          <s.Label htmlFor="tuNgay">Từ ngày: </s.Label>
          <s.Input
            id="tuNgay"
            value={tuNgay}
            name="tuNgay"
            onChange={setFormState}
            placeholder="01/01/2000"
          />
        </s.DetailBox>
        <s.DetailBox>
          <s.Label htmlFor="denNgay">Đến ngày: </s.Label>
          <s.Input
            id="denNgay"
            value={denNgay}
            name="denNgay"
            onChange={setFormState}
            placeholder="24/12/2021"
          />
        </s.DetailBox>
      </s.ContainDetail>
      <s.SearchInput onSubmit={handleSubmitKeyword}>
        <s.InputFeild
          type="text"
          placeholder="Type to search ..."
          value={searchValue}
          onChange={handleInputKeyword}
        ></s.InputFeild>
        <s.AutocomBox activeBox={activeBox}>
          {renderSuggestionList()}
        </s.AutocomBox>
        <s.IconBox>
          <i className="fas fa-search"></i>
        </s.IconBox>
      </s.SearchInput>
    </s.Wrapper>
  );
};

export default SearchBox;
