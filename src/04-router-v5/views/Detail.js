import React, { useEffect } from 'react'

export default function Detail(props) {
  console.log(props.match.params.id)
  // console.log(props.location.query.id)
  // console.log(props.location.state.id)

  useEffect(() => {
    //console.log('create')

    // store.dispatch 通知

    return () => {
      console.log('destory')
    }
  }, [])

  return <div>Detail</div>
}
