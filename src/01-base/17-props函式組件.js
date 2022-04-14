import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* class component */}
        <Navbar title="導覽" />

        {/* function component */}
        <Sidebar bg="pink" position="right" />
      </div>
    )
  }
}
