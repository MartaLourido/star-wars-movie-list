import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  align-items: center;
  border-bottom: 1px solid #F5F5F5;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

export const Episode = styled.div`
  color: grey;
  flex: 1;
  margin-right: 16px;
`;

export const MovieTitle = styled.div`
  flex: 2;
  margin-right: 16px;
`;

export const ReleaseDate = styled.div`
  flex: 1;
`;

export const EmptyState = styled.div`
  align-items: center;
  display: center;
  padding: 1rem;
`;