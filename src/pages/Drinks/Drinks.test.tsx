import React from 'react';
import { queryByText, render, screen, waitFor } from '@testing-library/react';
import { DrinksPage } from './DrinksPage';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

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

    expect(screen.getAllByText(/margarita/i)[0]).toBeInTheDocument();
  });
  test('load instructions', () => {
    render(<DrinksPage />, { wrapper: MemoryRouter });
    const onClickFn = jest.fn();
    const instructions = screen.getAllByText('Show Instructions')[0];
    instructions.onclick = onClickFn;
    userEvent.click(instructions);
    expect(onClickFn).toHaveBeenCalledTimes(1);
  });
});
