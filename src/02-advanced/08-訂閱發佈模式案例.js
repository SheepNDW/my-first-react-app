import React, { Component } from 'react'
import './css/03-communication.css'
import axios from 'axios'

// 調度中心
const bus = {
  list: [],
  // 訂閱
  subscribe(callback) {
    this.list.push(callback)
  },
  // 發佈
  publish(text) {
    // 遍歷所有的 list, 將回調函式執行
    this.list.forEach((callback) => {
      callback && callback(text)
    })
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filmList: []
    }
    axios.get(`/test.json`).then((res) => {
      console.log(res.data.data.films)
      this.setState({ filmList: res.data.data.films })
    })
  }

  render() {
    return (
      <div>
        {this.state.filmList.map((item) => (
          <FilmItem key={item.filmId} {...item} />
        ))}

        <FilmDetail />
      </div>
    )
  }
}

// 受控組件
class FilmItem extends Component {
  render() {
    const { name, poster, grade, synopsis } = this.props
    return (
      <div
        className="filmItem"
        onClick={() => {
          // console.log(synopsis)
          bus.publish(synopsis)
        }}
      >
        <img src={poster} alt={name} />
        <h4>{name}</h4>
        <div>觀眾評分: {grade}</div>
      </div>
    )
  }
}

class FilmDetail extends Component {
  constructor() {
    super()
    this.state = {
      info: ''
    }
    bus.subscribe((info) => {
      console.log('我在FilmDetail中定義了', info)

      this.setState({
        info: info
      })
    })
  }

  render() {
    return <div className="filmDetail">{this.state.info}</div>
  }
}
