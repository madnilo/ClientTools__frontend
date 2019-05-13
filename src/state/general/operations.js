import actions from './actions'
import { Http } from '../_services/Http'

const details = {
    id: '12323213-adad1',
    title: "Mazda RX-8 Front Bumber",
    price: '$70',
    partNo: '2343-WEO3',
    manufacter: 'Mazda',
    condition: 'New',
    genuine: 'false',
    description: 
        `Dolor in cillum amet pariatur incididunt. Ut aute ea cillum sunt cillum nostrud incididunt tempor do qui. Elit culpa ad aliqua cupidatat nulla.
        Laborum id fugiat veniam nulla dolore. Culpa quis eiusmod minim eiusmod ex voluptate amet irure irure velit. Consectetur proident non in in cillum pariatur aute. Aute cillum irure aliqua laborum pariatur nulla est esse ex esse irure magna pariatur. Sit eiusmod elit proident laborum nostrud in. Ullamco officia minim esse exercitation proident labore qui. In aute aliqua eu consequat laboris ut commodo non.`,
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
const results = [
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
    //TODO request results from server
    //TODO put results in variable results
    //TODO remove mocked data
    dispatch(actions.getPartsFinish(results))

}

const getPartDetails = (id) => (dispatch, getState) => {
    dispatch(actions.getPartDetailsStart())
    //TODO request part details from server
    //TODO put results in variable details
    //TODO remove mocked data
    dispatch(actions.getPartDetailsFinish(details))

}

export default {
    getParts,
    getPartDetails,
}
