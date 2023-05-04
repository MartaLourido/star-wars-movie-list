import { EmptyStateContainer, EmptyStateText } from '../styles/EmptyStateStyles';

import React from 'react';

const EmptyState = ({ text }) => {
  return (
    <EmptyStateContainer>
      <EmptyStateText>{text}</EmptyStateText>
    </EmptyStateContainer>
  );
};

export default EmptyState;
