import React, { memo } from "react";
import TabNewsDetails from "./TabNewsDetails";
import TabNewsList from "./TabNewsList";

function NewsBlock() {
  return (
    <div id="newsblock" className="newsblock mainMaxWidth container-fluid">
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
    </div>
  );
}

export default memo(NewsBlock);
