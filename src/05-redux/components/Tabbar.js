import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'

export default class Tabbar extends Component {
  render() {
    return (
      <div className={style.tabbar}>
        <ul>
          <li>
            <NavLink to="/films" activeClassName={style.myActive}>
              電影
            </NavLink>
          </li>
          <li>
            <NavLink to="/cinemas" activeClassName={style.myActive}>
              影院
            </NavLink>
          </li>
          <li>
            <NavLink to="/center" activeClassName={style.myActive}>
              我的
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
