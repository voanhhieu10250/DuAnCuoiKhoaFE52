import React from "react";

export default function ListCinema({ listCinema, cinemaCode, logo }) {
  const renderListCinema = () => {
    // maCumRap của rạp Galaxy bị lỗi cú pháp ở backend
    return listCinema.map((cinema, index) => {
      return (
        <li className="nav-item" role="presentation" key={index}>
          <a
            className={
              index === 0 ? "nav-link active cinema" : "nav-link cinema"
            }
            id={cinema.maCumRap}
            data-toggle="tab"
            href={`#${cinema.maCumRap}-tab`}
            role="tab"
            aria-controls={`${cinema.maCumRap}-tab`}
            aria-selected={index === 0 ? "true" : "false"}
          >
            <img src={logo} className="cinemaImage" alt="" />
            <div className="wrapInfo">
              <span className="nameMovieCinema">
                <span className={typeCinema(cinemaCode)}>
                  {cinema.tenCumRap.slice(0, cinema.tenCumRap.indexOf(" -"))}
                </span>
                {cinema.tenCumRap.slice(cinema.tenCumRap.indexOf(" -"))}
              </span>
              <span className="infoMovieCinema">{cinema.diaChi}</span>
              <span className="redDetail">[chi tiết]</span>
            </div>
          </a>
        </li>
      );
    });
  };

  const typeCinema = (code) => {
    let classString = "colorCinema";
    switch (code) {
      case "CGV":
        classString += " CGV";
        break;

      case "CineStar":
        classString += " CNS";
        break;

      case "MegaGS":
        classString += " MegaGS";
        break;

      case "LotteCinima":
        classString += " Lotte";
        break;

      case "Galaxy":
        classString += " GLX";
        break;

      default:
        break;
    }
    return classString;
  };

  return (
    <ul
      className="nav nav-tabs flex-column scrollBarStyle parentListCinemaFilms"
      role="tablist"
    >
      {renderListCinema()}
    </ul>
  );
}
