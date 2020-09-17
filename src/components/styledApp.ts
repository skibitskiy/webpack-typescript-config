import styled from 'styled-components';

const StyledApp = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.mainBgColor};
`;

const StyledUserInput = styled.input`
    height: 1em;
    width: 2em;

    font-size: 48px;
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.elementBgColor};
    border: 2px solid rgba(0, 0, 0, 0.5);
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

const StyledButton = styled.button`
    padding: 8px;
    
    outline: 0;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.elementBgColor}
`;

export {
    StyledApp,
    StyledUserInput,
    StyledResult,
    StyledOperation,
    StyledButton
}