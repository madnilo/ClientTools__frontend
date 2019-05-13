import React from 'react'
import PropTypes from 'prop-types'
import ResultItem from '../Results/ResultItem';

function PartDetails(props) {
    if(!props.part) return <div data-testid='loading'/> //TODO retornar loading

    const {title, description, partNo, manufacter, condition, genuine, price, equivalents} = props.part
    return (
        <div>
            <button onClick={props.goBack}>Back</button>
            <table>
                <thead>
                    <tr>
                        <td><p>{ title }</p></td>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td><img src="http://placekitten.com/300/300"/></td>
                    </tr>
                    <tr>
                        <td><p>{ description }</p></td>
                    </tr>
                    <tr>
                        <td><p>{ partNo }</p></td>
                    </tr>
                    <tr>
                        <td><p>{ manufacter }</p></td>
                    </tr>
                    <tr>
                        <td><p>{ condition }</p></td>
                    </tr>
                    <tr>
                        <td><p>{ genuine }</p></td>
                    </tr>
                    <tr>
                        <td><p>{ condition }</p></td>
                    </tr>
                    <tr>
                        <td>{equivalents.map((item, index) => <ResultItem item={item} key={index}/>)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

PartDetails.propTypes = {
    part: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.string,
        manufacter: PropTypes.string
    })
}

export default PartDetails

