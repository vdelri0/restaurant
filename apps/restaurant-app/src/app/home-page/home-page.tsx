import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HomePageProps {}

const StyledHomePage = styled.div`
  color: pink;
`;

export const HomePage = (props: HomePageProps) => {
  return (
    <StyledHomePage>
      <h1>Welcome to home-page!</h1>
    </StyledHomePage>
  );
};

export default HomePage;
