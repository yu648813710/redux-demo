import { createStore } from 'redux'
import reducer from './reducers'
// 判断是否有redux的开发者工具
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{}
const store = createStore(reducer, reduxDevtools)
export default store;