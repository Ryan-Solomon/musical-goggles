import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoPage } from './TodoPage';
import userEvent from '@testing-library/user-event';

describe('Todo page', () => {
  test('renders todo page', () => {
    render(<TodoPage />);
    expect(screen.getByText(/add some todos/i)).toBeInTheDocument();
  });
  test('Add todo', () => {
    render(<TodoPage />);
    userEvent.type(screen.getByRole('textbox'), 'todotests');
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('todotests')).toBeInTheDocument();
    userEvent.click(screen.getAllByRole('button')[1]);
    expect(screen.getByText(/add some todos/i)).toBeInTheDocument();

    screen.debug();
  });
});
