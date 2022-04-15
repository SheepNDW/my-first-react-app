import React, { Component } from 'react'
import './css/03-communication.css'
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filmList: [],
      info: ''
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
          <FilmItem
            key={item.filmId}
            {...item}
            onEvent={(value) => {
              // console.log('父組件接收', value)
              this.setState({ info: value })
            }}
          />
        ))}

        <FilmDetail info={this.state.info} />
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
          this.props.onEvent(synopsis)
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
  render() {
    return <div className="filmDetail">{this.props.info}</div>
  }
}
