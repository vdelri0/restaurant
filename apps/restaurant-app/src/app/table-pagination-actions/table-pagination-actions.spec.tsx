import React from 'react';
import { render } from '@testing-library/react';

import TablePaginationActions from './table-pagination-actions';

describe('TablePaginationActions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TablePaginationActions />);
    expect(baseElement).toBeTruthy();
  });
});
