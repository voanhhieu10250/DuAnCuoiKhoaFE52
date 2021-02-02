import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../functions/useForm";
import {
  actPutUserInfoApi,
  actPutUserInfoSuccess,
} from "../../../redux/actions/actEditUserInfo";
import {
  Button,
  Fade,
  Modal,
  ModalBox,
  ModalCloseBtn,
} from "../AdminTemplate.styles";
import * as s from "./profile.styles";

const ProfilePage = () => {
  const account = JSON.parse(localStorage.getItem("UserAdmin"));
  const [editState, setEditState] = useState(false);
  const [openModal, setModalState] = useState(false);
  const putLoading = useSelector((state) => state.PutUserInfoReducer.loading);
  const putSuccess = useSelector((state) => state.PutUserInfoReducer.data);
  const putErr = useSelector((state) => state.PutUserInfoReducer.err);
  const dispatch = useDispatch();
  const [{ hoTen, email, soDT }, setFormState, , resetFormState] = useForm({
    hoTen: account.hoTen,
    email: account.email,
    soDT: account.soDT,
  });

  useEffect(() => {}, []);

  const OnEditState = () => {
    setEditState(true);
  };
  const OffEditState = () => {
    if (!putSuccess) resetFormState();
    setEditState(false);
    setModalState(false);
    dispatch(actPutUserInfoSuccess(null));
  };

  const handleEditInfo = () => {
    const { taiKhoan, maNhom, maLoaiNguoiDung } = account;
    if (putLoading) return;
    if (putSuccess || putErr) {
      OffEditState();
      if (putSuccess) {
        const { soDT, email, hoTen } = putSuccess;
        localStorage.setItem(
          "UserAdmin",
          JSON.stringify({ ...account, soDT, email, hoTen })
        );
      }
      return;
    }
    dispatch(
      actPutUserInfoApi({
        matKhau: "",
        taiKhoan,
        email,
        soDT,
        maNhom,
        maLoaiNguoiDung,
        hoTen,
      })
    );
  };

  return (
    <s.Container>
      <s.Form>
        <s.InputBox>
          <s.Img
            src={`https://i.pravatar.cc/120?u=${account.taiKhoan}`}
            alt="logo"
          />
        </s.InputBox>
        <s.InputBox>
          <s.InputLabel>Tài khoản:</s.InputLabel>
          <s.InputTag
            readOnly
            value={account.taiKhoan}
            placeholder={account.taiKhoan}
          />
        </s.InputBox>
        <s.InputBox>
          <s.InputLabel htmlFor="hoTen">Họ tên:</s.InputLabel>
          <s.InputTag
            id="hoTen"
            name="hoTen"
            value={hoTen}
            onChange={setFormState}
            readOnly={!editState}
            placeholder={account.hoTen}
          />
        </s.InputBox>
        <s.InputBox>
          <s.InputLabel htmlFor="email">Email:</s.InputLabel>
          <s.InputTag
            id="email"
            name="email"
            value={email}
            onChange={setFormState}
            readOnly={!editState}
            placeholder={account.email}
          />
        </s.InputBox>
        <s.InputBox>
          <s.InputLabel htmlFor="soDT">Số điện thoại:</s.InputLabel>
          <s.InputTag
            id="soDT"
            name="soDT"
            value={soDT}
            onChange={setFormState}
            readOnly={!editState}
            placeholder={account.soDT}
          />
        </s.InputBox>
        <s.InputBox>
          <s.InputLabel>Loại người dùng:</s.InputLabel>
          <s.InputTag
            readOnly
            value={account.maLoaiNguoiDung}
            placeholder={account.maLoaiNguoiDung}
          />
        </s.InputBox>
        <s.InputBox>
          <s.InputLabel>Mã Nhóm</s.InputLabel>
          <s.InputTag
            readOnly
            value={account.maNhom}
            placeholder={account.maNhom}
          />
        </s.InputBox>
        <s.InputBox btnBox>
          <s.SpecialB margin="0 3px" hidden={!editState}>
            <s.Button Danger onClick={OffEditState}>
              Hủy
            </s.Button>
          </s.SpecialB>
          <s.SpecialB margin="0 3px" hidden={!editState}>
            <s.Button onClick={() => setModalState(true)}>Xác nhận</s.Button>
          </s.SpecialB>
          <s.SpecialB width="100%" hidden={editState}>
            <s.Button onClick={OnEditState}>Chỉnh sửa</s.Button>
          </s.SpecialB>
        </s.InputBox>
      </s.Form>
      <Modal OpenModal={openModal}>
        <Fade onClick={() => setModalState(false)} />
        <ModalBox p="22px 50px">
          <ModalCloseBtn onClick={() => setModalState(false)} />
          <s.Header success={putSuccess} hidden={putErr ? true : false}>
            {putSuccess
              ? "Cập nhật thành công !"
              : "Vui lòng xác nhận lại trước khi cập nhật"}
          </s.Header>
          <s.FormError hidden={putErr ? false : true}>
            Có gì đó sai sai. Vui lòng đăng nhập và thử lại.
          </s.FormError>
          <div>
            <s.FieldBox>
              <s.Field>Tài khoản: </s.Field>
              <s.Span>{account.taiKhoan}</s.Span>
            </s.FieldBox>
            <s.FieldBox>
              <s.Field>Họ tên: </s.Field>
              <s.Span>{hoTen}</s.Span>
            </s.FieldBox>
            <s.FieldBox>
              <s.Field>Email: </s.Field>
              <s.Span>{email}</s.Span>
            </s.FieldBox>
            <s.FieldBox>
              <s.Field>Số điện thoại: </s.Field>
              <s.Span>{soDT}</s.Span>
            </s.FieldBox>
            <s.FieldBox>
              <s.Field>Mã người dùng: </s.Field>
              <s.Span>{account.maLoaiNguoiDung}</s.Span>
            </s.FieldBox>
            <s.FieldBox>
              <s.Field>Mã nhóm: </s.Field>
              <s.Span>{account.maNhom}</s.Span>
            </s.FieldBox>
          </div>
          <Button m="10px 0 0 0" onClick={handleEditInfo}>
            {putLoading ? "Loading..." : "Xác nhận"}
          </Button>
        </ModalBox>
      </Modal>
    </s.Container>
  );
};

export default ProfilePage;
