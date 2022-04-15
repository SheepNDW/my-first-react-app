import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {
  constructor() {
    super()

    this.state = {
      cinemaList: [],
      myText: ''
      // bakCinemaList: []
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
        cinemaList: res.data.data.cinemas
      })
    })
  }

  // 備註：生命週期函式更適合發送請求

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.myText}
          onChange={(evt) => {
            this.setState({
              myText: evt.target.value
            })
          }}
        />
        {this.getCinemaList().map((item) => (
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))}
      </div>
    )
  }

  getCinemaList = () => {
    return this.state.cinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(this.state.myText.toUpperCase()) ||
        item.address.toUpperCase().includes(this.state.myText.toUpperCase())
    )
  }

  // handleInput = (event) => {
  //   console.log('input', event.target.value)

  //   const newList = this.state.bakCinemaList.filter(
  //     (item) =>
  //       item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
  //       item.address.toUpperCase().includes(event.target.value.toUpperCase())
  //   )

  //   this.setState({
  //     cinemaList: newList
  //   })
  // }
}
