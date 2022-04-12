import React, { Component } from 'react'

export default class App extends Component {
  a = 100
  myRef = React.createRef()

  render() {
    return (
      <div>
        {/* <input type="text" ref="myText" /> */}
        <input type="text" ref={this.myRef} />
        <button
          onClick={() => {
            // console.log('clicked 1', this.refs.myText.value)

            console.log('clicked', this.myRef.current.value)
          }}
        >
          add 1
        </button>

        <button onClick={this.handleClick2}>add 2</button>
      </div>
    )
  }

  handleClick2 = () => {
    console.log('clicked', this.myRef.current.value)
  }
}
