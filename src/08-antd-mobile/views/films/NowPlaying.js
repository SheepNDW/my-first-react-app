import React, { useState, useRef } from 'react'
// import { NavLink } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
import { Image, List, InfiniteScroll } from 'antd-mobile'

import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function NowPlaying(props) {
  const [list, setList] = useState([])
  const [hasMore, setHasMore] = useState(true)

  const count = useRef(0)

  // useEffect(() => {
  //   axios({
  //     url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067',
  //     headers: {
  //       'X-Client-Info':
  //         '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
  //       'X-Host': 'mall.film-ticket.film.list'
  //     }
  //   }).then((res) => {
  //     console.log(res.data.data.films)
  //     setList(res.data.data.films)
  //   })
  // }, [])

  const loadMore = () => {
    console.log('到底了')
    count.current++

    setHasMore(false)
    axios({
      url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${count.current}&pageSize=10&type=1&k=1886067`,
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      // console.log(res.data.data.films)
      setList([...list, ...res.data.data.films])
      setHasMore(res.data.data.films.length > 0)
    })
  }

  const history = useHistory()
  const handleChangePage = (id) => {
    history.push(`/detail/${id}`)
  }

  return (
    <div>
      <List>
        {list.map((item) => (
          <List.Item
            onClick={() => handleChangePage(item.filmId)}
            key={item.filmId}
            prefix={
              <Image
                src={item.poster}
                // style={{ borderRadius: 20 }}
                // fit="cover"
                width={80}
                // height={40}
              />
            }
            description={
              <div>
                <div>觀眾評分: {item.grade}</div>
                <div>主演: ***</div>
                <div>
                  {item.nation} | {item.runtime}分鐘
                </div>
              </div>
            }
          >
            {item.name}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}

// function FilmItem(props) {
//   const { name, filmId, history } = props
//   return (
//     <li
//       onClick={() => {
//         // console.log(filmId)
//         history.push(`/detail/${filmId}`)
//       }}
//     >
//       {name}
//     </li>
//   )
// }

// const WithFilmItem = withRouter(FilmItem)
