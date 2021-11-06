import React from 'react';
import { Button } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Importing MUI root index file.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button>This button makes the test very slow</Button>
                </a>
            </header>
        </div>
    );
}

export default App;
