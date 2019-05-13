import React from 'react'
import { render } from 'react-testing-library'
import ResultItem from './ResultItem';

it('renders an item correctly', () => {
    const title = "Mazda RX-8 Front Bumber"
    const price = '$70'
    const item = {
        title,
        price,
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    }
    const utils = render (<ResultItem item={item} />)

    const titleElement = utils.getByText(title)
    const priceElement = utils.getByText(price)

    expect(titleElement).toBeDefined()
    expect(priceElement).toBeDefined()
})