import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'
import City from '../views/City'

function isAuth() {
  return localStorage.getItem('token')
}

export default class indexRouter extends Component {
  render() {
    return (
      <Router>
        {this.props.children}
        <Switch>
          <Route path="/films" component={Films} />
          <Route path="/cinemas" component={Cinemas} />
          {/* <Route path="/center" component={Center} /> */}
          <Route
            path="/center"
            render={(props) => {
              // console.log(props)
              return isAuth() ? <Center /> : <Redirect to="/login" />
            }}
          />

          <Route path="/login" component={Login} />
          <Route path="/city" component={City} />

          {/* 動態路由 */}
          <Route path="/detail/:id" component={Detail} />

          {/* <Route path="/detail/" component={Detail} /> */}

          {/* 模糊匹配 */}
          {/* <Redirect from="/" to="/films" /> */}

          {/* 精確匹配 exact */}
          <Redirect from="/" to="/films" exact />

          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

// Route 源碼解析
// class Route extends Component {
//   // ...

//   render() {
//     const MyComponent = this.props.component
//     return <div>
//       <MyComponent history={} match={}... />
//     </div>
//   }
// }
