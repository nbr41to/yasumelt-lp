import styled from "styled-components"

export const StyledComponent = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #0D184B;
        color: white;
        padding: 4px 8px;
        .site-logo {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                margin: 10px;
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
            button {
                background-color: yellowgreen;
                color: white;
                padding: 8px 12px;
                margin: 0 12px;
                font-size: 16px;
                font-weight: bold;
                border: 1px solid #444;
                border-radius: 8px;
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

