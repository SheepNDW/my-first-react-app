import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('/test.json').then((res) => {
      setList(res.data.data.films)
    })
  }, []) // 傳空陣列, 代表只執行一次

  return (
    <div>
      {list.map((item) => (
        <li key={item.filmId}>{item.name}</li>
      ))}
    </div>
  )
}
