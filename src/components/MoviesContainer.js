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
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Container>
      <LeftContainer>
        <MovieList
          movies={movies.sort((movieA, movieB) => {
            if (sortBy === 'episodes') {
              return movieA.episode_id - movieB.episode_id;
            } else if (sortBy === 'year') {
              return new Date(movieA.release_date) - new Date(movieB.release_date);
            }
            return null;
          })}
        />
      </LeftContainer>
      <Divider />
      <RightContainer>
        <h2>{movies[0]?.title || 'Select a movie'}</h2>
        <p>{movies[0]?.opening_crawl || ''}</p>
      </RightContainer>
    </Container>
  );
};

export default MoviesContainer;
