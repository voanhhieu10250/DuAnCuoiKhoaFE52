import {
  NEW_POST_REVIEW_CONTENT,
  NEW_POST_REVIEW_RATING,
  RESET_NEW_POST_REVIEW,
} from "./contants";

const initialState = {
  updatedReviewData: [],
  rating: 5,
  comment: "",
  time: "",
  reviewer: "",
  avatar: "",
  liked: [],
  newUpdate: false,
};

const ReviewFeatureReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_POST_REVIEW_RATING:
      state.rating = payload;
      return { ...state };

    case NEW_POST_REVIEW_CONTENT:
      const account = JSON.parse(localStorage.getItem("UserAccount"));
      const { listComment } = payload.movieReview;
      const time = new Date();

      state.time = time.toISOString();
      state.reviewer = account.taiKhoan;
      state.avatar = `https://i.pravatar.cc/150?u=${account.taiKhoan}`;
      state.comment = payload.comment;
      listComment.push({
        rating: state.rating,
        comment: state.comment,
        time: state.time,
        reviewer: state.reviewer,
        avatar: state.avatar,
        liked: state.liked,
      });
      state.updatedReviewData = listComment;
      state.newUpdate = true;
      return { ...state };
    case RESET_NEW_POST_REVIEW:
      state.updatedReviewData = [];
      state.rating = 5;
      state.comment = "";
      state.time = "";
      state.reviewer = "";
      state.avatar = "";
      state.liked = [];
      state.newUpdate = false;
      return { ...state };
    default:
      return state;
  }
};
export default ReviewFeatureReducer;
