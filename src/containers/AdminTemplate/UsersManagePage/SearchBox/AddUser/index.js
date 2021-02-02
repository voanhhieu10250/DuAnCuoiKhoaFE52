import React, { Fragment, useState } from "react";
import {
  Fade,
  Modal,
  ModalBox,
  ModalCloseBtn,
  ModalTitle,
} from "../../../AdminTemplate.styles";
import { FeatButton } from "../../../FilmsManagePage/SearchResult/SearchResult.styles";
import * as s from "../../../FilmsManagePage/SearchResult/EditBtns/editBtns.styles";
import { useForm } from "../../../../../functions/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  actPostNewUserAdminApi,
  actPostNewUserAdminSuccess,
} from "../../../../../redux/actions/actAddUserApi";

const AddUser = () => {
  const dispatch = useDispatch();
  const postUserLoading = useSelector(
    (state) => state.AddNewUserReducer.loading
  );
  const postUserSuccess = useSelector((state) => state.AddNewUserReducer.data);
  const postUserErr = useSelector((state) => state.AddNewUserReducer.err);
  const [errInput, setErrInput] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [
    { taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen },
    setFormState,
    ,
    resetFormState,
  ] = useForm({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    maLoaiNguoiDung: "",
    hoTen: "",
  });

  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
    resetFormState();
    setErrInput(false);
    dispatch(actPostNewUserAdminSuccess(null));
  };

  const handleSubmit = () => {
    if (postUserSuccess) {
      closeModal();
      return;
    }
    if (
      !taiKhoan ||
      !matKhau ||
      !email ||
      !soDt ||
      !maNhom ||
      !maLoaiNguoiDung ||
      !hoTen
    ) {
      setErrInput(true);
      return;
    }
    dispatch(
      actPostNewUserAdminApi({
        taiKhoan,
        matKhau,
        email,
        soDt,
        maNhom,
        maLoaiNguoiDung,
        hoTen,
      })
    );
    setErrInput(false);
  };

  return (
    <Fragment>
      <FeatButton onClick={openModal}>Thêm user</FeatButton>
      <Modal OpenModal={modalState}>
        <Fade onClick={closeModal} />
        <ModalBox>
          <ModalCloseBtn onClick={closeModal} />
          <ModalTitle>Thêm user</ModalTitle>
          <s.Success hidden={!postUserSuccess}>Thêm thành công !</s.Success>
          <s.Err hidden={postUserErr ? false : true}>
            {postUserErr?.response.data}
          </s.Err>
          <s.Err hidden={errInput ? false : true}>
            Vui lòng nhập đầy đủ thông tin.
          </s.Err>
          <s.FormContent>
            <s.Box>
              <s.Label>Tài khoản:</s.Label>
              <s.Input
                value={taiKhoan}
                onChange={setFormState}
                name="taiKhoan"
                placeholder="VD: example123"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Mật khẩu: </s.Label>
              <s.Input
                value={matKhau}
                onChange={setFormState}
                name="matKhau"
                placeholder="VD: 123456"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Họ tên: </s.Label>
              <s.Input
                value={hoTen}
                onChange={setFormState}
                name="hoTen"
                placeholder="VD: Mai Tường Vân"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Email: </s.Label>
              <s.Input
                value={email}
                onChange={setFormState}
                name="email"
                placeholder="VD: example@gmail.com"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Số ĐT: </s.Label>
              <s.Input
                value={soDt}
                onChange={setFormState}
                name="soDt"
                placeholder="VD: 0987654321"
              ></s.Input>
            </s.Box>
            <s.Box>
              <s.Label>Mã nhóm: </s.Label>
              <s.Input
                value={maNhom}
                onChange={setFormState}
                name="maNhom"
                placeholder="VD: GP01"
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
          <s.Button
            disabled={postUserLoading ? true : false}
            onClick={handleSubmit}
          >
            {postUserLoading
              ? "Loading..."
              : `${!postUserSuccess ? "Submit" : "Kết thúc"}`}
          </s.Button>
        </ModalBox>
      </Modal>
    </Fragment>
  );
};

export default AddUser;
