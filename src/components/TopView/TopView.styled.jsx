import styled from "styled-components"

export const StyledComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .top-view-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family : 'Arial' ,sans-serif;
        h2 {
            margin: 10px;
            &:before, &:after {
                content: '-';
                margin: 0 8px;
            }
        }
    }
    img {
        width: 50%;
    }
`

