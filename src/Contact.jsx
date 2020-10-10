import React from 'react'
import styled from 'styled-components'
// images
import top_view from "./images/undraw_team_spirit_hrr4.png"
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
            <div className="contact">
                <h2>お問い合わせはこちら</h2>
                <p>Email:<a>xxx@example.com</a></p>
            </div>
        </StyledComponent>
    )
}

const StyledComponent = styled.div`
    .contact {
        padding: 12px;
        text-align: center;
    }
`

export default Contact
