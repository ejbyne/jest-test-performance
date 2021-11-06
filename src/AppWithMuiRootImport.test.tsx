import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './AppWithMuiRootImport';

test('renders an MUI button', () => {
    render(<App />);
    const button = screen.getByText(/This button makes the test very slow/i);
    expect(button).toBeInTheDocument();
});
