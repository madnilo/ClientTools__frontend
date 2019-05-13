import React from 'react'
import { render } from 'react-testing-library'
import { BrowserRouter } from 'react-router-dom'
import PartDetails from './PartDetails';

const title = "Part Details"
const description = `Dolor in cillum amet pariatur incididunt. Ut aute ea cillum sunt cillum nostrud incididunt tempor do qui. Elit culpa ad aliqua cupidatat nulla.
Laborum id fugiat veniam nulla dolore. Culpa quis eiusmod minim eiusmod ex voluptate amet irure irure velit. Consectetur proident non in in cillum pariatur aute. Aute cillum irure aliqua laborum pariatur nulla est esse ex esse irure magna pariatur. Sit eiusmod elit proident laborum nostrud in. Ullamco officia minim esse exercitation proident labore qui. In aute aliqua eu consequat laboris ut commodo non.`

const details = {
    id: '12323213-adad1',
    title,
    description,
    price: '$70',
    partNo: '2343-WEO3',
    manufacter: 'Mazda',
    condition: 'New',
    genuine: 'false',
    equivalents: [
        {
            id: '12323213-adad1',
            title: "Mazda RX-8 Front Bumber",
            price: '$70',
            partNo: '2343-WEO3',
            manufacter: 'Mazda',
            condition: 'New',
            genuine: 'false'
        },
        {
            id: '12323213-adad1',
            title: "Mazda RX-8 Front Bumber",
            price: '$70',
            partNo: '2343-WEO3',
            manufacter: 'Mazda',
            condition: 'New',
            genuine: 'false'
        },
        {
            id: '12323213-adad1',
            title: "Mazda RX-8 Front Bumber",
            price: '$70',
            partNo: '2343-WEO3',
            manufacter: 'Mazda',
            condition: 'New',
            genuine: 'false'
        },    
    ]
}

describe('suite for Part Details UI', () => {

    it('renders the part details loading state', () => {
        const utils = render(<BrowserRouter><PartDetails part={null}/></BrowserRouter>)

        const element = utils.getByTestId('loading')

        expect(element).toBeDefined()
    })

    it('renders the part details', () => {
        const utils = render(<BrowserRouter><PartDetails part={details}/></BrowserRouter>)

        const element1 = utils.getByText(title)
        const element2 = utils.findAllByText(description.slice(10))

        expect(element1).toBeDefined()
        expect(element2).toBeDefined()
    })

})