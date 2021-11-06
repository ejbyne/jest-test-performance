import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './AppWithMuiButtonImportOnly';

test('renders an MUI button', () => {
    render(<App />);
    const button = screen.getByText(/This button is imported much more quickly/i);
    expect(button).toBeInTheDocument();
});
