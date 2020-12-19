import React, { Fragment } from "react";

export default function TabNewsList() {
  return (
    <Fragment>
      <li className="nav-item">
        <a
          className="nav-link active"
          id="news-tab"
          data-toggle="tab"
          href="#showingNews"
          role="tab"
          aria-controls="news"
          aria-selected="true"
        >
          Điện Ảnh 24h
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="review-tab"
          data-toggle="tab"
          href="#showingReview"
          role="tab"
          aria-controls="review"
          aria-selected="false"
        >
          Review
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="promotion-tab"
          data-toggle="tab"
          href="#showingPromotion"
          role="tab"
          aria-controls="promotion"
          aria-selected="false"
        >
          Khuyến Mãi
        </a>
      </li>
    </Fragment>
  );
}
