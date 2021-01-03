import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import renderStarsImg from "../../../../../functions/renderStarsImg";
import { actPutMovieReview } from "../../../../../redux/actions/actPutMovieReview";
import ReviewBoxLikeBtn from "./reviewBoxLikeBtn";
import InputReviewSection from "./inputReviewSection";

function DanhGiaPhimTab() {
  const reviewData = useSelector((state) => state.MovieReviewReducer.data);
  const reviewDataChanged = useSelector(
    (state) => state.PutMovieReviewReducer.dataChanged
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (reviewData) {
        const { listComment } = reviewData;
        if (reviewDataChanged.length > 0) {
          listComment.forEach((item, index) => {
            if (reviewDataChanged[index]) item = reviewDataChanged[index];
          });
          dispatch(actPutMovieReview(listComment, reviewData.maPhim));
        }
        console.log("dispatch data review changed ne!!");
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderListComment = () => {
    if (!reviewData) return [];
    return reviewData.listComment.map((item, index) => {
      console.log(item);
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
                    {handleReviewTime(item.time)} giờ trước
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
                <ReviewBoxLikeBtn item={item} index={index} />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const handleReviewTime = (time) => {
    const nowTime = new Date();
    const reviewTime = new Date(time);
    const diffTime = Math.abs(nowTime - reviewTime);
    return Math.ceil(diffTime / (100 * 60 * 60));
  };

  return (
    <div className="tab-pane fade" id="danhGiaPhim">
      <div className="detailReviewer">
        <div className="row mx-0  detailMainStyle">
          <InputReviewSection />
        </div>
        <div id="listComment">{reviewData ? renderListComment() : ""}</div>
      </div>
    </div>
  );
}

export default memo(DanhGiaPhimTab);
