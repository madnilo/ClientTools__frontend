import actions from './actions'
import { Http } from '../_services/Http'

const mockResults = [
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
        id: '12323213-adad2',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad3',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad4',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad5',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad6',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad7',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad8',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad9',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad10',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad11',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad12',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad13',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad14',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad15',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad16',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad17',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad18',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad19',
        title: "Mazda RX-8 Front Bumber",
        price: '$70',
        partNo: '2343-WEO3',
        manufacter: 'Mazda',
        condition: 'New',
        genuine: 'false'
    },
    {
        id: '12323213-adad20',
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

    if(searchType === 'title') {
        dispatch(actions.getPartsFinish(mockResults))
        return;
    }
    Http.get(`/parts/${term}/compatible`).then(result => dispatch(actions.getPartsFinish(result.data)))

    

}

const getPartDetails = (id) => (dispatch, getState) => {
    dispatch(actions.getPartDetailsStart())

    Http.get(`/parts/${id}/details`)
    .then(result => dispatch(actions.getPartDetailsFinish(result.data)))
}

export default {
    getParts,
    getPartDetails,
}
