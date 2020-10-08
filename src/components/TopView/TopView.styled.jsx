import styled from "styled-components"
const mq = "@media (max-width:700px)"

export const StyledComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${mq} {
        flex-direction: column-reverse;
    }
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
        ${mq} {
            width: 100%;
            /* height: 200px; */
            object-fit: cover;
        }
    }
`

