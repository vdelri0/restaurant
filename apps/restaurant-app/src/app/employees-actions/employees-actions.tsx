import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface EmployeesActionsProps {}

const StyledEmployeesActions = styled.div`
  color: pink;
`;

export const EmployeesActions = (props: EmployeesActionsProps) => {
  return (
    <StyledEmployeesActions>
      <h1>Welcome to employees-actions!</h1>
    </StyledEmployeesActions>
  );
};

export default EmployeesActions;
