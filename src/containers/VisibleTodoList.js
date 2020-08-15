import React from 'react'
import store from '../store'
import todoList from '../components/TodoList'
// 无数据DOM
const noData = () => {
    return (
        <div className="no-data">暂无数据</div>
    )
}
// 过滤数据
const dataFilter = (type, data) => {
    const dataObj = {
        ALL: data,
        END: data.filter(res => res.completed),
        ACTIVE: data.filter(res => !res.completed),
    }
    return dataObj[type];
}
// 正常的显示结构
const VisibleTodoList = () => {
    const onChangeTodoState = (id)=> {
        store.dispatch({
            type: 'CHANGE_TODO',
            id,
        });
    }
    const todoData = dataFilter(store.getState().visibilityFilter.filter(res => res.active)[0].type, store.getState().todos)
    const dom = todoData&&todoData.length ? todoList : noData;
    return dom({todoData, onChangeTodoState});
}



export default VisibleTodoList
