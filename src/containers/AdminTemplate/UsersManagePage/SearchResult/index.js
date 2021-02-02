import React from "react";
import { useSelector } from "react-redux";
import * as s from "../../FilmsManagePage/SearchResult/SearchResult.styles";
import EditBtns from "./EditBtns";

const UserSearchResult = () => {
  const usersearch = JSON.parse(localStorage.getItem("usersearch"));
  const userDataSuccess = useSelector(
    (state) => state.ListUserPerPageReducer.data
  );
  const userDataLoading = useSelector(
    (state) => state.ListUserPerPageReducer.loading
  );
  const userDataErr = useSelector((state) => state.ListUserPerPageReducer.err);

  const renderFilmData = () => {
    if (!userDataSuccess) return;
    return userDataSuccess.items.map((item, index) => (
      <s.Block key={index} bgEven={index % 2 === 0}>
        <s.ImgDiv user>
          <s.Img
            src={`https://i.pravatar.cc/150?u=${item.taiKhoan}`}
            alt="hinh anh"
            userlogo
          />
        </s.ImgDiv>
        <s.DivInfo user>
          <s.InfoItem>
            Tài khoản: <s.Span>{item.taiKhoan}</s.Span>
          </s.InfoItem>
          <s.InfoItem>
            Mật khẩu: <s.Span>{item.matKhau}</s.Span>
          </s.InfoItem>
          <s.InfoItem>
            Họ tên: <s.Span>{item.hoTen}</s.Span>
          </s.InfoItem>
          <s.InfoItem>
            Email: <s.Span>{item.email}</s.Span>
          </s.InfoItem>
          <s.InfoItem>
            Số ĐT: <s.Span>{item.soDt}</s.Span>
          </s.InfoItem>
          <s.InfoItem>
            Mã loại người dùng: <s.Span>{item.maLoaiNguoiDung}</s.Span>
          </s.InfoItem>
          <s.InfoItem>
            Mã nhóm: <s.Span>{usersearch.maNhom || "GP01"}</s.Span>
          </s.InfoItem>
        </s.DivInfo>
        <EditBtns idx={index} userData={item} />
      </s.Block>
    ));
  };

  return (
    <s.Container>
      {renderFilmData()}
      <s.UnfoundedFilm
        hidden={!userDataErr && userDataSuccess?.length === 0 ? false : true}
      >
        Rất tiếc user bạn tìm kiếm không tồn tại.
        <br /> Vui lòng thử mã nhóm khác hoặc user khác.
      </s.UnfoundedFilm>
      <s.UnfoundedFilm hidden={userDataErr ? false : true}>
        {userDataErr?.response.data}
      </s.UnfoundedFilm>
      <s.UnfoundedFilm hidden={!userDataLoading}>Loading ...</s.UnfoundedFilm>
    </s.Container>
  );
};

export default UserSearchResult;
