/// <reference path='../helpers.d.ts' />
/// <reference path='./App.d.ts' />

import React, { useState, useCallback } from 'react';
import { ThemeProvider } from "styled-components";

import { StyledApp, StyledButton, StyledCard } from './styledApp.ts';
import { themes } from '../helpers.ts';

import Comment from "./Comment.tsx";
import CommentForm from './CommentForm.tsx';

function App() {
    const [comments, setComments] = useState<comment[]>([{
        author: 'Maxim',
        text: 'Hi! U can enter u\'r comment below'
    }]);
    const addComment = useCallback((comment) => {
        setComments((state) => [comment, ...state]);
    }, [])

    const [theme, setTheme] = useState<theme>(themes.day);
    const changeTheme = useCallback(() => {
        setTheme((theme) => theme === themes.day ? themes.night : themes.day)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <StyledApp className='app'>
                <StyledButton className='theme-switch' onClick={changeTheme}>Изменить тему</StyledButton>
                { comments.map((comment) => <Comment {...comment}/>)}
                <CommentForm addComment={addComment}/>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App;
