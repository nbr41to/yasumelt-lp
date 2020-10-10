import React from 'react'
import styled from 'styled-components'

function Registration() {
    return (
        <StyledComponent>
            <h1>新規登録画面</h1>
            <input type="text" />
            <br />
            <input type="text" />
            <br />
            <input type="text" />
            <br />
            <input type="text" />
            <br />
            <input type="text" />
            <br />
            <input type="text" />
            <br />
        </StyledComponent>
    )
}

const StyledComponent = styled.div` 
    padding: 12px;
    text-align: center;
`

export default Registration
