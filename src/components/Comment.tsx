/// <reference path='App.d.ts' />
import React from 'react'
import { StyledCard, StyledCommentHeader } from './styledApp.ts';

const Comment: React.FC<comment> = ({ author, text }) => {
    return (
        <StyledCard>
            <StyledCommentHeader>
                { author }
            </StyledCommentHeader>
            { text }
        </StyledCard>
    )
}

export default Comment;
