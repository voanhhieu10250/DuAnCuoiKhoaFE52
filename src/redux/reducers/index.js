import { combineReducers } from "redux";
import ListMovieReducer from "./listMovieReducer";
import MovieDetailsReducer from "./movieDetailsReducer";
import ListUpComingMovieReducer from "./listUpComingMovieReducer";
import ListCinemaSystemReducer from "./listCinemaSystemReducer";
import ListCinemaShowTimesReducer from "./listCinemaReducer";
import MovieReviewReducer from "./movieReviewReducer";
import PutMovieReviewReducer from "./putMovieReviewReducer";
import userLoginReducer from "./userLoginReducer";
import DetailCinemaRoomReducer from "./cinemaRoomDetailReducer";
import PostBookedSeatsReducer from "./postBookedSeatsReducer";
import PostNewUserReducer from "./postNewUserReducer";
import PutUserInfoReducer from "./putUserInfoReducer";
import ListMoviePerPageReducer from "./getListMoviePerPage";
import PostUpdateMovieReducer from "./postUpdateMovieReducer";
import PostUploadImageReducer from "./postUploadImage";
import DeleteMovieReducer from "./deleteMovieReducer";
import PostNewMovieReducer from "./PostNewMovieReducer";
import GetListUserReducer from "./getListUserReducer";
import ListUserPerPageReducer from "./ListUserPerPageReducer";
import DeleteUserReducer from "./DeleteUserReducer";
import AddNewUserReducer from "./addNewUserReducer";

const rootReducer = combineReducers({
  ListMovieReducer,
  MovieDetailsReducer,
  ListUpComingMovieReducer,
  ListCinemaSystemReducer,
  ListCinemaShowTimesReducer,
  MovieReviewReducer,
  PutMovieReviewReducer,
  userLoginReducer,
  DetailCinemaRoomReducer,
  PostBookedSeatsReducer,
  PostNewUserReducer,
  PutUserInfoReducer,
  ListMoviePerPageReducer,
  PostUpdateMovieReducer,
  PostUploadImageReducer,
  DeleteMovieReducer,
  PostNewMovieReducer,
  GetListUserReducer,
  ListUserPerPageReducer,
  DeleteUserReducer,
  AddNewUserReducer,
});

export default rootReducer;
