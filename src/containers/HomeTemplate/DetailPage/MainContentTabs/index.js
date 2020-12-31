import React from "react";
import DanhGiaPhimTab from "./danhGiaPhimTab";
import LichChieuPhimTab from "./lichChieuPhimTab";
import ThongTinPhimTab from "./thongTinPhimTab";
import { Element } from "react-scroll";

export default function MainContentTabs() {
  return (
    <Element name="contentDetailMain" className="mainMaxWidth2 contentMain">
      <ul className="nav nav-tabs navCenter" role="tablist">
        <li>
          <button
            id="lichChieu"
            data-toggle="tab"
            data-target="#lichChieuPhim"
            aria-expanded="true"
            className="active"
          >
            Lịch Chiếu
          </button>
        </li>
        <li>
          <button
            data-toggle="tab"
            data-target="#thongTinPhim"
            aria-expanded="false"
          >
            Thông Tin
          </button>
        </li>
        <li>
          <button
            data-toggle="tab"
            data-target="#danhGiaPhim"
            aria-expanded="false"
          >
            Đánh Giá
          </button>
        </li>
      </ul>
      <div className="tab-content text-white">
        <LichChieuPhimTab />
        <ThongTinPhimTab />
        <DanhGiaPhimTab />
      </div>
    </Element>
  );
}
