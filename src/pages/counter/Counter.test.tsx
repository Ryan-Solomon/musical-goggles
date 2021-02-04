import React from 'react';
import { queryByText, render, screen, waitFor } from '@testing-library/react';
import { CounterPage } from './CounterPage';
import userEvent from '@testing-library/user-event';

describe('Counter page', () => {
  test('renders counter page', () => {
    render(<CounterPage />);
    expect(screen.getByText(/count/i)).toBeInTheDocument();
  });
  test('the counter works', () => {
    render(<CounterPage />);
    const [addButton, deleteButton, clearButton] = screen.getAllByRole(
      'button'
    );
    userEvent.click(addButton);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    userEvent.click(addButton);
    userEvent.click(deleteButton);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    userEvent.click(addButton);
    userEvent.click(clearButton);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });
});
