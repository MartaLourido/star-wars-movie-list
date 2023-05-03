import React, { useState } from 'react';

import { AppContainer } from './styles/AppStyles';
import Header from './components/Header';
import MoviesContainer from './components/MoviesContainer';

const App = () => {
  const [sortBy, setSortBy] = useState('');

  const handleSort = (option) => {
    setSortBy(option);
  };

  return (
    <AppContainer>
      <Header onSort={handleSort} />
      <MoviesContainer sortBy={sortBy} />
    </AppContainer>
  );
};

export default App;
