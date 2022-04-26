import React, { useEffect, useState } from 'react'
import { Route, Redirect, Switch, useHistory, useLocation } from 'react-router-dom'
import NowPlaying from './films/NowPlaying'
import ComingSoon from './films/ComingSoon'

import { Swiper, Tabs } from 'antd-mobile'

import style from './css/Film.module.css'
import axios from 'axios'

export default function Films() {
  const [loopList, setLoopList] = useState([])

  useEffect(() => {
    axios({
      url: 'https://apipc-xiaotuxian-front.itheima.net/home/banner'
    }).then((res) => {
      console.log(res.data.result)
      setLoopList(res.data.result)
    })
  }, [])

  const history = useHistory()
  const location = useLocation()

  return (
    <div className={style.films}>
      {/* <div style={{ height: '200px', background: 'yellow' }}>大輪播</div> */}

      <Swiper autoplay loop>
        {loopList.map((item) => (
          <Swiper.Item key={item.id}>
            <img src={item.imgUrl} alt="swiper" style={{ width: '100%' }} />
          </Swiper.Item>
        ))}
      </Swiper>

      {/* <ul>
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
      </ul> */}

      <div style={{ position: 'sticky', top: '0', background: 'white' }}>
        <Tabs
          onChange={(value) => {
            // console.log(value)
            history.push(value)
          }}
          activeKey={location.pathname}
        >
          <Tabs.Tab title="正在熱映" key="/films/nowplaying"></Tabs.Tab>
          <Tabs.Tab title="即將上映" key="/films/comingsoon"></Tabs.Tab>
        </Tabs>
      </div>

      {/* 路由配置 嵌套路由 (巢狀路由) */}
      <Switch>
        <Route path="/films/nowplaying" component={NowPlaying} />
        <Route path="/films/comingsoon" component={ComingSoon} />
        <Redirect from="/films" to="/films/nowplaying" />
      </Switch>
    </div>
  )
}
