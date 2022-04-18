import React, { Component, useEffect } from 'react'

export default class App extends Component {
  state = {
    isCreated: true
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isCreated: !this.state.isCreated })}>click</button>
        {/* {this.state.isCreated ? <Child /> : ''} */}
        {this.state.isCreated && <Child />}
      </div>
    )
  }
}

function Child() {
  useEffect(() => {
    window.onresize = () => {
      console.log('resize')
    }

    let timer = setInterval(() => {
      console.log('1111')
    }, 1000)

    return () => {
      console.log('組件銷毀')

      window.onresize = null
      clearInterval(timer)
    }
  }, [])

  return <div>Child</div>
}
