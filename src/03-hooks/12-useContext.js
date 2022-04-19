import React, { useEffect, useState, useContext } from 'react'
import '../02-advanced/css/03-communication.css'
import axios from 'axios'

const GlobalContext = React.createContext() // 創建 context

export default function App() {
  const [filmList, setFilmList] = useState([])
  const [info, setInfo] = useState('')

  useEffect(() => {
    axios.get(`/test.json`).then((res) => {
      setFilmList(res.data.data.films)
    })
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        info: info,
        changeInfo: (value) => {
          setInfo(value)
        }
      }}
    >
      <div>
        {filmList.map((item) => (
          <FilmItem key={item.filmId} {...item} />
        ))}

        <FilmDetail />
      </div>
    </GlobalContext.Provider>
  )
}

function FilmItem(props) {
  const { name, poster, grade, synopsis } = props
  const context = useContext(GlobalContext)

  return (
    <div
      className="filmItem"
      onClick={() => {
        // console.log(synopsis)
        context.changeInfo(synopsis)
      }}
    >
      <img src={poster} alt={name} />
      <h4>{name}</h4>
      <div>觀眾評分: {grade}</div>
    </div>
  )
}

function FilmDetail() {
  const context = useContext(GlobalContext)

  return <div className="filmDetail">detail - {context.info}</div>
}
