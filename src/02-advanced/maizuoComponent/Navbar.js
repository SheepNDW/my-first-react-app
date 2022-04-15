import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    const styleObj = {
      background: '#333',
      color: 'white',
      height: '50px',
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
    return (
      <div style={styleObj}>
        <button>back</button>
        <span> 賣座電影 </span>
        <button
          onClick={() => {
            this.props.changeIndex()
          }}
        >
          center
        </button>
      </div>
    )
  }
}
