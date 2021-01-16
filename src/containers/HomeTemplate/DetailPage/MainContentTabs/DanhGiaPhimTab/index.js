import React, { Fragment, memo, useRef } from "react";
import { useSelector } from "react-redux";
import renderStarsImg from "../../../../../functions/renderStarsImg";
import ReviewBoxLikeBtn from "./reviewBoxLikeBtn";
import InputReviewSection from "./inputReviewSection";

function DanhGiaPhimTab() {
  const reviewUpToNow = useRef(null);
  const likeBtnClicked = useRef(-1);
  // movieReview - chỉ sài 1 lần duy nhất ở component này
  const reviewData = useSelector((state) => state.MovieReviewReducer.data);
  const loadingGetReview = useSelector(
    (state) => state.MovieReviewReducer.loading
  );
  // Put movieReview
  const loadingPutReview = useSelector(
    (state) => state.PutMovieReviewReducer.loading
  );
  const putReviewSuccess = useSelector(
    (state) => state.PutMovieReviewReducer.data
  );

  const renderListComment = () => {
    return reviewUpToNow.current.listComment
      .map((item, index) => {
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
                  {loadingPutReview && index === likeBtnClicked.current ? (
                    <div style={{ color: "#737576" }}>Loading...</div>
                  ) : (
                    <ReviewBoxLikeBtn
                      index={index}
                      liked={item.liked}
                      reviewData={reviewUpToNow.current}
                      setLikeBtnIndex={handleLikeBtnClicked}
                    />
                  )}
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

  const handleLikeBtnClicked = (index) => {
    likeBtnClicked.current = index;
  };

  if (loadingGetReview || !reviewData) return <Fragment />;
  if (
    !putReviewSuccess &&
    reviewData &&
    !loadingGetReview &&
    !reviewUpToNow.current
  )
    reviewUpToNow.current = reviewData;
  if (putReviewSuccess && !loadingPutReview) {
    reviewUpToNow.current = putReviewSuccess;
    likeBtnClicked.current = -1;
  }

  return (
    <div className="tab-pane fade" id="danhGiaPhim">
      <div className="detailReviewer">
        <div className="row mx-0  detailMainStyle">
          <InputReviewSection reviewData={reviewUpToNow.current} />
        </div>
        <div id="listComment">{renderListComment()}</div>
      </div>
    </div>
  );
}

export default memo(DanhGiaPhimTab);
