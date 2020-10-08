import styled from "styled-components"

export const StyledComponent = styled.h2`
    font-family : 'Arial' ,sans-serif;
    margin: 30px 0 20px 30px;
    padding-bottom: 8px;
    border-bottom: 1px solid #ccc;
    &:before {
        content: '＊';
        margin-right: 8px;
    }
`

