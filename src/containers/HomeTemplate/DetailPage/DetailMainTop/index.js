import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetMovieDetailsApi } from "../../../../redux/actions/actMovieDetailsApi";
import PlayModalBtn from "../../../../components/PlayModalBtn";
import handleExchangeDateString from "../../../../functions/exchangeDateString";
import Loader from "../../../../components/Loader";
import renderStarsImg from "../../../../functions/renderStarsImg";

function DetailMainTop({ idPhim }) {
  const movieDetailData = useSelector(
    (state) => state.MovieDetailsReducer.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetMovieDetailsApi(idPhim));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = () => {
    const {
      hinhAnh,
      maPhim,
      trailer,
      tenPhim,
      danhGia,
      ngayKhoiChieu,
    } = movieDetailData;
    return (
      <div id="detailMainTop">
        <div className="styleBlur">
          <img src={hinhAnh} alt="" />
        </div>
        <div className="styleGradius"></div>
        <div className="detailMainInfo mainMaxWidth2 row">
          <div className="col-sm-3 col-xs-4 filmPosterTop">
            <img src={hinhAnh} className="detailFilmImage" alt="" />
            <PlayModalBtn keyId={maPhim} videoLink={trailer} />
          </div>
          <div className="col-sm-5 infoMain text-white">
            <p className="showDate">{renderShowingDate(ngayKhoiChieu)}</p>
            <p className="filmTitle">
              <span className="spanRed ageRange">C13</span>
              <span>{tenPhim}</span>
            </p>
            <p style={{ marginBottom: 0 }}>100 phút - 0 IMDb - 2D/Digital</p>
            <button className="btnBuyTicket">Mua vé</button>
          </div>
          <div className="col-sm-2 circleRating">
            <div className="circlePercent">
              <div className="circleBorder"></div>
              <span>{danhGia}</span>
              <div>
                {danhGia <= 5 ? (
                  <div
                    className="firstHalf"
                    style={{ borderColor: "#3a3a3a" }}
                  ></div>
                ) : (
                  <div
                    className="firstHalf"
                    style={{
                      borderColor: "#7ed321",
                      transform: "rotate(180deg)",
                    }}
                  ></div>
                )}
                <div
                  className="secondHalf"
                  style={{ transform: `rotate(${danhGia * 36}deg)` }}
                ></div>
              </div>
            </div>
            <div className="starBox mx-0">{renderStarsImg(danhGia)}</div>
            <div className="reviewers mx-0">
              <span className="reviewsNum">116 người đánh giá</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderShowingDate = (date) => {
    return handleExchangeDateString(date, "dateWithDotRevert");
  };

  if (movieDetailData === null) return <Loader />;
  return renderContent();
}

export default memo(DetailMainTop);
