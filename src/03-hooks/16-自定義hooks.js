import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

function useCinemaList() {
  const [cinemaList, setCinemaList] = useState([])

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      setCinemaList(res.data.data.cinemas)
    })
  }, [])

  return {
    cinemaList
  }
}

function useFilter(cinemaList, myText) {
  const getCinemaList = useMemo(
    () =>
      cinemaList.filter(
        (item) =>
          item.name.toUpperCase().includes(myText.toUpperCase()) ||
          item.address.toUpperCase().includes(myText.toUpperCase())
      ),
    [cinemaList, myText]
  )

  return {
    getCinemaList
  }
}

export default function Cinema() {
  const [myText, setMyText] = useState('')

  const { cinemaList } = useCinemaList()

  const { getCinemaList } = useFilter(cinemaList, myText)

  return (
    <div>
      <input
        type="text"
        value={myText}
        onChange={(evt) => {
          setMyText(evt.target.value)
        }}
      />
      {getCinemaList.map((item) => (
        <dl key={item.cinemaId}>
          <dt>{item.name}</dt>
          <dd>{item.address}</dd>
        </dl>
      ))}
    </div>
  )
}
