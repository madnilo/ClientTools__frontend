import React, { useState } from 'react'
import styled from 'styled-components'
import maskPartNo from '../../utils/maskPartNo'

const SearchBar = (props) => {

    const [searchType, setSearchType] = useState('partNo')
    const [partNo, setPartNo] = useState('')
    const [title, setTitle] = useState('')

    const handleSwitch = (e, type) => {
        e.preventDefault()
        setSearchType(type)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        const term = searchType === 'title' ? title : partNo
        props.searchParts(term, searchType)
    }

    return (
        <Container>
            <Title>ClientTools</Title>
            <form onSubmit={e => handleSearch(e)}>
                <fieldset>
                    <Search>
                        {
                            searchType === 'partNo'
                            &&
                            <label>
                                Part No:
                                    <input placeholder="1234-abcd" value={partNo}
                                    onChange={e => setPartNo(maskPartNo(e.target.value, partNo))} />
                            </label>
                        }
                        {
                            searchType === 'title'
                            &&
                            <label>
                                Title:
                                    <input placeholder="Mazda front bumper..." value={title}
                                    onChange={e => setTitle(e.target.value)} />
                            </label>
                        }

                    </Search>
                </fieldset>
            </form>
            <Selector>
                <label>Search By:</label>
                <Button onClick={e => handleSwitch(e, 'partNo')}>Part No</Button>
                <Button onClick={e=> handleSwitch(e, 'title')}>Title</Button>
            </Selector>
        </Container>
    )
}

export default SearchBar

SearchBar.propTypes = {
    // searchParts: PropTypes.function.isRequired
}

const Title = styled.div`
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 3rem;
    letter-spacing: -0.8px;
    word-spacing: -0.8px;
    color: ${props => props.theme.white};
    font-weight: 700;
    text-decoration: none;
    text-shadow: 1px 1px 1px #BCBCBC;
    font-style: normal;
    font-variant: normal;
    text-transform: uppercase;
`;

const Search = styled.div`
    margin: 10px 0;
    label {
        font-size: 1.5rem; 
    }
    input {
        width: 95%;
        padding: 3px;
        font-size: 2.5rem; 
        border-width:1px; 
        border-style:inset; 
        border-color:#004d6b; 
        border-radius:2px; 
        box-shadow:inset 0px 0px 30px 0px rgba(42,42,42,.75); 
        background-color:#008bc7; 
        color:#ffffff;
        :focus { outline:none; } 
        ::placeholder { color: ${props => props.theme.grey}; }
    }
`

const Container = styled.section`
    display: flex;
    min-width: 100%;
    flex-direction: column;
    align-items: center;
`;

const Selector = styled.div`
    margin-top: 3%;
    display: flex;
    padding: 5px 0;
`

const Button = styled.button`
    color: ${props => props.theme.white};
    padding: 0 5px;
    margin-left: 5px;
    font-size: 1.5rem;
    border: 0;
    background-color: transparent;
    border-width:1px; 
    border-style:inset; 
    border-color:#004d6b; 
    border-radius:2px; 
    box-shadow:inset 0px 0px 30px 0px rgba(42,42,42,.75); 
    background-color: ${props => props.theme.black}; 
    :hover {
        color: ${props => props.theme.grey};
    }

`