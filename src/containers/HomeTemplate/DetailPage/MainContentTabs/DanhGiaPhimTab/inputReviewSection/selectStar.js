import React, { Fragment, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actSetRatePostReview } from "../modules/action";

const SelectStar = () => {
  const rate = useSelector((state) => state.ReviewFeatureReducer.rating);
  const dispatch = useDispatch();
  const renderSelectedStar = () => {
    const listStar = [];
    for (let i = 1; i <= 10; i++) {
      let styleList =
        i <= rate
          ? {
              backgroundImage: "url(../../../../../../img/StarSelect.png)",
              opacity: 1,
            }
          : {
              backgroundImage: "url(../../../../../../img/StarSelect.png)",
              opacity: 0,
            };

      if (i % 2 === 0) {
        listStar.push(
          <span
            className="halfRight"
            style={styleList}
            key={i}
            onClick={() => handleRating(i)}
          />
        );
      } else {
        listStar.push(
          <span
            className="halfLeft"
            style={styleList}
            key={i}
            onClick={() => handleRating(i)}
          />
        );
      }
    }
    return listStar;
  };

  const handleRating = (ratePoint) => {
    if (ratePoint !== rate) {
      dispatch(actSetRatePostReview(ratePoint));
    }
  };

  return (
    <Fragment>
      <div className="core">
        <p>
          <strong>
            {rate}
            {rate !== 10 ? ".0" : ""}
          </strong>
        </p>
      </div>
      <div className="starSelect">
        <div
          className="defaultListStar"
          style={{ backgroundImage: "url(../../../../../../img/starBack.png)" }}
        ></div>
        <div className="starSelectList" id="starSelectList">
          {renderSelectedStar()}
        </div>
      </div>
    </Fragment>
  );
};

export default memo(SelectStar);
