import actions from './actions'
import { Http } from '../_services/Http'

const results = [
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    
]

const getParts = (term, searchType) => (dispatch, getState) => {
    dispatch(actions.getPartsStart())
    //TODO request results from server
    //TODO put results in variable results
    //TODO remove mocked data
    dispatch(actions.getPartsFinish(results))

}

export default {
    getParts,
}
