import {
  Container,
  Divider,
  LeftContainer,
  RightContainer,
} from '../styles/MoviesContainerStyles';
import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';

const MoviesContainer = () => {
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
