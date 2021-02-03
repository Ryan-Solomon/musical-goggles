import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoPage } from './TodoPage';

describe('Todo page', () => {
  test('renders todo page', () => {
    render(<TodoPage />);
    expect(screen.getByText(/add some todos/i)).toBeInTheDocument();
  });
});
