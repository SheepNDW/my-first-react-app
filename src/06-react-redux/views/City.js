import React, { useState } from 'react'
import { connect } from 'react-redux'

function City(props) {
  const [list] = useState(['台北', '新北', '桃園', '台中', '台南', '高雄'])
  return (
    <div>
      City
      <ul>
        {list.map((item) => (
          <li
            key={item}
            onClick={() => {
              props.change(item)
              // props.history.push('/cinemas')
              props.history.goBack()
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapDispatchToProps = {
  change(item) {
    return {
      type: 'change-city',
      payload: item
    }
  }
}
export default connect(null, mapDispatchToProps)(City)
