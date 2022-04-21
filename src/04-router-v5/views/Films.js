import React from 'react'
import { Route, Redirect, Switch, NavLink } from 'react-router-dom'
import NowPlaying from './films/NowPlaying'
import ComingSoon from './films/ComingSoon'

import style from './css/Film.module.css'

export default function Films() {
  return (
    <div className={style.films}>
      <div style={{ height: '200px', background: 'yellow' }}>大輪播</div>

      <ul>
        <li>
          <NavLink to="/films/nowplaying" activeClassName={style.myActive}>
            正在熱映
          </NavLink>
        </li>
        <li>
          <NavLink to="/films/comingsoon" activeClassName={style.myActive}>
            即將上映
          </NavLink>
        </li>
      </ul>

      {/* 路由配置 嵌套路由 (巢狀路由) */}
      <Switch>
        <Route path="/films/nowplaying" component={NowPlaying} />
        <Route path="/films/comingsoon" component={ComingSoon} />
        <Redirect from="/films" to="/films/nowplaying" />
      </Switch>
    </div>
  )
}
