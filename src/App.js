import { AppContainer } from './styles/AppStyles';
import Header from './components/Header';
import MoviesContainer from './components/MoviesContainer';
import React from 'react';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <MoviesContainer/>
    </AppContainer>
  );
};

export default App;
