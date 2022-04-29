import React, { Component } from 'react'
import { List, Map } from 'immutable'

export default class App extends Component {
  state = {
    info: Map({
      name: 'Sheep',
      location: Map({
        nation: 'Taiwan',
        city: 'Taipei'
      }),
      favor: List(['讀書', '看報', '寫扣'])
    })
  }
  render() {
    return (
      <>
        <h1>個人資訊修改</h1>
        <button
          onClick={() => {
            this.setState({
              info: this.state.info
                .set('name', 'Hitsuji')
                .set('location', this.state.info.get('location').set('city', 'Tokyo'))
            })
          }}
        >
          修改
        </button>
        <div>
          {this.state.info.get('name')}
          <br />
          {this.state.info.get('location').get('nation')} -{' '}
          {this.state.info.get('location').get('city')}
          <br />
          {this.state.info.get('favor').map((item, index) => (
            <li key={item}>
              {item}
              <button
                style={{ marginLeft: '1rem' }}
                onClick={() => {
                  console.log(index)
                  this.setState({
                    info: this.state.info.set(
                      'favor',
                      this.state.info.get('favor').splice(index, 1)
                    )
                  })
                }}
              >
                del
              </button>
            </li>
          ))}
        </div>
      </>
    )
  }
}
