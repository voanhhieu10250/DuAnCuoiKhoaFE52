import starIcon from "../img/icons/star1.png";
import halfStarIcon from "../img/icons/star1.2.png";

export default function renderStarsImg(danhGia, ImgClassName = "") {
  let listStar = [];
  let starAmount = danhGia / 2;
  let halfStar = starAmount - Math.trunc(starAmount);
  if (halfStar > 0) {
    for (let index = 0; index < starAmount - halfStar; index++) {
      listStar.push(
        <img src={starIcon} key={index} className={ImgClassName} alt="" />
      );
    }
    listStar.push(
      <img
        src={halfStarIcon}
        key={listStar.length}
        className={ImgClassName}
        alt=""
      />
    );
  } else {
    while (starAmount > 0) {
      listStar.push(
        <img src={starIcon} key={starAmount} className={ImgClassName} alt="" />
      );
      starAmount--;
    }
  }
  return listStar;
}
