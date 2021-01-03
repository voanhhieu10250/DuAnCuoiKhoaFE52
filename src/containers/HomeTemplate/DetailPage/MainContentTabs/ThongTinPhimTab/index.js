import React from "react";
import { useSelector } from "react-redux";
import handleExchangeDateString from "../../../../../functions/exchangeDateString";

export default function ThongTinPhimTab() {
  const filmInfoData = useSelector((state) => state.MovieDetailsReducer.data);
  if (!filmInfoData) return [];
  const { ngayKhoiChieu, moTa } = filmInfoData;

  return (
    <div className="tab-pane fade" id="thongTinPhim">
      <div className="row mx-0 detailFilmInfo detailMainStyle">
        <div className="col-12 col-sm-6 left">
          <div className="leftInfo">
            <p className="contentTitle">Ngày công chiếu</p>
            <p className="contentInfo">
              {handleExchangeDateString(ngayKhoiChieu, "dateWithDotRevert")}
            </p>
          </div>
          <div className="leftInfo">
            <p className="contentTitle">Đạo diễn</p>
            <p className="contentInfo">Unknown</p>
          </div>
          <div className="leftInfo">
            <p className="contentTitle">Diễn viên</p>
            <p className="contentInfo">Unknown</p>
          </div>
          <div className="leftInfo">
            <p className="contentTitle">Thể Loại</p>
            <p className="contentInfo">Chiếu rạp</p>
          </div>
          <div className="leftInfo">
            <p className="contentTitle">Định dạng</p>
            <p className="contentInfo">2D/Digital</p>
          </div>
          <div className="leftInfo">
            <p className="contentTitle">Quốc Gia SX</p>
            <p className="contentInfo">Unknown</p>
          </div>
        </div>
        <div className="col-12 col-sm-6 right">
          <div className="leftInfo">
            <p className="contentTitle">Nội dung</p>
          </div>
          <div className="leftInfo">
            <p className=".contentInfoFull">{moTa}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
