import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './AppWithMuiAutomocking';

test('renders an MUI button', () => {
    render(<App />);
    const button = screen.getByText(/We have automocked the button/i);
    expect(button).toBeInTheDocument();
});
