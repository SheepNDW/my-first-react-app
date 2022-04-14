import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
  // state 只能內部自己用, 外面無法改變

  // static 靜態屬性
  static propTypes = {
    left: PropTypes.string,
    leftShow: PropTypes.bool
  }

  // 預設值
  static defaultProps = {
    leftShow: true
  }

  // 屬性是父組件傳來的, this.props
  render() {
    // console.log(this.props)
    const { title, leftShow } = this.props
    return (
      <div>
        {leftShow && <button>返回</button>}
        Navbar - {title}
        <button>home</button>
      </div>
    )
  }
}
