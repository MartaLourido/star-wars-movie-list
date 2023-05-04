import styled from 'styled-components';

export const Divider = styled.div`
  border-right: 1px solid #ccc;
  height: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  background-color: #fff;
`;

export const RightContainer = styled.div`
  background-color: #fff;
  padding-left: 16px;
`;

export const MovieList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;