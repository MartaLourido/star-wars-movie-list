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

const Header = ({ onSort, onSearch }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSort = (option) => {
    setIsDropdownVisible(false);
    onSort(option);
  };

  const handleSearch = (event) => {
    onSearch(event.target.value);
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
        <SearchInput type="text" placeholder="🔍 Search..." onChange={handleSearch} />
      </SearchContainer>
    </StyledHeader>
  );
};

export default Header;
