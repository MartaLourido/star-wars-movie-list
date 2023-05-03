import { Episode, List, ListItem, MovieTitle, ReleaseDate } from '../styles/MovieListStyles';

import React from 'react';

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <div>No movies found</div>;
  }

  return (
    <List>
      {movies.map((movie) => (
        <ListItem key={movie.episode_id}>
          <Episode>{`EPISODE ${movie.episode_id}`}</Episode>
          <MovieTitle>{movie.title}</MovieTitle>
          <ReleaseDate>{movie.release_date}</ReleaseDate>
        </ListItem>
      ))}
    </List>
  );
};

export default MovieList;
