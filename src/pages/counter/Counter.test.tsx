import React from 'react';
import { queryByText, render, screen, waitFor } from '@testing-library/react';
import { CounterPage } from './CounterPage';

describe('Counter page', () => {
  test('renders counter page', () => {
    render(<CounterPage />);
    expect(screen.getByText(/count/i)).toBeInTheDocument();
  });
});
