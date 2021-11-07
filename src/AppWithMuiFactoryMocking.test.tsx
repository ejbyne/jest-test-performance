import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './AppWithMuiFactoryMocking';

test('renders an MUI button', () => {
    render(<App />);
    const button = screen.getByText(/We have factory mocked the button/i);
    expect(button).toBeInTheDocument();
});
