import React, { useEffect, useContext, useReducer } from 'react'
import '../02-advanced/css/03-communication.css'
import axios from 'axios'

const GlobalContext = React.createContext()

const initialState = {
  info: '',
  filmList: []
}

const reducer = (prevState, action) => {
  let newState = { ...prevState }

  switch (action.type) {
    case 'change-filmList':
      newState.filmList = action.value
      return newState

    case 'change-info':
      newState.info = action.value
      return newState

    default:
      return prevState
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get(`/test.json`).then((res) => {
      dispatch({
        type: 'change-filmList',
        value: res.data.data.films
      })
    })
  }, [])

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div>
        {state.filmList.map((item) => (
          <FilmItem key={item.filmId} {...item} />
        ))}

        <FilmDetail />
      </div>
    </GlobalContext.Provider>
  )
}

function FilmItem(props) {
  const { name, poster, grade, synopsis } = props
  const { dispatch } = useContext(GlobalContext)

  return (
    <div
      className="filmItem"
      onClick={() => {
        // console.log(synopsis)
        dispatch({
          type: 'change-info',
          value: synopsis
        })
      }}
    >
      <img src={poster} alt={name} />
      <h4>{name}</h4>
      <div>觀眾評分: {grade}</div>
    </div>
  )
}

function FilmDetail() {
  const { state } = useContext(GlobalContext)

  return <div className="filmDetail">detail - {state.info}</div>
}
