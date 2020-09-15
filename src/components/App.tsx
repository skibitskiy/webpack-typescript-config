import React from 'react';
import { StyledApp } from './styledApp.ts';
import Operation from './Operation.tsx'
import { multiply, sum } from '../helpers.ts';

function App() {
    return (
        <StyledApp>
            <Operation operation={multiply} title={'Multiply'}/>
            <Operation operation={sum} title={'Summarize'}/>
        </StyledApp>
    )
}

export default App;
