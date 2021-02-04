import React from 'react';
import { queryByText, render, screen, waitFor } from '@testing-library/react';
import { DrinksPage } from './DrinksPage';
import userEvent from '@testing-library/user-event';

describe('Drinks page', () => {
  test('renders Drinks page', () => {
    render(<DrinksPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
  test('loads drinks', async () => {
    render(<DrinksPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    expect(screen.getByText(/drinks/i)).toBeInTheDocument();
  });
});
