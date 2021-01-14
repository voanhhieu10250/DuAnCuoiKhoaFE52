import React, { memo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import renderStarsImg from "../../../../../functions/renderStarsImg";
import ReviewBoxLikeBtn from "./reviewBoxLikeBtn";
import InputReviewSection from "./inputReviewSection";
import { actSetLikeOnPost } from "./modules/action";

function DanhGiaPhimTab() {
  const prevDataLength = useRef(0);
  const reviewData = useSelector((state) => state.MovieReviewReducer.data);
  const loading = useSelector((state) => state.MovieReviewReducer.loading);
  const dispatch = useDispatch();

  const renderListComment = () => {
    if (!reviewData) return [];
    prevDataLength.current = reviewData.listComment.length;
    return reviewData.listComment
      .map((item, index) => {
        dispatch(actSetLikeOnPost({ comment: item, index }));
        return (
          <div className="reviewerContain" key={index}>
            <div className="commentReviewer">
              <div className="m-0 mainInfo">
                <div className="infoReviewer">
                  <div className="infoReviewerIcon">
                    <img src={item.avatar} alt="" />
                  </div>
                  <div className="infoReviewerName">
                    {item.reviewer}
                    <p className="infoReviewerTime ">
                      {handleReviewTime(item.time)}
                    </p>
                  </div>
                </div>
                <div className="infoStar">
                  <div className="core">
                    <p className="text-center mb-0">{item.rating}</p>
                  </div>
                  <div className="star mx-0">
                    {renderStarsImg(item.rating, "smallStar")}
                  </div>
                </div>
              </div>
              <div className="mx-0 mainComment">
                <div className="comment">{item.comment}</div>
              </div>
              <div className="row mx-0">
                <div className="col-12 count">
                  <ReviewBoxLikeBtn index={index} />
                </div>
              </div>
            </div>
          </div>
        );
      })
      .reverse();
  };

  const handleReviewTime = (time) => {
    const nowTime = new Date();
    const reviewTime = new Date(time);
    const diffMillisecond = Math.abs(nowTime - reviewTime);
    if (diffMillisecond < 1000 * 60 * 60) {
      const diffMinute = Math.ceil(diffMillisecond / (1000 * 60));
      return diffMinute === 1 ? "Vừa xong" : `${diffMinute} phút trước`;
    }
    if (diffMillisecond > 1000 * 60 * 60 * 24)
      return `${Math.ceil(diffMillisecond / (1000 * 60 * 60 * 24))} ngày trước`;
    if (diffMillisecond > 1000 * 60 * 60 * 24 * 30)
      return `${Math.ceil(
        diffMillisecond / (1000 * 60 * 60 * 24 * 30)
      )} tháng trước`;
    if (diffMillisecond >= 1000 * 60 * 60 * 24 * 365)
      return `${Math.ceil(
        diffMillisecond / (1000 * 60 * 60 * 24 * 365)
      )} năm trước`;
    return `${Math.ceil(diffMillisecond / (1000 * 60 * 60))} giờ trước`;
  };

  const renderLoadingDiv = () => {
    const tempArr = [];
    for (let i = 0; i < prevDataLength.current; i++) {
      tempArr.push(
        <div
          style={{
            width: 578,
            height: 163,
            margin: "15px calc(50% - 290px) 0",
            borderRadius: 3,
            borderBottom: "none",
            border: "1px solid #e6e6e6",
            backgroundColor: "#fff",
          }}
          key={i}
        />
      );
    }
    return tempArr;
  };

  return (
    <div className="tab-pane fade" id="danhGiaPhim">
      <div className="detailReviewer">
        <div className="row mx-0  detailMainStyle">
          <InputReviewSection />
        </div>
        <div id="listComment">
          {reviewData && !loading ? renderListComment() : renderLoadingDiv()}
        </div>
      </div>
    </div>
  );
}

export default memo(DanhGiaPhimTab);
