import { combineReducers } from "redux";
import ListMovieReducer from "./listMovieReducer";
import MovieDetailsReducer from "./movieDetailsReducer";
import ListUpComingMovieReducer from "./listUpComingMovieReducer";
import ListCinemaSystemReducer from "./listCinemaSystemReducer";
import ListCinemaShowTimesReducer from "./listCinemaReducer";
import MovieReviewReducer from "./movieReviewReducer";
import PutMovieReviewReducer from "./putMovieReviewReducer";
import userLoginReducer from "./userLoginReducer";

const rootReducer = combineReducers({
  ListMovieReducer,
  MovieDetailsReducer,
  ListUpComingMovieReducer,
  ListCinemaSystemReducer,
  ListCinemaShowTimesReducer,
  MovieReviewReducer,
  PutMovieReviewReducer,
  userLoginReducer,
});

export default rootReducer;
