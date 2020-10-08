import React from 'react'
import styled from 'styled-components'
// images
import top_view from "./images/undraw_team_spirit_hrr4.png"
import section_view1 from "./images/orange-one-human.png"
import section_view2 from "./images/red-one-human.png"
import section_view3 from "./images/three-humans.png"
// components
import Section from "./components/Section"
import TopView from "./components/TopView"

function Contact() {
    return (
        <StyledComponent>
            <TopView
                title="CONTACT"
                subtitle="なにかできることはありますか？"
                img={top_view}
            />

        </StyledComponent>
    )
}

const StyledComponent = styled.div`
    .top-view {
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
    }
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
        img {
            max-width: 400px;
            max-height: 400px;
            margin: 12px;
        }
        .text-box {
            padding: 12px;
            margin:12px;
            h3 {
                margin: 8px 0;
            }
            p {

            }
        }
    }
`

export default Contact
