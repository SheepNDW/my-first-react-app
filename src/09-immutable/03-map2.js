import React, { Component } from 'react'
import { Map } from 'immutable'

export default class App extends Component {
  state = {
    info: Map({
      name: 'sheep',
      select: 'aa',
      filter: Map({
        text: '',
        up: true,
        down: false
      })
    })
  }

  componentDidMount() {
    console.log(this.state.info.get('filter'))
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({
              info: this.state.info.set('name', 'hitsuji')
            })
          }}
        >
          click
        </button>
        {this.state.info.get('name')}
        <Child filter={this.state.info.get('filter')} />
      </>
    )
  }
}

class Child extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.filter === nextProps.filter) {
      return false
    }
    return true
  }

  render() {
    return <div>Child</div>
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
}
