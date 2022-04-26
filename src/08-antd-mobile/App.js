import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import AppTabbar from './components/Tabbar'
import './views/css/App.css'
import { connect } from 'react-redux'

import './utils/request'

// import { Button } from 'antd-mobile'

class App extends Component {
  componentDidMount() {
    // console.log(this.props)
  }

  render() {
    return (
      <div>
        {/* <Button color="danger">click</Button> */}

        <MRouter>{this.props.isShow && <AppTabbar></AppTabbar>}</MRouter>
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
