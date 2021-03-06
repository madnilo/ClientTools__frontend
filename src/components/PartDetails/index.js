import React, { Component } from 'react'
import PartDetails from './PartDetails';
import { connect } from 'react-redux'
import operations from '../../state/general/operations'

class PartDetailsContainer extends Component {
    componentDidMount(){
        this.props.getPartDetails("1111-aaaa")
    }

    goBack = () => {
        this.props.history.goBack()
    }

    render() {
        const { data } = this.props

        return (
            <PartDetails part={data} goBack={this.goBack}/>
        )
    }
}

function mapStateToProps(state) {
    const { loading, success, data } = state.partDetails
    return {
        loading,
        success,
        data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPartDetails: (id) => dispatch(operations.getPartDetails(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartDetailsContainer)