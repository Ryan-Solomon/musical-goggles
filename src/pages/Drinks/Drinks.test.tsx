import React from 'react';
import { render, screen } from '@testing-library/react';
import { DrinksPage } from './DrinksPage';
import userEvent from '@testing-library/user-event';

describe('Drinks page', () => {
  test('renders Drinks page', () => {
    render(<DrinksPage />);
    expect(screen.getByText(/loading/)).toBeInTheDocument();
    screen.debug();
  });
});
