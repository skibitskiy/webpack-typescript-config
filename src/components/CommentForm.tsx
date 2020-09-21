import React, { useState, useCallback } from 'react';
import { StyledCard, StyledCommentHeader, StyledTextarea, StyledButton } from './styledApp.ts';

const CommentForm: React.FC<{ addComment: Function }> = ({ addComment }) => {
    const [text, setText] = useState('');
    const updateComment = useCallback((event) => {
        setText(event.target.value);
    }, [])
    const submitComment = useCallback(() => {
        addComment({ text, author: 'default' });
        setText('');
    }, [text]);

    return (
        <StyledCard>
            <StyledCommentHeader>Comment</StyledCommentHeader>
            <StyledTextarea onChange={updateComment} placeholder='comment...' value={text}/>
            <StyledButton onClick={submitComment}>Отравить</StyledButton>
        </StyledCard>
    )
}

export default CommentForm;
