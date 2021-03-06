import React, { memo } from "react";
import TabNewsDetails from "./TabNewsDetails";
import TabNewsList from "./TabNewsList";
import { Element } from "react-scroll";
import bgNewsBlock from "../../../../img/back-news.png";

function NewsBlock() {
  return (
    <Element
      name="newsblock"
      id="newsblock"
      className="newsblock mainMaxWidth container-fluid"
      style={{
        backgroundImage: `url(${bgNewsBlock})`,
      }}
    >
      <ul
        className="nav nav-tabs navCenter text-center"
        id="newsNav"
        role="tablist"
      >
        <TabNewsList />
      </ul>
      <div className="tab-content" id="newsContent">
        <TabNewsDetails tabNum={0} />
        <TabNewsDetails tabNum={1} />
        <TabNewsDetails tabNum={2} />
      </div>
    </Element>
  );
}

export default memo(NewsBlock);
