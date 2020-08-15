import React from 'react';
import { connect } from 'react-redux'
const FilterLink = ({dispatch, visibilityFilter}) => {
    const filterClick = (type) => {
        dispatch({type:'CHANG', idType: type})
    }
    return (
        <div className="filterBox">
            {visibilityFilter.map(res => <p key={res.type} className={res.active?'active':''} onClick={()=>{filterClick(res.type)}}>{res.name}</p>)}
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        visibilityFilter: state.visibilityFilter
    }
}
const FilterLinkDom = connect(mapStateToProps)(FilterLink)
export default FilterLinkDom;