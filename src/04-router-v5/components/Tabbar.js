import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.css'

export default class Tabbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/films" activeClassName="myActive">
              電影
            </NavLink>
          </li>
          <li>
            <NavLink to="/cinemas" activeClassName="myActive">
              影院
            </NavLink>
          </li>
          <li>
            <NavLink to="/center" activeClassName="myActive">
              我的
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
