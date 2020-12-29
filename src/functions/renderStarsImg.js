export default function renderStarsImg(danhGia) {
  let listStar = [];
  let starAmount = danhGia / 2;
  let halfStar = starAmount - Math.trunc(starAmount);
  if (halfStar > 0) {
    for (let index = 0; index < starAmount - halfStar; index++) {
      listStar.push(<img src="../img/star1.png" key={index} alt="" />);
    }
    listStar.push(
      <img src="../img/star1.2.png" key={listStar.length} alt="" />
    );
  } else {
    while (starAmount > 0) {
      listStar.push(<img src="../img/star1.png" key={starAmount} alt="" />);
      starAmount--;
    }
  }
  return listStar;
}
