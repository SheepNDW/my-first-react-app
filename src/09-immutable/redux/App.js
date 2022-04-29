import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import store from './redux/store'

export default class App extends Component {
  state = {
    isShow: store.getState().TabbarReducer.get('show')
  }

  componentDidMount() {
    // store.subscribe 訂閱
    store.subscribe(() => {
      // console.log('app 中訂閱', store.getState())
      this.setState({ isShow: store.getState().TabbarReducer.get('show') })
    })
  }

  render() {
    return (
      <div>
        <MRouter>{this.state.isShow && <Tabbar></Tabbar>}</MRouter>
      </div>
    )
  }
}
