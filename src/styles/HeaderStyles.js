import styled from 'styled-components';

export const StyledHeader = styled.header`
  align-items: center;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: relative; 
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 1rem;
  width: 100%;
`;

export const SortButton = styled.button`
  width: auto;
  margin-right: 1rem;
`;

export const SearchInput = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  flex-grow: 1;
  padding: 0.5rem;
`;

export const SortOptionsContainer = styled.div`
  background-color: #fff; 
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: calc(100% + 10px);
  width: auto;
`;

export const SortOption = styled.li`
  cursor: pointer;
  list-style: none; 
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const CloseButton = styled.button`
  background-color: #f0f0f0;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 0.5rem;
  padding: 0.5rem;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    background-color: #e0e0e0;
  }
`;
