import React, { useState } from 'react'
import store from '../redux/store'

export default function City(props) {
  const [list] = useState(['台北', '新北', '桃園', '台中', '台南', '高雄'])
  return (
    <div>
      City
      <ul>
        {list.map((item) => (
          <li
            key={item}
            onClick={() => {
              store.dispatch({
                type: 'change-city',
                payload: item
              })
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
