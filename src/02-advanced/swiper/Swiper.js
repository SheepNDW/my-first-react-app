import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css/bundle'

Swiper.use([Navigation, Pagination])

export default class MySwiper extends Component {
  componentDidUpdate() {
    new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: this.props.loop
    })
  }

  render() {
    return (
      <div>
        <div className="swiper" style={{ minHeight: '200px' }}>
          <div className="swiper-wrapper">{this.props.children}</div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
