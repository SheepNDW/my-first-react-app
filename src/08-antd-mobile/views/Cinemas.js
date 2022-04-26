import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'

function Cinemas(props) {
  const { list, getCinemaListAction } = props
  useEffect(() => {
    if (list.length === 0) {
      getCinemaListAction()
    }
  }, [list, getCinemaListAction])

  return (
    <div>
      {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          onClick={() => {
            props.history.push(`/city`)
          }}
        >
          {props.cityName}
        </div>
        <div
          onClick={() => {
            props.history.push(`/cinemas/search`)
          }}
        >
          搜尋
        </div>
      </div> */}

      <NavBar
        right={
          <SearchOutline
            onClick={() => {
              props.history.push(`/cinemas/search`)
            }}
          />
        }
        left={
          <div
            onClick={() => {
              props.history.push(`/city`)
            }}
          >
            {props.cityName}
          </div>
        }
        back={null}
      >
        影院
      </NavBar>

      {props.list.map((item) => (
        <dl key={item.cinemaId} style={{ padding: '10px' }}>
          <dt>{item.name}</dt>
          <dd style={{ fontSize: '12px', color: 'gray' }}>{item.address}</dd>
        </dl>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.CinemaListReducer.list,
    cityName: state.CityReducer.cityName
  }
}

const mapDispatchToProps = {
  getCinemaListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)
