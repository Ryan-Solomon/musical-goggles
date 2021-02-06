import React from 'react';
import { queryByText, render, screen, waitFor } from '@testing-library/react';
import { AccordionPage } from './AccordionPage';
import userEvent from '@testing-library/user-event';

describe('Accordion page', () => {
  test('renders accordion page', () => {
    render(<AccordionPage />);
  });
});
