import React, { useState, useCallback } from 'react';
import { ThemeProvider } from "styled-components";

import { StyledApp, StyledButton } from './styledApp.ts';
import Operation from './Operation.tsx'
import { themes, multiply, sum } from '../helpers.ts';

function App() {
    const [theme, setTheme] = useState(themes.day);
    const changeTheme = useCallback(() => {
        setTheme((theme) => theme === themes.day ? themes.night : themes.day)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <StyledApp className='app'>
                WOW
                <StyledButton className='theme-switch' onClick={changeTheme}>Изменить тему</StyledButton>
                <Operation operation={multiply} title={'Multiply'}/>
                <Operation operation={sum} title={'Summarize'}/>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App;
