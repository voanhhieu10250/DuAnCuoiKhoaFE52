import React, { Fragment } from "react";

const SelectStar = ({ rate, setRate }) => {
  const renderSelectedStar = () => {
    const listStar = [];
    for (let i = 1; i <= 10; i++) {
      const styleList =
        // i <= rate
        //   ? {
        //       backgroundImage: "url(../../../../../../img/StarSelect.png)",
        //       opacity: 1,
        //     }
        //   : {
        //       backgroundImage: "url(../../../../../../img/StarSelect.png)",
        //       opacity: 0,
        //     };
        {
          backgroundImage: "url(../../../../../../img/StarSelect.png)",
          opacity: i <= rate ? 1 : 0,
        };
      listStar.push(
        <span
          className={i % 2 === 0 ? "halfRight" : "halfLeft"}
          style={styleList}
          key={i}
          onClick={() => handleRating(i)}
        />
      );
    }
    return listStar;
  };

  const handleRating = (ratePoint) => {
    if (ratePoint !== rate) {
      setRate(10);
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

export default SelectStar;
