import React from 'react';
const todoList = ({todoData, onChangeTodoState}) => {
    return (
        <div className="listBox">
            {todoData.map(res => <div key={res.id} className={res.completed?'listOver':'list'} onClick={()=> {onChangeTodoState(res.id)}}>{res.text}{res.completed?'完成':'进行中'}</div>)}
        </div>
    )
}
export default todoList;