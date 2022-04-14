import React, { Component } from 'react'
import axios from 'axios'
import './css/02-maizuo.css'
import BScroll from 'better-scroll'

export default class Cinema extends Component {
  constructor() {
    super()

    this.state = {
      cinemaList: [],
      bakCinemaList: []
    }

    // axios 請求資料
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((res) => {
      console.log(res.data.data.cinemas)
      this.setState({
        cinemaList: res.data.data.cinemas,
        bakCinemaList: res.data.data.cinemas
      })

      new BScroll('.wrapper')
    })
  }

  // 備註：生命週期函式更適合發送請求

  render() {
    return (
      <div>
        <input type="text" onInput={this.handleInput} />
        <div
          className="wrapper"
          style={{ height: '500px', background: 'orange', overflow: 'hidden' }}
        >
          <div className="content">
            {this.state.cinemaList.map((item) => (
              <dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>
            ))}
          </div>
        </div>
      </div>
    )
  }

  handleInput = (event) => {
    console.log('input', event.target.value)

    const newList = this.state.bakCinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    )

    this.setState({
      cinemaList: newList
    })
  }
}
