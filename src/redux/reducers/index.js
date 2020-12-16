import { combineReducers } from "redux";
import ListMovieReducer from "./listMovieReducer";
import MovieDetailsReducer from "./movieDetailsReducer";
import ListUpComingMovieReducer from "./listUpComingMovieReducer";
import ListCinemaSystemReducer from "./listCinemaSystemReducer";
import ListCinemaShowTimesReducer from "./listCinemaReducer";

const rootReducer = combineReducers({
  ListMovieReducer,
  MovieDetailsReducer,
  ListUpComingMovieReducer,
  ListCinemaSystemReducer,
  ListCinemaShowTimesReducer,
});

export default rootReducer;
