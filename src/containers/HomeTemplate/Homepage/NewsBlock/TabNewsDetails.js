import React, { Fragment } from "react";
import ReadMoreBtn from "../../../../components/ReadMoreBtn";
import { tabNewsData } from "../../../../data";
// images
import likeIcon from "../../../../img/icons/like.png";
import commentIcon from "../../../../img/icons/comment.png";

export default function TabNewsDetails({ tabNum }) {
  const listTabId = ["showingNews", "showingReview", "showingPromotion"];
  const tabData = tabNewsData[tabNum];

  const renderDetail = () => {
    return tabData.map((item, index) => (
      <div
        className={`newsItems col-12 col-sm-12 ${
          index === 0 || index === 1 ? "col-md-6" : "col-md-4"
        }`}
        key={index}
      >
        {index !== 4 ? (
          <Fragment>
            <div className="newsThumbnail">
              <img src={item.image} alt="" />
            </div>
            <a href="/">
              <p className="newsTitle">{item.title}</p>
            </a>
            <p className="newsDescription">{item.content}</p>
            <div className="newsVoting">
              <div className="wrapIcon">
                <img src={likeIcon} alt="" />
                <span>0</span>
              </div>
              <div className="wrapIcon">
                <a href="/">
                  <img src={commentIcon} alt="" />
                  <span>1</span>
                </a>
              </div>
            </div>
          </Fragment>
        ) : (
          renderSideNews(item)
        )}
      </div>
    ));
  };

  const renderSideNews = (item) => {
    return item.map((i, index) => (
      <div className="subItems col-xs-12" key={index}>
        <div className="newsThumbnail">
          <img src={i.img} alt="" />
        </div>
        <a href="/">
          <p className="newsTitle">{i.title}</p>
        </a>
      </div>
    ));
  };

  return (
    <div
      className={tabNum === 0 ? "tab-pane fade show active" : "tab-pane fade"}
      id={listTabId[tabNum]}
      role="tabpanel"
      aria-labelledby="news-tab"
    >
      {renderDetail()}
      <div
        className="collapse news-collapse row mr-0 ml-0 collapse"
        id={`tab-collapse-${tabNum}`}
      >
        {renderDetail()}
      </div>
      <ReadMoreBtn tabId={`tab-collapse-${tabNum}`} />
    </div>
  );
}
