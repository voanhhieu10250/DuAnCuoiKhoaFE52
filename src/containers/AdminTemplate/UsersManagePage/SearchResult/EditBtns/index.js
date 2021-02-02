import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../../../functions/useForm";
import {
  actDeleteUserApi,
  actDeleteUserSuccess,
} from "../../../../../redux/actions/actDeleteUserApi";
import {
  actPutUserInfoApi,
  actPutUserInfoSuccess,
} from "../../../../../redux/actions/actEditUserInfo";
import { getListUserPerPageApi } from "../../../../../redux/actions/actGetListUserPerPage";
import {
  Fade,
  Modal,
  ModalBox,
  ModalCloseBtn,
  ModalTitle,
} from "../../../AdminTemplate.styles";
import * as s from "../../../FilmsManagePage/SearchResult/EditBtns/editBtns.styles";

const EditBtns = ({ userData, idx }) => {
  const usersearch = JSON.parse(localStorage.getItem("usersearch"));
  const dispatch = useDispatch();

  const updateUserLoading = useSelector(
    (state) => state.PutUserInfoReducer.loading
  );
  const updateUserSuccess = useSelector(
    (state) => state.PutUserInfoReducer.data
  );
  const updateUserErr = useSelector((state) => state.PutUserInfoReducer.err);
  const deleteUserErr = useSelector((state) => state.DeleteUserReducer.err);
  const deleteUserSuccess = useSelector(
    (state) => state.DeleteUserReducer.data
  );
  const [openState, setModelState] = useState(false);

  useEffect(() => {
    if (deleteUserSuccess) dispatch(actDeleteUserSuccess(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteUserSuccess]);
  const [
    { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen },
    setFormState,
    ,
    resetFormState,
  ] = useForm({
    taiKhoan: userData.taiKhoan,
    matKhau: userData.matKhau,
    email: userData.email,
    soDt: userData.soDt,
    maNhom: userData.maNhom || "GP01",
    maLoaiNguoiDung: userData.maLoaiNguoiDung,
    hoTen: userData.hoTen,
  });

  const closeModal = () => {
    setModelState(false);
    resetFormState();
    if (updateUserSuccess) dispatch(getListUserPerPageApi(usersearch));
    dispatch(actPutUserInfoSuccess(null));
  };
  const openModal = () => {
    setModelState(true);
  };

  const handleSubmitEdit = () => {
    if (updateUserLoading) return;
    if (updateUserSuccess) {
      closeModal();
      return;
    }
    dispatch(
      actPutUserInfoApi({
        taiKhoan,
        matKhau,
        email,
        soDt,
        maNhom,
        maLoaiNguoiDung,
        hoTen,
      })
    );
  };
  const handleDeleteFilm = () => {
    let r = window.confirm(`Bạn có chắc là muốn xóa phim này không !`);
    if (!r) return;
    dispatch(actDeleteUserApi(userData.taiKhoan));
  };

  return (
    <Fragment>
      <s.DivBtns>
        <s.FilmBtn bgEven={!(idx % 2 === 0)} onClick={openModal}>
          Sửa
        </s.FilmBtn>
        <s.FilmBtn bgEven={!(idx % 2 === 0)} onClick={handleDeleteFilm}>
          Xóa
        </s.FilmBtn>
      </s.DivBtns>
      <Modal OpenModal={openState}>
        <Fade onClick={closeModal} />
        <ModalBox>
          <ModalCloseBtn onClick={closeModal} />
          <ModalTitle>Edit user: {userData.taiKhoan}</ModalTitle>
          <s.Success hidden={!updateUserSuccess}>Upload thành công !</s.Success>
          <s.Err hidden={updateUserErr ? false : true}>
            {updateUserErr?.response.data}
          </s.Err>
          <s.FormContent>
            <s.Box>
              <s.Label>Tài khoản:</s.Label>
              <s.Input
                value={taiKhoan}
                onChange={setFormState}
                name="taiKhoan"
                readOnly
                disabled
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Mật khẩu: </s.Label>
              <s.Input
                value={matKhau}
                onChange={setFormState}
                name="matKhau"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Họ tên: </s.Label>
              <s.Input
                value={hoTen}
                onChange={setFormState}
                name="hoTen"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Email: </s.Label>
              <s.Input
                value={email}
                onChange={setFormState}
                name="email"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Số ĐT: </s.Label>
              <s.Input
                value={soDt}
                onChange={setFormState}
                name="soDt"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Mã nhóm: </s.Label>
              <s.Input
                value={maNhom}
                onChange={setFormState}
                name="maNhom"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Mã loại người dùng:</s.Label>
              <s.Input
                id="QuanTri"
                value="QuanTri"
                onChange={setFormState}
                name="maLoaiNguoiDung"
                type="radio"
                checked={maLoaiNguoiDung === "QuanTri" ? true : false}
              ></s.Input>
              <s.Label htmlFor="QuanTri">Quản trị </s.Label>
              <s.Input
                id="KhachHang"
                value="KhachHang"
                onChange={setFormState}
                name="maLoaiNguoiDung"
                type="radio"
                checked={maLoaiNguoiDung === "KhachHang" ? true : false}
              ></s.Input>
              <s.Label htmlFor="KhachHang">Khách hàng </s.Label>
            </s.Box>
          </s.FormContent>
          <s.Button onClick={handleSubmitEdit}>
            {updateUserLoading
              ? "Loading..."
              : `${!updateUserSuccess ? "Submit" : "Kết thúc"}`}
          </s.Button>
        </ModalBox>
      </Modal>
      <Modal bgNone OpenModal={deleteUserErr ? true : false}>
        <Fade
          onClick={() => {
            dispatch(actDeleteUserSuccess(null));
          }}
        />
        <ModalBox>
          <ModalTitle style={{ color: "red" }}>
            Người dùng này đã đặt vé xem phim không thể xóa!
          </ModalTitle>
          <s.Button
            onClick={() => {
              dispatch(actDeleteUserSuccess(null));
            }}
          >
            Đã hiểu
          </s.Button>
        </ModalBox>
      </Modal>
    </Fragment>
  );
};

export default EditBtns;
