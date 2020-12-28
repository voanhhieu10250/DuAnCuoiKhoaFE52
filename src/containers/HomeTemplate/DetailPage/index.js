import React from "react";
import PlayModalBtn from "../../../components/PlayModalBtn";

export default function DetailPage() {
  return (
    <div className="mainContent container-fluid px-0" id="detailPage">
      <div id="detailMainTop">
        <div className="styleBlur">
          <img
            src="./img/ac-quy-doi-dau-deliver-us-from-evil-c16-15984134403610_215x318.png"
            alt=""
          />
        </div>
        <div className="styleGradius"></div>
        <div className="detailMainInfo mainMaxWidth2 row">
          <div className="col-sm-3 col-xs-4 filmPosterTop">
            <img
              src="./img/ac-quy-doi-dau-deliver-us-from-evil-c16-15984134403610_215x318.png"
              className="detailFilmImage"
              alt=""
            />
            <PlayModalBtn
              keyId="skdfgh"
              videoLink="https://www.youtube.com/embed/oI3kmNnKjoc"
            />
          </div>
          <div className="col-sm-5 infoMain text-white">
            <p className="showDate">18.12.2020</p>
            <p className="filmTitle">
              <span className="spanRed ageRange">C13</span>
              <span>Nữ Thần Chiến Binh 1984 - Wonder Woman 1984</span>
            </p>
            <p style={{ marginBottom: 0 }}>100 phút - 0 IMDb - 2D/Digital</p>
            <button className="btnBuyTicket">Mua vé</button>
          </div>
          <div className="col-sm-2 circleRating">
            <div className="circlePercent">
              <div className="circleBorder"></div>
              <span>7</span>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
