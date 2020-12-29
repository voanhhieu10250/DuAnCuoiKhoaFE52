import React from "react";
import DetailMainTop from "./DetailMainTop";
import MainContentTabs from "./MainContentTabs";

export default function DetailPage(props) {
  const { id } = props.match.params;
  const maPhim = id.slice(0, id.indexOf("-"));
  return (
    <div className="mainContent container-fluid px-0" id="detailPage">
      <DetailMainTop idPhim={maPhim} />
      <MainContentTabs />
    </div>
  );
}
