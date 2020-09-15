import styled from 'styled-components';

const StyledApp = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background-color: #f0f0f0;
`;

const StyledUserInput = styled.input`
    height: 1em;
    width: 2em;

    font-size: 48px;

    background-color: #e8e8e8;
    border: 2px solid #6b6b6b;
    border-radius: 5px;
    outline: none;

    & + & {
        margin-left: 16px;
    }
`;

const StyledResult = styled.div`
    font-size: 48px;
`;

const StyledOperation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & + & {
        margin-top: 24px;
    }
`;

export {
    StyledApp,
    StyledUserInput,
    StyledResult,
    StyledOperation
}