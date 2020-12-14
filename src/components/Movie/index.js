import React from "react";

export default function Movie(props) {
  const { hinhAnh, tenPhim, danhGia } = props.item;

  const renderMovieRanking = () => {
    let listStar = [];
    let starAmount = danhGia / 2;
    let halfStar = starAmount - Math.trunc(starAmount);
    if (halfStar > 0) {
      for (let index = 0; index < starAmount - halfStar; index++) {
        listStar.push(<img src="./img/star1.png" key={index} alt="" />);
        if (index === starAmount - halfStar - 1) {
          listStar.push(<img src="./img/star1.2.png" key={index + 1} alt="" />);
        }
      }
    } else {
      while (starAmount > 0) {
        listStar.push(<img src="./img/star1.png" key={starAmount} alt="" />);
        starAmount--;
      }
    }
    return listStar;
  };

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
          <button className="btnPlay">
            <img src="./img/play-video.png" alt="" />
          </button>
        </div>
        <div className="filmScore">
          <p className="m-0">{danhGia}</p>
          <p className="smallStar">{renderMovieRanking()}</p>
        </div>
      </div>
      <div className="object_item2">
        <p className="filmTitle">
          <span className="spanRed">C18</span>
          {tenPhim} - (C18)
        </p>
        <p className="filmLength">100 phút</p>
        <button className="btnMuaVe">Mua Vé</button>
      </div>
    </div>
  );
}
