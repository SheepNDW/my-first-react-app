import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'

export default class App extends Component {
  // store.subscribe 訂閱
  render() {
    return (
      <div>
        <MRouter>
          <Tabbar></Tabbar>
        </MRouter>
      </div>
    )
  }
}
