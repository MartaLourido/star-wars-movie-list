import styled from 'styled-components';

export const StyledHeader = styled.header`
  align-items: center;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 1rem;
  width: 100%;
`;

export const SortButton = styled.button`
  width: 20%
`;

export const SearchInput = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  flex-grow: 1;
  padding: 0.5rem;
`;
