import React, { memo } from "react";
import PlayModalBtn from "../PlayModalBtn";
import { Link } from "react-router-dom";
import renderStarsImg from "../../functions/renderStarsImg";

function Movie(props) {
  const { hinhAnh, tenPhim, danhGia, maPhim, trailer, biDanh } = props.item;

  return (
    <div className="objects">
      <div className="object_item">
        <img
          className="filmImg"
          src={hinhAnh}
          style={{ width: "215px", height: "318px" }}
          alt=""
        />
        <div className="film_Info">
          <PlayModalBtn keyId={maPhim} videoLink={trailer} />
          <Link className="linkToPage" to={`/phim/${maPhim}-${biDanh}`}></Link>
        </div>
        <div className="filmScore">
          <p className="m-0">{danhGia > 10 ? 10 : danhGia}</p>
          <p className="smallStar">
            {renderStarsImg(danhGia > 10 ? 10 : danhGia)}
          </p>
        </div>
      </div>
      <div className="object_item2">
        <p className="filmTitle">
          <span className="spanRed">C18</span>
          {tenPhim} - (C18)
        </p>
        <p className="filmLength">100 phút</p>
        <Link className="btnMuaVe" to={`/phim/${maPhim}-${biDanh}`}>
          Mua Vé
        </Link>
      </div>
    </div>
  );
}

export default memo(Movie);
