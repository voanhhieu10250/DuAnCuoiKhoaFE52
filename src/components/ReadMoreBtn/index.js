import React from "react";

export default function ReadMoreBtn({ tabId }) {
  return (
    <div className="wrapButtonSeeMoreNews text-center text-center">
      <button
        className="btnViewMore"
        type="button"
        data-toggle="collapse"
        data-target={`#${tabId}`}
        aria-expanded="false"
        aria-controls={tabId}
      >
        XEM THÊM
      </button>
    </div>
  );
}
