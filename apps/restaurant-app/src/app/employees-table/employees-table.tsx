import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface EmployeesTableProps {}

const StyledEmployeesTable = styled.div`
  color: pink;
`;

export const EmployeesTable = (props: EmployeesTableProps) => {
  return (
    <StyledEmployeesTable>
      <h1>Welcome to employees-table!</h1>
    </StyledEmployeesTable>
  );
};

export default EmployeesTable;
