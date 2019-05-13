import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ResultItem = (props) => {
    const { id, title, manufacter, genuine, price, condition } = props.item
    return (
        <StyledLink to={{pathname: `/details`, search: `?id=${id}` }} key={id} >
            <CardImage src="http://placekitten.com/140/100" alt="Item image" />
            <CardDetails>
                <Title>{title}</Title>
                <Info>{`${manufacter}, ${condition}, ${genuine ? '' : 'non '}genuine`}</Info>
                <Price>{price}</Price>
            </CardDetails>
        </StyledLink>
    )
}

export default ResultItem


const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    @media(${props => props.theme.mobileScreen}){
        width: 100%;
        height: 110px;
    }
    @media(${props => props.theme.desktopScreen}){
        width: 45%;
        height: 110px;
    }

    background-color: ${props => props.theme.white};
    border-radius: 3px;
    margin: 1%;
    padding: 1%;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(212,212,212,1);
    -moz-box-shadow: 1px 1px 5px 0px rgba(212,212,212,1);
    box-shadow: 1px 1px 5px 0px rgba(212,212,212,1);
`

const CardImage = styled.img`
    width: 140px;
    height: 100px;
`

const CardDetails = styled.div`
    padding: 1%;
    width: 100%;
`

const Title = styled.p`
    font-size: 1.5rem;
    text-align: right;
    padding: 0;
    margin: 0;
`

const Info = styled.p`
    font-size: 1rem;
    text-align: right;
    padding: 0;
    margin: 0;
`

const Price = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: right;
    padding: 0;
    margin: 0;
`