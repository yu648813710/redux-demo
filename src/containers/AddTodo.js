import React from 'react'
import { connect } from 'react-redux'

let nextTodoId = 0
const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

// 获取提交方法
const AddTodo = ({ dispatch }) => {
    let inputDom
    function add () {
        if(!inputDom.value.trim()) {
            alert('请输入内容');
            return false;
        };
        dispatch(addTodo(inputDom.value))
        inputDom.value = null
    }
    return (
        <div className="box">
          <input ref={(node)=> {inputDom = node}} placeholder='输入任务名称' /><button onClick={add}>添加</button>
        </div>
      )
};

// 让组件可以获取redux里的方法
const AddTodoDom = connect()(AddTodo)
export default AddTodoDom
