import React, { Component } from 'react'
import { Button } from 'antd'

export default class App extends Component {
  render() {
    return (
      <div>
        <Button
          type="danger"
          ghost={true}
          loading={true}
          onClick={() => {
            console.log('clicked')
          }}
        >
          Primary Button
        </Button>
      </div>
    )
  }
}
