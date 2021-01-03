export default function renderStarsImg(danhGia, ImgClassName = "") {
  let listStar = [];
  let starAmount = danhGia / 2;
  let halfStar = starAmount - Math.trunc(starAmount);
  if (halfStar > 0) {
    for (let index = 0; index < starAmount - halfStar; index++) {
      listStar.push(
        <img
          src="../img/star1.png"
          key={index}
          className={ImgClassName}
          alt=""
        />
      );
    }
    listStar.push(
      <img
        src="../img/star1.2.png"
        key={listStar.length}
        className={ImgClassName}
        alt=""
      />
    );
  } else {
    while (starAmount > 0) {
      listStar.push(
        <img
          src="../img/star1.png"
          key={starAmount}
          className={ImgClassName}
          alt=""
        />
      );
      starAmount--;
    }
  }
  return listStar;
}
