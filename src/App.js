import React, { useState } from 'react';

import { AppContainer } from './styles/AppStyles';
import Header from './components/Header';
import MoviesContainer from './components/MoviesContainer';

const App = () => {
  const [sortBy, setSortBy] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSort = (option) => {
    setSortBy(option);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <AppContainer>
      <Header onSort={handleSort} onSearch={handleSearch} />
      <MoviesContainer sortBy={sortBy} searchQuery={searchQuery} />
    </AppContainer>
  );
};

export default App;
