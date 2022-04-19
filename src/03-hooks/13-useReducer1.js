import React, { useReducer } from 'react'

// 處理函式
const reducer = (prevState, action) => {
  console.log('reducer')
  let newState = { ...prevState }

  switch (action.type) {
    case 'decrement':
      newState.count--
      return newState

    case 'increment':
      newState.count++
      return newState

    default:
      return prevState
  }
}

// 外部 state
const initialState = {
  count: 0
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: 'decrement'
          })
        }}
      >
        -
      </button>
      <span style={{ margin: '0 16px' }}>{state.count}</span>
      <button
        onClick={() => {
          dispatch({
            type: 'increment'
          })
        }}
      >
        +
      </button>
    </div>
  )
}
