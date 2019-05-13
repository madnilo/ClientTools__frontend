import {
    render, fireEvent
} from 'react-testing-library'
import SearchBar from './SearchBar';
import React from 'react'


describe('searchbar suite', () => {
    
    it('changes searchbar input', () => {
        //arrange
        const newValue = '1111-aaaa'
        const utils = render(<SearchBar />)
        const input = utils.getByPlaceholderText('1234-abcd')
    
        //act
        fireEvent.change(input, {target: {value: newValue}})
    
        //assert
        expect(input.value).toBe(newValue)
    })


})