import { combineReducers } from "redux";

const moviesReducer = () => {
  return [
    { title: "Film1", releaseDate: "05-05-2005", rating: 7 },
    { title: "Film2", releaseDate: "01-01-2001", rating: 7.4 },
    { title: "Film3", releaseDate: "03-03-2003", rating: 7.8 },
    { title: "Film4", releaseDate: "11-11-2011", rating: 9 },
    { title: "Film5", releaseDate: "07-07-2007", rating: 7.4 }
  ];
};

const selectedMovieReducer = (state = null, action) => {
  switch (action.type) {
    case "MOVIE_SELECTED":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer
});
