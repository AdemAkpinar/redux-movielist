import React from "react";
import { connect } from "react-redux";
import { selectMovie } from "../actions/index";

const MovieList = (props) => {
  const listItems = props.movies.map((movie) => {
    return (
      <div key={movie.title} className="container">
        <span className="alert alert-primary">{movie.title}</span>
        <button
          className="btn btn-primary m-1"
          onClick={() => props.selectMovie(movie)}
        >
          details
        </button>
      </div>
    );
  });

  return (
    <div className="container">
      <h2>MovieList</h2>
      <ul>{listItems}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = {
  selectMovie: selectMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
