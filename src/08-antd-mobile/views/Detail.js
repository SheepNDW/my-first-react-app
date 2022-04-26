import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { hide, show } from '../redux/actionCreator/TabbarActionCreator'

function Detail(props) {
  const { hide, show } = props
  useEffect(() => {
    //console.log('create')
    hide()

    return () => {
      console.log('destory')
      show()
    }
  }, [hide, show])

  return <div>Detail</div>
}

const mapDispatchToProps = {
  show,
  hide
}

// connect(將來給孩子傳的屬性, 將來給孩子傳的回調函式)
export default connect(null, mapDispatchToProps)(Detail)
