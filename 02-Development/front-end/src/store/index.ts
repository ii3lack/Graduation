import { createStore, combineReducers } from 'redux'
import { loginWeb } from './login'
import { homeCurrent } from './homeState'

// 全局你可以创建多个reducer 在这里统一在一起
const rootReducers = combineReducers({ loginWeb, homeCurrent })
// 全局就管理一个store
export const store = createStore(rootReducers)
