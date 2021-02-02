import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../../functions/useForm";
import xController from "../../../img/icons/xController.png";
import {
  actPutUserInfoApi,
  actPutUserInfoSuccess,
} from "../../../redux/actions/actEditUserInfo";
import * as s from "./Admin.styles";

const errState = [
  "Nhanh chóng và dễ dàng.",
  "Vui lòng điền đầy đủ thông tin các ô!",
  "Mật khẩu mới không khớp.",
];

export default function Administrative() {
  const account = JSON.parse(localStorage.getItem("UserAdmin"));
  const [openModal, setOpenModal] = useState(false);
  const [formErr, setFormErr] = useState(errState[0]);
  const dispatch = useDispatch();
  const putInfoErr = useSelector((state) => state.PutUserInfoReducer.err);
  const putInfoLoading = useSelector(
    (state) => state.PutUserInfoReducer.loading
  );
  const putSuccess = useSelector((state) => state.PutUserInfoReducer.data);
  const [
    { newPassword, retypePassword },
    setFormState,
    ,
    resetFormState,
  ] = useForm({
    newPassword: "",
    retypePassword: "",
  });

  useEffect(() => {
    if (putSuccess) {
      resetFormState();
    }
  }, [putSuccess, resetFormState]);

  const OpenModal = () => setOpenModal(true);
  const CloseModal = () => {
    resetFormState();
    setOpenModal(false);
    dispatch(actPutUserInfoSuccess(null));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { taiKhoan, email, soDT, maNhom, hoTen, maLoaiNguoiDung } = account;
    if (putInfoLoading) return;
    if (putSuccess) {
      CloseModal();
    }
    if (!newPassword || !retypePassword) {
      setFormErr(errState[1]);
      return;
    }
    if (newPassword !== retypePassword) {
      setFormErr(errState[2]);
      return;
    }
    dispatch(
      actPutUserInfoApi({
        taiKhoan,
        matKhau: newPassword,
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
      <s.ContainTop>
        <s.SpecialBox>
          <s.InfoBox>
            <Link to="/admin/profile" replace>
              <s.Image
                src={`https://i.pravatar.cc/120?u=${account.taiKhoan}`}
                alt="Logo"
              />
              <s.ListInfo>
                <s.ListItem>
                  Email: <span>{account.email}</span>
                </s.ListItem>
                <s.ListItem>
                  Họ tên: <span>{account.hoTen}</span>
                </s.ListItem>
                <s.ListItem>
                  Mã nhóm: <span>{account.maNhom}</span>
                </s.ListItem>
                <s.ListItem>
                  Số đt: <span>{account.soDT}</span>
                </s.ListItem>
              </s.ListInfo>
            </Link>
          </s.InfoBox>
        </s.SpecialBox>
        <s.BoxBtn>
          <s.SpecialBox margin="12px 0 0 0">
            <s.Button btnColor="rgba(67, 67, 67, 1)" onClick={OpenModal}>
              Đổi mật khẩu
            </s.Button>
          </s.SpecialBox>
          <s.SpecialBox margin="12px 0 0 0">
            <s.Button btnColor="#a75b50" color="#fff">
              Đăng xuất
            </s.Button>
          </s.SpecialBox>
        </s.BoxBtn>
      </s.ContainTop>
      <s.Break />
      <s.ContainBottom>
        <s.SpecialBox width="35%" margin="20px">
          <s.TaskBox>
            <Link to="/admin/manage/films">
              <s.TaskTitle>Films</s.TaskTitle>
              <s.Break color="#28291061" margin="10px" />
              <s.TaskList>
                <s.TaskItem>Lấy danh sách phim</s.TaskItem>
                <s.TaskItem>Thêm phim</s.TaskItem>
                <s.TaskItem>Xóa phim</s.TaskItem>
                <s.TaskItem Link>Xem thêm ...</s.TaskItem>
              </s.TaskList>
            </Link>
          </s.TaskBox>
        </s.SpecialBox>
        <s.SpecialBox width="35%" margin="20px">
          <s.TaskBox>
            <Link to="/admin/manage/users">
              <s.TaskTitle>Users</s.TaskTitle>
              <s.Break color="#28291061" margin="10px" />
              <s.TaskList>
                <s.TaskItem>Lấy danh sách người dùng</s.TaskItem>
                <s.TaskItem>Thêm người dùng</s.TaskItem>
                <s.TaskItem>Xóa người dùng</s.TaskItem>
                <s.TaskItem Link>Xem thêm ...</s.TaskItem>
              </s.TaskList>
            </Link>
          </s.TaskBox>
        </s.SpecialBox>
        <s.SpecialBox width="35%" margin="20px">
          <s.TaskBox>
            <Link to="/admin/manage/tickets">
              <s.TaskTitle>Tickets</s.TaskTitle>
              <s.Break color="#28291061" margin="10px" />
              <s.TaskList>
                <s.TaskItem>Tạo lịch chiếu</s.TaskItem>
                <s.TaskItem>Lấy danh sách phòng vé</s.TaskItem>
                <s.TaskItem Link>Xem thêm ...</s.TaskItem>
              </s.TaskList>
            </Link>
          </s.TaskBox>
        </s.SpecialBox>
      </s.ContainBottom>
      <s.Modal openModal={openModal}>
        <s.FadeDiv onClick={CloseModal} />
        <s.ModalForm onSubmit={handleSubmitForm}>
          <s.CloseModalBtn
            src={xController}
            alt="close button"
            onClick={CloseModal}
          />
          <s.ModalTitle>Change password</s.ModalTitle>
          <s.FormErr hideTag={putSuccess ? true : false}>
            {putInfoErr
              ? "Token đã hết hạn. Vui lòng đăng nhập lại để thực hiện chức năng này"
              : formErr}
          </s.FormErr>
          <s.FormErr hideTag={!putSuccess ? true : false}>
            Đổi mật khẩu thành công!
          </s.FormErr>
          <s.Box>
            <s.Label htmlFor="newPassword">Mật khẩu mới</s.Label>
            <s.InputField
              id="newPassword"
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={setFormState}
              placeholder="Mật khẩu mới"
            />
          </s.Box>
          <s.Box>
            <s.Label htmlFor="retypePassword">Nhập lại mật khẩu mới</s.Label>
            <s.InputField
              id="retypePassword"
              type="password"
              name="retypePassword"
              value={retypePassword}
              onChange={setFormState}
              placeholder="Nhập lại mật khẩu mới"
            />
          </s.Box>
          <s.SubmitBtn>{putSuccess ? "Thoát" : "Xác nhận"}</s.SubmitBtn>
        </s.ModalForm>
      </s.Modal>
    </s.Container>
  );
}
