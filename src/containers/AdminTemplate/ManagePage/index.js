import React from "react";
import { Break, SpecialBox } from "../AdminTemplate.styles";
import * as s from "./manage.styles";

const listTask = [
  {
    name: "Films",
    to: "/admin/manage/films",
    feature: [
      "Lấy danh sách phim",
      "Thêm/Xóa phim",
      "Cập nhật phim",
      "Lấy thông tin phim",
    ],
  },
  {
    name: "Users",
    to: "/admin/manage/users",
    feature: [
      "Lấy danh sách người dùng",
      "Thêm/Xóa người dùng",
      "Cập nhật thông tin người dùng",
      "Lấy thông tin người dùng",
    ],
  },
  {
    name: "Tickets",
    to: "/admin/manage/tickets",
    feature: ["Lấy danh sách phòng vé", "Đặt lịch chiếu", "Đặt vé"],
  },
];

const ManagePage = () => {
  const renderManageTask = () => {
    return listTask.map((item, index) => {
      return (
        <SpecialBox margin="10px" width="45%" square key={index}>
          <s.Box>
            <s.CustomLink to={item.to}>
              <s.Title>{item.name}</s.Title>
              <Break />
              {item.feature.map((i, idx) => {
                return <s.SpecialBoxItem key={idx}>{i}</s.SpecialBoxItem>;
              })}
            </s.CustomLink>
          </s.Box>
        </SpecialBox>
      );
    });
  };

  return (
    <div>
      <h1>Management</h1>
      <Break />
      <h1>Short cuts</h1>
      <s.TaskContainer>{renderManageTask()}</s.TaskContainer>
    </div>
  );
};

export default ManagePage;
