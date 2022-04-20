import React from 'react'

export default function Detail(props) {
  console.log(props.match.params.id)
  // console.log(props.location.query.id)
  // console.log(props.location.state.id)
  return <div>Detail</div>
}
