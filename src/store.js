import { createStore } from 'redux'
import reducer from './reducers'
// 初始化数据
const initData = {
    todos: [{text:'吃饭',id:0,completed: false}]
}
// 判断是否有redux的开发者工具
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{}
const store = createStore(reducer, initData, reduxDevtools)
export default store;