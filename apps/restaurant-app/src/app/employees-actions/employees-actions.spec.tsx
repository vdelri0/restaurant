import React from 'react';
import { render } from '@testing-library/react';

import EmployeesActions from './employees-actions';

describe('EmployeesActions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmployeesActions />);
    expect(baseElement).toBeTruthy();
  });
});
