import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    type: 1
  }

  render() {
    return (
      <div>
        <ul>
          <li onClick={() => this.setState({ type: 1 })}>正在熱映</li>
          <li onClick={() => this.setState({ type: 2 })}>即將上映</li>
        </ul>

        <FilmList type={this.state.type} />
      </div>
    )
  }
}

class FilmList extends Component {
  state = {
    list: [],
    type: 1
  }

  // 初始化 - 執行一次
  componentDidMount() {
    // console.log(this.props.type)
    if (this.props.type === 1) {
      // 請求正在熱映資料
      console.log('請求正在熱映資料')
      getNowShowing().then((res) => {
        console.log(res.data.data.films)
        this.setState({ list: res.data.data.films })
      })
    } else {
      // 請求即將上映資料
      console.log('請求即將上映資料')
      getComingSoon().then((res) => {
        console.log(res.data.data.films)
        this.setState({ list: res.data.data.films })
      })
    }
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(nextProps)
    return {
      type: nextProps.type
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.type)
    if (this.state.type === prevState.type) return

    if (this.state.type === 1) {
      // 請求正在熱映資料
      console.log('請求正在熱映資料')
      getNowShowing().then((res) => {
        console.log(res.data.data.films)
        this.setState({ list: res.data.data.films })
      })
    } else {
      // 請求即將上映資料
      console.log('請求即將上映資料')
      getComingSoon().then((res) => {
        console.log(res.data.data.films)
        this.setState({ list: res.data.data.films })
      })
    }
  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.type === 1) {
  //     // 請求正在熱映資料
  //     console.log('請求正在熱映資料')
  //     getNowShowing().then((res) => {
  //       console.log(res.data.data.films)
  //       this.setState({ list: res.data.data.films })
  //     })
  //   } else {
  //     // 請求即將上映資料
  //     console.log('請求即將上映資料')
  //     getComingSoon().then((res) => {
  //       console.log(res.data.data.films)
  //       this.setState({ list: res.data.data.films })
  //     })
  //   }
  // }

  render() {
    return (
      <ul>
        {this.state.list.map((item) => (
          <li key={item.filmId}>{item.name}</li>
        ))}
      </ul>
    )
  }
}

function getNowShowing() {
  return axios({
    url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301',
    headers: {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
      'X-Host': 'mall.film-ticket.film.list'
    }
  })
}

function getComingSoon() {
  return axios({
    url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8077848',
    headers: {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
      'X-Host': 'mall.film-ticket.film.list'
    }
  })
}
