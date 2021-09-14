import React from 'react';
import styled from 'styled-components'

export const Header = () => {


    return(
        <HeaderContainer>
            <h1>BluePrint</h1>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.div`

    height: 80px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0px 0px 20px 20px;
`