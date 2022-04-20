import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import NowPlaying from './films/NowPlaying'
import ComingSoon from './films/ComingSoon'

export default function Films() {
  return (
    <div>
      <div style={{ height: '200px', background: 'yellow' }}>大輪播</div>

      <div>導覽列</div>

      {/* 路由配置 嵌套路由 (巢狀路由) */}
      <Switch>
        <Route path="/films/nowplaying" component={NowPlaying} />
        <Route path="/films/comingsoon" component={ComingSoon} />
        <Redirect from="/films" to="/films/nowplaying" />
      </Switch>
    </div>
  )
}
