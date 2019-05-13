import React from 'react'
import { render } from 'react-testing-library'
import Main from './Main'
import { Provider } from 'react-redux'
import { Store } from '../state/Store'

describe('test suite for Main component', () => {
    it('renders SearchBar', () => {
        const utils = render(<Provider store={Store}><Main /></Provider>)

        const element = utils.getAllByText('ClientTools')

        expect(element).toBeDefined()
    })

    it('renders Results', () => {
        const utils = render(<Provider store={Store}><Main /></Provider>)

        const element = utils.getAllByTestId('results')

        expect(element).toBeDefined()
    })
})