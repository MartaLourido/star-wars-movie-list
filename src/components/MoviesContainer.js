import {
  Container,
  Divider,
  LeftContainer,
  RightContainer,
} from '../styles/MoviesContainerStyles';
import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';

const MoviesContainer = ({ sortBy, searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery?.toLowerCase() ?? '')
  );  

  const sortedMovies = filteredMovies.sort((movieA, movieB) => {
    if (sortBy === 'episodes') {
      return movieA.episode_id - movieB.episode_id;
    } else if (sortBy === 'year') {
      return new Date(movieA.release_date) - new Date(movieB.release_date);
    }
    return null;
  });

  return (
    <Container>
      <LeftContainer>
        <MovieList movies={sortedMovies} handleClick={handleClick} />
      </LeftContainer>
      <Divider />
      <RightContainer>
        <h2>{selectedMovie?.title || 'No movie selected'}</h2>
        <p>{selectedMovie?.opening_crawl || ''}</p>
      </RightContainer>
    </Container>
  );
};

export default MoviesContainer;
