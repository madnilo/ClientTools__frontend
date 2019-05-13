import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SearchBar from './SearchBar';
import GlobalStyles from './__styles__/GlobalStyles'
import theme from './__styles__/DefaultTheme'
import Content from './Content'

class Main extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <GlobalStyles />
                    <StyledSearch><SearchBar /></StyledSearch>
                    <StyledContent><Content /></StyledContent>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Main;

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
    display: flex;
    align-items: space-between;
    max-width: ${theme.maxWidth};
    @media (${theme.mobileScreen}){
        flex-direction: column;
    }
`;

const StyledSearch = styled.div`
    position: fixed;
    background: linear-gradient(-45deg, ${theme.blue} 0%, ${theme.black} 200%);
    color: ${theme.white};
    border-bottom-width: 1px;
    border-color: ${theme.white};
    @media (${theme.mobileScreen}){
        height: 30vh;
        width: 100vw;
        -webkit-box-shadow: 0px 5px 5px 2px rgba(204,204,204,1);
        -moz-box-shadow: 0px 5px 5px 2px rgba(204,204,204,1);
        box-shadow: 0px 5px 5px 2px rgba(204,204,204,1);
    }
    @media (${theme.desktopScreen}){
        height: 100vh;
        width: 25vw;
        -webkit-box-shadow: 5px 0px 5px 0px rgba(204,204,204,1);
        -moz-box-shadow: 5px 0px 5px 0px rgba(204,204,204,1);
        box-shadow: 5px 0px 5px 0px rgba(204,204,204,1);
    }
`

const StyledContent = styled.div`
    background: ${theme.white};
    @media (${theme.mobileScreen}){
        padding-top: 30vh;
        min-height: 70vh;
        width: 100vw;
    }
    @media (${theme.desktopScreen}){
        min-height: 100vh;
        padding-left: 25vw;
        width: 75vw;
    }
`
