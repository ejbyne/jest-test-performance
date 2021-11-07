import React from 'react';
import { Button } from '@mui/material';
import logo from './logo.svg';
import './App.css';

jest.mock('@mui/material/Button')

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Automocking MUI library.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    We have automocked the button: {Button.toString()}
                </a>
            </header>
        </div>
    );
}

export default App;
