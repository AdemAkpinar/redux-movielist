import React from "react";
import { connect } from "react-redux";

const MovieDetails = (props) => {
  if (!props.selectedMovie) {
    return (
      <div>
        <h2>Movie</h2>
        <div>
          <p>Select Movie</p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="container text-center font-weight-bold"
        style={{ width: "70%" }}
      >
        <h2>Movie</h2>
        <div className="">
          <p>Title: {props.selectedMovie.title}</p>
          <p>Release Date: {props.selectedMovie.releaseDate}</p>
          <p>Rating:{props.selectedMovie.rating}</p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { selectedMovie: state.selectedMovie };
};

export default connect(mapStateToProps)(MovieDetails);
