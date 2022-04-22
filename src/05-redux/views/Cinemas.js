import React, { useState } from 'react'
import store from '../redux/store'

export default function Cinemas(props) {
  const [cityName] = useState(store.getState().CityReducer.cityName)

  return (
    <div>
      <div
        onClick={() => {
          props.history.push(`/city`)
        }}
      >
        {cityName}
      </div>
      Cinemas
    </div>
  )
}
