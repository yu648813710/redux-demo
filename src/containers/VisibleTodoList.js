import React from 'react'
import { connect } from 'react-redux'
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
const VisibleTodoList = ({ todos, visibilityFilter, onChangeTodoState}) => {
    const todoData = dataFilter(visibilityFilter.filter(res => res.active)[0].type, todos)
    const dom = todoData&&todoData.length ? todoList : noData;
    return dom({todoData, onChangeTodoState});
}
// 向组件绑定state状态
const mapStateToProps = ({todos, visibilityFilter}) => {
    return {todos, visibilityFilter};
};

// 向组件绑定action
const mapDispatchToProps = ({
    onChangeTodoState: (id)=> {
        return {
            type: 'CHANGE_TODO',
            id,
        }
    }
  })
// 通过react-redux连接dom与store，以及让组件获取状态
const VisibleTodoListDom = connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)

export default VisibleTodoListDom
