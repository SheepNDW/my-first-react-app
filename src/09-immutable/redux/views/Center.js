import React from 'react'
import { withRouter } from 'react-router-dom'

function Center(props) {
  return (
    <div>
      center
      <div
        onClick={() => {
          // console.log(props)
          props.history.push('/filmsorder')
        }}
      >
        電影訂單
      </div>
    </div>
  )
}

export default withRouter(Center)
