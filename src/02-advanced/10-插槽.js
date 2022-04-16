import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>
        Child
        {/* 插槽: 相當於 vue slot, 具名插槽 */}
        {this.props.children[2]}
        {this.props.children[1]}
        {this.props.children[0]}
      </div>
    )
  }
}

class Swiper extends Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Swiper>
          <div>111111</div>
          <div>222222</div>
          <div>333333</div>
        </Swiper>
        <Swiper>
          <div>aaa</div>
          <div>bbb</div>
          <div>ccc</div>
        </Swiper>

        <Child>
          <div>1111111</div>
          <div>2222222</div>
          <div>3333333</div>
          {
            // children
          }
        </Child>
      </div>
    )
  }
}

/*
  1. 為了複用
  2. 一定程度減少父子通訊
*/
