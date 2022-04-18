import React, { Component } from 'react'

export default class MySwiperItem extends Component {
  render() {
    return <div className="swiper-slide">{this.props.children}</div>
  }
}
