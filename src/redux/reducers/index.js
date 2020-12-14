import { combineReducers } from "redux";
import ListMovieReducer from "./listMovieReducer";
import MovieDetailsReducer from "./movieDetailsReducer";
import ListUpComingMovieReducer from "./listUpComingMovieReducer";

const rootReducer = combineReducers({
  ListMovieReducer,
  MovieDetailsReducer,
  ListUpComingMovieReducer,
});

export default rootReducer;
