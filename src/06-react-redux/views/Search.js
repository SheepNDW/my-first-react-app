import React, { useEffect, useState, useMemo } from 'react'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import store from '../redux/store'

export default function Search() {
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
      console.log('search 中訂閱', store.getState().CinemaListReducer.list)
      setCinemaList(store.getState().CinemaListReducer.list)
    })

    return () => {
      // 取消訂閱
      unsubscribe()
    }
  }, [])

  const [myText, setMyText] = useState('')
  const getCinemaList = useMemo(
    () =>
      cinemaList.filter(
        (item) =>
          item.name.toUpperCase().includes(myText.toUpperCase()) ||
          item.address.toUpperCase().includes(myText.toUpperCase())
      ),
    [cinemaList, myText]
  )

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
        <dl key={item.cinemaId} style={{ padding: '10px' }}>
          <dt>{item.name}</dt>
          <dd style={{ fontSize: '12px', color: 'gray' }}>{item.address}</dd>
        </dl>
      ))}
    </div>
  )
}
