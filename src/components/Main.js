import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Results from './Results'

class Main extends Component {
    render() {
        return (
            <StyledPage>
                <StyledSearch>
                    <SearchBar />
                </StyledSearch>
                <StyledResults>
                    <Results />
                </StyledResults>
            </StyledPage>
        );
    }
}

export default Main;

const StyledPage = styled.div`
    display: flex;
    align-items: space-between;
    max-width: ${props => props.theme.maxWidth};
    @media (${props => props.theme.mobileScreen}){
        flex-direction: column;
    }
`;

const StyledSearch = styled.div`
    position: fixed;
    background: linear-gradient(-45deg, ${props => props.theme.blue} 0%, ${props => props.theme.black} 200%);
    color: ${props => props.theme.white};
    border-bottom-width: 1px;
    border-color: ${props => props.theme.white};
    @media (${props => props.theme.mobileScreen}){
        height: 30vh;
        width: 100vw;
        -webkit-box-shadow: 0px 5px 5px 2px rgba(204,204,204,1);
        -moz-box-shadow: 0px 5px 5px 2px rgba(204,204,204,1);
        box-shadow: 0px 5px 5px 2px rgba(204,204,204,1);
    }
    @media (${props => props.theme.desktopScreen}){
        height: 100vh;
        width: 25vw;
        -webkit-box-shadow: 5px 0px 5px 0px rgba(204,204,204,1);
        -moz-box-shadow: 5px 0px 5px 0px rgba(204,204,204,1);
        box-shadow: 5px 0px 5px 0px rgba(204,204,204,1);
    }
`

const StyledResults = styled.div`
    background: ${props => props.theme.white};
    @media (${props => props.theme.mobileScreen}){
        padding-top: 30vh;
        min-height: 70vh;
        width: 100vw;
    }
    @media (${props => props.theme.desktopScreen}){
        min-height: 100vh;
        padding-left: 25vw;
        width: 75vw;
    }
`
