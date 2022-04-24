import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    // console.log(this.props)
  }

  render() {
    return (
      <div>
        <MRouter>{this.props.isShow && <Tabbar></Tabbar>}</MRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    a: 1,
    b: 1,
    isShow: state.TabbarReducer.show
  }
}

export default connect(mapStateToProps)(App)
