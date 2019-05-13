import React from 'react'
import Results from './Results'
import { connect } from 'react-redux'
import operations from '../../state/general/operations'

class ResultsContainer extends React.PureComponent {

    render() {
        const { data } = this.props
        return (<Results results={data}/>)
    }
}


function mapStateToProps(state) {
    const { loading, success, data } = state.parts
    return {
        loading,
        success,
        data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getParts: () => dispatch(operations.getParts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer)
