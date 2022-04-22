import React, { useEffect } from 'react'
import { hide, show } from '../redux/actionCreator/TabbarActionCreator'
import store from '../redux/store'

export default function Detail(props) {
  console.log(props.match.params.id)
  // console.log(props.location.query.id)
  // console.log(props.location.state.id)

  useEffect(() => {
    //console.log('create')

    // store.dispatch 通知
    store.dispatch(hide())

    return () => {
      console.log('destory')
      store.dispatch(show())
    }
  }, [])

  return <div>Detail</div>
}
