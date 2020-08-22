import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SearchInputProps {}

const StyledSearchInput = styled.div`
  color: pink;
`;

export const SearchInput = (props: SearchInputProps) => {
  return (
    <StyledSearchInput>
      <h1>Welcome to search-input!</h1>
    </StyledSearchInput>
  );
};

export default SearchInput;
