import React from 'react';
import Button from '@mui/material/Button';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Importing MUI button only.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button>This button is imported much more quickly</Button>
                </a>
            </header>
        </div>
    );
}

export default App;
