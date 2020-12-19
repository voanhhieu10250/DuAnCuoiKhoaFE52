import React, { Fragment } from "react";
import ReadMoreBtn from "../../../../components/ReadMoreBtn";
import { tabNewsData } from "../../../../data";

export default function TabNewsDetails({ tabNum }) {
  const listTabId = ["showingNews", "showingReview", "showingPromotion"];
  const renderTabDetail = (num) => {
    const tabItem = tabNewsData[num];
    return (
      <Fragment>
        <div className="newsItems col-12 col-sm-12 col-md-6">
          <div className="newsThumbnail">
            <img src={tabItem.pos_1.image} alt="" />
          </div>
          <a href="/">
            <p className="newsTitle ng-binding">{tabItem.pos_1.title}</p>
          </a>
          <p className="newsDescription">{tabItem.pos_1.content}</p>
          <div className="newsVoting">
            <div className="wrapIcon like">
              <img src="./img/like.png" alt="" />
              <span className="amount like ng-binding">0</span>
            </div>
            <div className="wrapIcon comment">
              <a href="/">
                <img src="./img/comment.png" alt="" />
                <span className="amount comment ng-binding">1</span>
              </a>
            </div>
          </div>
        </div>
        <div className="newsItems col-12 col-sm-12 col-md-6">
          <div className="newsThumbnail">
            <img src={tabItem.pos_2.image} alt="" />
          </div>
          <a href="/">
            <p className="newsTitle ng-binding">{tabItem.pos_2.title}</p>
          </a>
          <p className="newsDescription">{tabItem.pos_2.content}</p>
          <div className="newsVoting">
            <div className="wrapIcon">
              <img src="./img/like.png" alt="" />
              <span className="amount like ng-binding">0</span>
            </div>
            <div className="wrapIcon">
              <a href="/">
                <img src="./img/comment.png" alt="" />
                <span className="amount comment ng-binding">1</span>
              </a>
            </div>
          </div>
        </div>
        <div className="newsItems col-12 col-sm-12 col-md-4">
          <div className="newsThumbnail">
            <img src={tabItem.pos_3.image} alt="" />
          </div>
          <a href="/">
            <p className="newsTitle">{tabItem.pos_3.title}</p>
          </a>
          <p className="newsDescription">{tabItem.pos_3.content}</p>
          <div className="newsVoting">
            <div className="wrapIcon">
              <img src="./img/like.png" alt="" />
              <span className="amount like ng-binding">0</span>
            </div>
            <div className="wrapIcon">
              <a href="/">
                <img src="./img/comment.png" alt="" />
                <span className="amount comment ng-binding">1</span>
              </a>
            </div>
          </div>
        </div>
        <div className="newsItems col-12 col-sm-12 col-md-4">
          <div className="newsThumbnail">
            <img src={tabItem.pos_4.image} alt="" />
          </div>
          <a href="/">
            <p className="newsTitle ng-binding">{tabItem.pos_4.title}</p>
          </a>
          <p className="newsDescription">{tabItem.pos_4.content}</p>
          <div className="newsVoting">
            <div className="wrapIcon like">
              <img src="./img/like.png" alt="" />
              <span className="amount like ng-binding">0</span>
            </div>
            <div className="wrapIcon comment">
              <a href="/">
                <img src="./img/comment.png" alt="" />
                <span className="amount comment ng-binding">1</span>
              </a>
            </div>
          </div>
        </div>
        <div className="newsItems col-12 col-sm-12 col-md-4">
          <div className="subItems col-xs-12">
            <div className="newsThumbnail">
              <img src={tabItem.pos_5.line_1.img} alt="" />
            </div>
            <a href="/">
              <p className="newsTitle">{tabItem.pos_5.line_1.title}</p>
            </a>
          </div>
          <div className="subItems col-xs-12">
            <div className="newsThumbnail">
              <img src={tabItem.pos_5.line_2.img} alt="" />
            </div>
            <a href="/">
              <p className="newsTitle">{tabItem.pos_5.line_2.title}</p>
            </a>
          </div>
          <div className="subItems col-xs-12">
            <div className="newsThumbnail">
              <img src={tabItem.pos_5.line_3.img} alt="" />
            </div>
            <a href="/">
              <p className="newsTitle">{tabItem.pos_5.line_3.title}</p>
            </a>
          </div>
          <div className="subItems col-xs-12">
            <div className="newsThumbnail">
              <img src={tabItem.pos_5.line_4.img} alt="" />
            </div>
            <a href="/">
              <p className="newsTitle">{tabItem.pos_5.line_4.title}</p>
            </a>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <div
      className={tabNum === 0 ? "tab-pane fade show active" : "tab-pane fade"}
      id={listTabId[tabNum]}
      role="tabpanel"
      aria-labelledby="news-tab"
    >
      {renderTabDetail(tabNum)}
      <div
        className="collapse news-collapse row mr-0 ml-0 collapse"
        id={`tab-collapse-${tabNum}`}
      >
        {renderTabDetail(tabNum)}
      </div>
      <ReadMoreBtn tabId={`tab-collapse-${tabNum}`} />
    </div>
  );
}
