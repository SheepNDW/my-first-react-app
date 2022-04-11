import React, { Component } from 'react'
import './css/01-index.css' // 匯入 css 模組, webpack 的支持

export default class App extends Component {
  render() {
    const myName = 'Sheep'
    const styleObj = {
      // 必須是 key-value 形式, 且 key 要是駝峰寫法
      backgroundColor: 'yellow',
      fontSize: '30px'
    }
    return (
      <div>
        {10 + 20} - {myName}
        <br />
        {10 > 20 ? 'aaa' : 'bbb'}
        <div style={styleObj}>111111111</div>
        <div style={{ background: 'skyBlue' }}>222222222</div>
        {/* 
          React推薦我們使用行內樣式，因為React覺得每一個組件都是一個獨立的整體
          注意: class ==> className , for ==> htmlFor(label)
        */}
        <div className="active">333333333333333</div>
        <div id="myApp">77777777</div>
        <label htmlFor="username">用戶名: </label>
        <input type="text" id="username" />
      </div>
    )
  }
}
