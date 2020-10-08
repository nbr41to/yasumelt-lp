import styled from "styled-components"
const mq = "@media (max-width:700px)"

export const StyledComponent = styled.section`
    display: flex;
    flex-direction: ${props => props.imgRight ? "row-reverse" : "row"};
    justify-content: center;
    align-items: center;
    padding: 30px;
    ${props => props.imgCircle ?
        `
            img {
                width: 250px;
                height: 250px;
                border-radius: 100%;
                ${mq} {
                    width: 200px;
                    height: 200px;
                }
            }
        `
        :
        `
            img {
                max-width: 400px;
                max-height: 400px;
                margin: 12px;
                ${mq} {
                    max-width: 250px;
                    max-height: 250px;
                }
            }
        `
    }
    ${mq} {
        flex-direction: column;
        padding: 12px;
    }
    .text-box {
        padding: 12px;
        margin:12px;
        ${mq} {
            padding: 4px;
            margin: 4px;
            h2, h3 {
                text-align: center;
            }
        }
        h2 {
            font-family : 'Arial' ,sans-serif;
            margin: 12px 0;
        }
        h3 {
            margin: 8px 0;
        }
        ul {
            padding-left: 20px;
            li {
                margin: 4px 0;
            }
        }
    }
`

