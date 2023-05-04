import { Episode, List, ListItem, MovieTitle, ReleaseDate } from '../styles/MovieListStyles';

import EmptyState from './EmptyState';
import React from 'react';

const MovieList = ({ movies, handleClick }) => {
  if (!movies || movies.length === 0) {
    return  <EmptyState text="No movies found"/>;
  }

  return (
    <List>
      {movies.map((movie) => (
        <ListItem key={movie.episode_id} onClick={() => handleClick(movie)}>
          <Episode>{`EPISODE ${movie.episode_id}`}</Episode>
          <MovieTitle>{movie.title}</MovieTitle>
          <ReleaseDate>{movie.release_date}</ReleaseDate>
        </ListItem>
      ))}
    </List>
  );
};

export default MovieList;
