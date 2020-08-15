import React from 'react';
import store from '../store'
const FilterLink = () => {
    const filterClick = (type) => {
        console.log("filterClick -> type", type)
        store.dispatch({type:'CHANG', idType: type})
    }   
    return (
        <div className="filterBox">
            {store.getState().visibilityFilter.map(res => <p key={res.type} className={res.active?'active':''} onClick={()=>{filterClick(res.type)}}>{res.name}</p>)}
        </div>
    )
}

export default FilterLink;