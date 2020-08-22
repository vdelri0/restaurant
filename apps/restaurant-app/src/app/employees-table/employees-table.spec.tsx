import React from 'react';
import { render } from '@testing-library/react';

import EmployeesTable from './employees-table';

describe('EmployeesTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmployeesTable />);
    expect(baseElement).toBeTruthy();
  });
});
