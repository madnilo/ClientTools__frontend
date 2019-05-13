import { render } from 'react-testing-library'
import Results from './Results'
import React from 'react'

describe('suite for testing Results', () => {
    it('renders text for initial state', () => {
        const utils = render(<Results />)

        const infoNode = utils.getByTestId('no-results')

        expect(infoNode).toBeDefined()
    })
})