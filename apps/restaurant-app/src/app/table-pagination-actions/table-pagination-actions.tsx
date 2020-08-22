import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TablePaginationActionsProps {}

const StyledTablePaginationActions = styled.div`
  color: pink;
`;

export const TablePaginationActions = (props: TablePaginationActionsProps) => {
  return (
    <StyledTablePaginationActions>
      <h1>Welcome to table-pagination-actions!</h1>
    </StyledTablePaginationActions>
  );
};

export default TablePaginationActions;
