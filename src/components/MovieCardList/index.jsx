import PropTypes from "prop-types";
import React from "react";
import Description from "./Description";
import Header from "./Header";
import Poster from "./Poster";

function MovieCardList({ movies }) {
  return movies.map(
    ({ id, title, poster_path: posterPath, overview: description }) => (
      <section key={id}>
        <Header title={title} />
        <Poster posterPath={posterPath} />
        <Description description={description} />
      </section>
    )
  );
}

MovieCardList.propTypes = {
  // Array is required, but it can be empty
  movies: PropTypes.arrayOf(
    // TODO (optional): Add whatever specific props you expect to use inside of `shape`.
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieCardList;
