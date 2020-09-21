import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.tsx';
import { Reset } from 'styled-reset';

const root = document.getElementById('root');

ReactDOM.render(
    <>
        <Reset />
        <App />
    </>, root);
