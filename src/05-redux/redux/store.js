// #1 引入 redux
// #2 createStore (reducer)

import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListReducer'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))

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
