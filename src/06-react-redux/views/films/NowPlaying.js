import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

export default function NowPlaying(props) {
  const [list, setList] = useState([])
  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      console.log(res.data.data.films)
      setList(res.data.data.films)
    })
  }, [])

  // const history = useHistory()
  // const handleChangePage = (id) => {
  //   // console.log('clicked', id)
  //   // window.location.href = "#/detail/" + id // 原生 JS 寫法

  //   // 1. 動態路由傳參
  //   history.push(`/detail/${id}`)

  //   // 2. query 傳參
  //   // history.push({ pathname: '/detail', query: { id: id } })

  //   // 3. state 傳參
  //   // history.push({ pathname: '/detail', state: { id: id } })
  // }

  return (
    <div>
      {list.map((item) => (
        <WithFilmItem key={item.filmId} {...item} />
      ))}
    </div>
  )
}

function FilmItem(props) {
  const { name, filmId, history } = props
  return (
    <li
      onClick={() => {
        // console.log(filmId)
        history.push(`/detail/${filmId}`)
      }}
    >
      {name}
    </li>
  )
}

const WithFilmItem = withRouter(FilmItem)
