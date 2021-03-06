import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {
  render() {
    // 假設是上面父組件傳來的物件
    const obj = {
      title: '測試',
      leftShow: false
    }

    return (
      <div>
        <div>
          <h2>首頁</h2>
          <Navbar title="首頁" leftShow={false} />
        </div>
        <div>
          <h2>列表</h2>
          <Navbar title="列表" />
        </div>
        <div>
          <h2>購物車</h2>
          <Navbar title="購物車" />
        </div>

        <Navbar {...obj} />
      </div>
    )
  }
}
