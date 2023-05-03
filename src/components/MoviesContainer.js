import {
  Container,
  Divider,
  LeftContainer,
  RightContainer,
} from '../styles/MoviesContainerStyles';
import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';

const MoviesContainer = ({ sortBy }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/films/');
        const data = await response.json();
        setMovies(data.results);
        console.log(data); // TODO: Remove
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const sortedMovies = [...movies];
  
    if (sortBy === 'episodes') {
      sortedMovies.sort((movieA, movieB) => movieA.episode_id - movieB.episode_id);
    } else if (sortBy === 'year') {
      sortedMovies.sort(
        (movieA, movieB) => new Date(movieA.release_date) - new Date(movieB.release_date)
      );
    }
  
    setMovies(sortedMovies);
  }, [sortBy, movies]);
  

  return (
    <Container>
      <LeftContainer>
        <MovieList movies={movies} />
      </LeftContainer>
      <Divider />
      <RightContainer></RightContainer>
    </Container>
  );
};

export default MoviesContainer;
