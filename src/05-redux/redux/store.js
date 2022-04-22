// #1 引入 redux
// #2 createStore (reducer)

import { combineReducers, createStore } from 'redux'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'

const reducer = combineReducers({
  CityReducer,
  TabbarReducer
})

const store = createStore(reducer)

/*
  store.dispatch
  store.subscribe
  store.getState
*/

// function createMyStore(reducer) {
//   const list = []
//   let state = reducer(undefined, {})

//   const subscribe = (callback) => {
//     list.push(callback)
//   }

//   const dispatch = (action) => {
//     state = reducer(state, action)
//     for (const i in list) {
//       list[i] && list[i]()
//     }
//   }

//   const getState = () => {
//     return state
//   }

//   return {
//     subscribe,
//     dispatch,
//     getState
//   }
// }

export default store
