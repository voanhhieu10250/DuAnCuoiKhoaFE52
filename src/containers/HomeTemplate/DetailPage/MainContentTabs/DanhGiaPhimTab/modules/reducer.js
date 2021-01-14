import {
  NEW_POST_REVIEW_CONTENT,
  NEW_POST_REVIEW_RATING,
  PUT_NEW_LIKES_CHANGED,
  RESET_NEW_POST_REVIEW,
} from "./contants";

const initialState = {
  cloneListComment: [],
  updatedReviewData: [],
  rating: 5,
  newUpdate: false,
};

const ReviewFeatureReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_POST_REVIEW_RATING:
      state.rating = payload;
      return { ...state };

    case NEW_POST_REVIEW_CONTENT:
      const account = JSON.parse(localStorage.getItem("UserAccount"));
      const listComment = state.cloneListComment;
      const time = new Date();
      listComment.push({
        rating: state.rating,
        comment: payload,
        time: time.toISOString(),
        reviewer: account.taiKhoan,
        avatar: `https://i.pravatar.cc/150?u=${account.taiKhoan}`,
        liked: [],
      });

      state.updatedReviewData = listComment;
      state.newUpdate = true;
      return { ...state };

    case RESET_NEW_POST_REVIEW:
      state.cloneListComment = [];
      state.updatedReviewData = [];
      state.rating = 5;
      state.newUpdate = false;
      return { ...state };

    case PUT_NEW_LIKES_CHANGED:
      if (!state.cloneListComment[payload.index]) {
        state.cloneListComment.push(payload.comment);
      }
      if (payload.liked) {
        state.cloneListComment[payload.index].liked = payload.liked;
      }
      return { ...state };

    default:
      return state;
  }
};
export default ReviewFeatureReducer;
