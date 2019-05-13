import React from 'react'
import styled from 'styled-components'
import ResultItem from './ResultItem'
import PropTypes from 'prop-types'

const Results = (props) => {
    return (
        <div data-testid="results">
            {
                props.results
                    ? (<DefaultContainer>
                        <Title>Results</Title>
                        {props.results.map((item, index) => <ResultItem item={item} key={index} />)}
                    </DefaultContainer>)
                    : (<EmptyContainer>
                        <p data-testid="no-results">Use the search to look for parts.</p>
                    </EmptyContainer>)
            }

        </div>
    )
}

Results.propTypes = {
    results: PropTypes.array
}

export default Results


const EmptyContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 10px;
`

const DefaultContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
    justify-content: space-around;
    padding: 10px;
`

const Title = styled.p`
    font-weight: 700;
    padding: 0 3%;
    margin: 2% 0 0 0;
    width: 100%;
`