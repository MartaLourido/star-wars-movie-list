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

  useEffect(() => {
    if (searchQuery) {
      const foundMovie = movies.find(
        (movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (foundMovie) {
        setSelectedMovie(foundMovie);
      }
    } else {
      setSelectedMovie(null);
    }
  }, [searchQuery, movies]);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  const displayMovies = selectedMovie ? [selectedMovie] : movies;

  return (
    <Container>
      <LeftContainer>
        <MovieList
          movies={displayMovies.sort((movieA, movieB) => {
            if (sortBy === 'episodes') {
              return movieA.episode_id - movieB.episode_id;
            } else if (sortBy === 'year') {
              return new Date(movieA.release_date) - new Date(movieB.release_date);
            }
            return null;
          })}
          handleClick={handleClick}
        />
      </LeftContainer>
      <Divider />
      <RightContainer>
        {selectedMovie ? (
          <>
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.opening_crawl}</p>
          </>
        ) : (
          <>
            <h2>No movie selected</h2>
            <p></p>
          </>
        )}
      </RightContainer>
    </Container>
  );
};

export default MoviesContainer;
