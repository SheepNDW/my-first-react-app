import React, { useEffect, useState } from 'react'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import store from '../redux/store'

export default function Cinemas(props) {
  const [cityName] = useState(store.getState().CityReducer.cityName)

  const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)

  useEffect(() => {
    if (store.getState().CinemaListReducer.list.length === 0) {
      // 去後台取資料
      // actionCreator 裡寫非同步
      store.dispatch(getCinemaListAction())
    } else {
      console.log('store 緩存')
    }

    // 訂閱
    const unsubscribe = store.subscribe(() => {
      console.log('cinema 中訂閱', store.getState().CinemaListReducer.list)
      setCinemaList(store.getState().CinemaListReducer.list)
    })

    return () => {
      // 取消訂閱
      unsubscribe()
    }
  }, [])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          onClick={() => {
            props.history.push(`/city`)
          }}
        >
          {cityName}
        </div>
        <div
          onClick={() => {
            props.history.push(`/cinemas/search`)
          }}
        >
          搜尋
        </div>
      </div>
      {cinemaList.map((item) => (
        <dl key={item.cinemaId} style={{ padding: '10px' }}>
          <dt>{item.name}</dt>
          <dd style={{ fontSize: '12px', color: 'gray' }}>{item.address}</dd>
        </dl>
      ))}
    </div>
  )
}
