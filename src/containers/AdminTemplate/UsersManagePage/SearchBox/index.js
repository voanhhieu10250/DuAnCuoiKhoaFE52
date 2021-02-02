import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../../functions/useForm";
import { getListUserPerPageApi } from "../../../../redux/actions/actGetListUserPerPage";
import * as s from "../../FilmsManagePage/SearchBox/searchBox.styles";
import AddUser from "./AddUser";

const UserSearchbox = () => {
  const dispatch = useDispatch();
  const clicked = useRef(false);
  const listUser = useSelector((state) => state.GetListUserReducer.data);
  const loadingListUser = useSelector(
    (state) => state.GetListUserReducer.loading
  );
  const [suggestionList, setSuggestionList] = useState([]);
  const [activeBox, setActiveBox] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [{ maNhom }, setFormState] = useForm({ maNhom: "" });

  useEffect(() => {
    if (listUser) setSuggestionList([...listUser.map((item) => item.taiKhoan)]);
  }, [listUser]);

  useEffect(() => {
    if (clicked.current) dispatchAction();
    clicked.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBox, clicked.current]);

  const handleInputKeyword = (e) => {
    setSearchValue(e.target.value);
    if (!listUser || loadingListUser) return;
    const userData = e.target.value;
    if (userData) {
      setActiveBox(true);
      const tempArray = listUser.filter((item) => {
        const lowercase = userData.toLocaleLowerCase();
        return item.taiKhoan?.toLocaleLowerCase().search(lowercase) !== -1;
      });
      const founedList = tempArray.map((item) => item.taiKhoan);
      if (!!founedList.length) setSuggestionList([...founedList]);
      else setSuggestionList([userData]);
    } else {
      setSuggestionList([]);
      setActiveBox(false);
    }
  };

  const renderSuggestionList = () => {
    const templist = [...suggestionList];
    if (templist.length > 20) {
      templist.splice(21);
    }
    return templist.map((item, index) => {
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
    const value = encodeURIComponent(searchValue);
    const groupCode = maNhom.trim().toLocaleUpperCase();
    if (groupCode.length !== 4 && groupCode.length > 0) {
      alert("Mã nhóm không đúng định dạng. (vd: GP01, GP02,...)");
    }
    const data = {
      maNhom: groupCode,
      tuKhoa: value,
      soTrang: 1,
      soPhanTuTrenTrang: 10,
    };
    localStorage.setItem("usersearch", JSON.stringify(data));
    dispatch(getListUserPerPageApi(data));
  };

  return (
    <s.Wrapper>
      <s.Title>Search For User</s.Title>
      <s.ContainDetail>
        <s.DetailBox>
          <s.Label htmlFor="maNhom">Mã nhóm: </s.Label>
          <s.Input
            id="maNhom"
            value={maNhom}
            name="maNhom"
            onChange={setFormState}
            placeholder="GP01 (Mặc định)"
          />
        </s.DetailBox>
        <AddUser />
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

export default UserSearchbox;
