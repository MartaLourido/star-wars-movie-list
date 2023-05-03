import {
  SearchContainer,
  SearchInput,
  SortButton,
  StyledHeader
} from '../styles/HeaderStyles';

import React from 'react';

const Header = () => {
  return (
    <StyledHeader>
      <SortButton>Sort by...</SortButton>
      <SearchContainer>
        <SearchInput type="text" placeholder="🔍 Search..." />
      </SearchContainer>
    </StyledHeader>
  );
};

export default Header;
