import React, { Component } from 'react'
import './css/03-communication.css'
import axios from 'axios'

const GlobalContext = React.createContext() // 創建 context

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
      <GlobalContext.Provider
        value={{
          info: this.state.info,
          changeInfo: (value) => {
            this.setState({ info: value })
          }
        }}
      >
        <div>
          {this.state.filmList.map((item) => (
            <FilmItem key={item.filmId} {...item} />
          ))}

          <FilmDetail />
        </div>
      </GlobalContext.Provider>
    )
  }
}

class FilmItem extends Component {
  render() {
    const { name, poster, grade, synopsis } = this.props
    return (
      <GlobalContext.Consumer>
        {(context) => {
          return (
            <div
              className="filmItem"
              onClick={() => {
                // console.log(synopsis)
                context.changeInfo(synopsis)
              }}
            >
              <img src={poster} alt={name} />
              <h4>{name}</h4>
              <div>觀眾評分: {grade}</div>
            </div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

class FilmDetail extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(context) => <div className="filmDetail">detail - {context.info}</div>}
      </GlobalContext.Consumer>
    )
  }
}
