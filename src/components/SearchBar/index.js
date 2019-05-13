import React from 'react'
import SearchBar from './SearchBar'
import { connect } from 'react-redux'
import operations from '../../state/general/operations'

class SearchContainer extends React.PureComponent{
    searchParts = (term, type) => {
        this.props.getParts(term, type)
    }
    render (){
        return <SearchBar searchParts={this.searchParts}/>
    }
}

function mapStateToProps(state) {
    const { loading, success } = state.parts
    return {
        loading,
        success
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getParts: (term, searchType) => dispatch(operations.getParts(term, searchType))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)