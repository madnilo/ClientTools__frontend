import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import EquivalentItem from './EquivalentItem';

function PartDetails(props) {
    if (!props.part) return <Container data-testid='loading'>Loading...</Container>

    const { title, description, partNo, manufacter, condition, genuine, price, equivalents } = props.part
    return (
        <Container>
            <Details>
                <Title>{title}</Title>
                <img src="http://placekitten.com/300/300" />
                <p>{description}</p>
                <p>Part No.: {partNo} / Genuine: {genuine ? 'yes' : 'no'}</p>
                <p>Manufacter: {manufacter} / Condition: {condition}</p>
            </Details>
            <Cards>
                <Subtitle>Equivalent Parts</Subtitle>
                {equivalents.map((item, index) => <EquivalentItem item={item} key={index} />)}
            </Cards>
        </Container>
    )
}

PartDetails.propTypes = {
    part: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.string,
        manufacter: PropTypes.string
    })
}

export default PartDetails

const Container = styled.div`
    padding: 3%;
    display: flex;
    @media (${props => props.theme.mobileScreen}){
        flex-direction: column;
        align-items: center;
    }
    @media (${props => props.theme.desktopScreen}){
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
    }
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    @media (${props => props.theme.desktopScreen}){
        width: 70%;
        padding: 0 5%
    }
`

const Title = styled.p`
    font-size: 3rem;
`

const Subtitle = styled.p`
    font-size: 2rem;
`

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (${props => props.theme.desktopScreen}){
        width: 30%;
    }
`
