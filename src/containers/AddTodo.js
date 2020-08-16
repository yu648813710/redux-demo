import React from 'react'
import store from '../store'

let nextTodoId = 0
const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

// 获取提交方法
const AddTodo = () => {
    let inputDom
    function add () {
        if(!inputDom.value.trim()) {
            alert('请输入内容');
            return false;
        };
        store.dispatch(addTodo(inputDom.value))
        store.getState().todos.push({text:'睡觉', id:89, completed: false})
        inputDom.value = null
    }
    return (
        <div className="box">
          <input ref={(node)=> {inputDom = node}} placeholder='输入任务名称' /><button onClick={add}>添加</button>
        </div>
      )
};

// 让组件可以获取redux里的方法
export default AddTodo
