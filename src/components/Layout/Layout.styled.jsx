import styled from "styled-components"
const mq = "@media (max-width:700px)"

export const StyledComponent = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #0D184B;
        color: white;
        padding: 4px 8px;
        ${mq} {
            justify-content: center;
            /* padding-left: 60px; */
        }
        .site-logo {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                margin: 10px;
            }
            a {
                text-decoration: none;
                color: white;
            }
        }
        ul {
            display: flex;
            align-items: center;
            list-style: none;
            a {
                text-decoration: none;
                color: white;
                font-weight: bold;
                padding: 10px;
            }
            .signup-button {
                background-color: yellowgreen;
                color: white;
                padding: 8px 12px;
                margin: 0 12px;
                font-family: 'Arial' ,sans-serif;
                font-size: 16px;
                font-weight: bold;
                border: 1px solid #444;
                border-radius: 8px;
            }
            ${mq} {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                position: fixed;
                top: 0;
                right: 0;
                z-index: 10;
                background-color: limegreen;
                opacity: 0.9;
                padding: 0 16px;
                height: 100vh;
                transform: ${props => props.open ? "translateX(0%)" : "translateX(100%)"};
                transition: transform .3s;
                li {
                        font-size: 22px;
                        padding: 12px 0;
                    }
                .signup-button {
                    background-color: orange;
                    margin: 12px;
                }
            }
        }
    }
    footer {
        background-color: #0D184B;
        color: white;
        text-align: center;
        padding: 6px;
    }
`

