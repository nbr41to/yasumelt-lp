import styled from "styled-components"
const mq = "@media (max-width:700px)"

export const StyledComponent = styled.section`
    display: flex;
    flex-direction: ${props => props.imgRight ? "row-reverse" : "row"};
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
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
            margin: 8px;
            h2, h3 {
                text-align: center;
            }
        }
        h2 {
            font-family : 'Arial' ,sans-serif;
            font-weight: bold;
            border-bottom: double 6px #0D184B;
            margin: 12px 0;
        }
        h3 {
            display: inline-block;
            font-family : 'Arial' ,sans-serif;
            margin: 12px 0;
            position: relative;
            padding: 10px 20px;
            border: 2px solid #000;
            &:before {
                background: #C9E6FF;
                position: absolute;
                top: 4px;
                left: 7px;
                z-index: -10;
                transform: rotate(-1deg);
                width: 100%;
                height: 100%;
                content: '';
            }
        }
        ul {
            padding-left: 20px;
            li {
                margin: 4px 0;
            }
        }
    }
`

