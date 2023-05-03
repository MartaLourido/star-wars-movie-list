import {
  CloseButton,
  SearchContainer,
  SearchInput,
  SortButton,
  SortOption,
  SortOptionsContainer,
  StyledHeader
} from '../styles/HeaderStyles';
import React, { useState } from 'react';

const Header = ({ onSort }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSort = (option) => {
    setIsDropdownVisible(false);
    onSort(option);
  };

  return (
    <StyledHeader>
      <SortButton onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
        Sort by...
      </SortButton>
      {isDropdownVisible && (
        <SortOptionsContainer>
          <CloseButton onClick={() => setIsDropdownVisible(false)}>X</CloseButton>
          <ul>
            <SortOption onClick={() => handleSort('episodes')}>Episodes</SortOption>
            <SortOption onClick={() => handleSort('year')}>Year</SortOption>
          </ul>
        </SortOptionsContainer>
      )}
      <SearchContainer>
        <SearchInput type="text" placeholder="🔍 Search..." />
      </SearchContainer>
    </StyledHeader>
  );
};

export default Header;
