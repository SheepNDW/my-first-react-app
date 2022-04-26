import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import style from './Tabbar.module.css'
import { TabBar } from 'antd-mobile'

import { AppOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons'

class AppTabbar extends Component {
  tabs = [
    {
      key: '/films',
      title: '電影',
      icon: <AppOutline />
    },
    {
      key: '/cinemas',
      title: '影院',
      icon: <UnorderedListOutline />
    },
    {
      key: '/center',
      title: '我的',
      icon: <UserOutline />
    }
  ]

  render() {
    return (
      <div className={style.tabbar}>
        <TabBar
          onChange={(value) => {
            // console.log(value)
            this.props.history.push(value)
          }}
          activeKey={'/' + this.props.location.pathname.split('/')[1]}
        >
          {this.tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    )
  }
}

export default withRouter(AppTabbar)
