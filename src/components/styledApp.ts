import styled from 'styled-components';

const StyledApp = styled.div`
    box-sizing: border-box;
    height: 100vh;
    padding: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background-color: ${(props) => props.theme.mainBgColor};
    color: ${(props) => props.theme.fontColor};
`;

const StyledCard = styled.div`
    box-sizing: border-box;
    width: 100%;

    background-color: ${(props) => props.theme.elementBgColor};
    padding: 12px;

    color: ${(props) => props.theme.fontColor};
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;

    & + & {
        margin-top: 8px;
    }
`;

const StyledCommentHeader = styled.div`
    font-size: 0.9em;
    color: ${(props) => props.theme.headerColor};
    margin-bottom: 6px;
`;

const StyledTextarea = styled.textarea`
    box-sizing: border-box;
    resize: vertical;
    width: 100%;
    outline: none;
`;

const StyledButton = styled.button`
    padding: 8px;
    
    outline: 0;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.elementBgColor};
`;

export {
    StyledApp,
    StyledCard,
    StyledCommentHeader,
    StyledButton,
    StyledTextarea
}