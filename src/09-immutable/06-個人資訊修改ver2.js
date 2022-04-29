import React, { Component } from 'react'
import { fromJS } from 'immutable'

export default class App extends Component {
  state = {
    info: fromJS({
      name: 'Sheep',
      location: {
        nation: 'Taiwan',
        city: 'Taipei'
      },
      favor: ['讀書', '看報', '寫扣']
    })
  }

  componentDidMount() {
    console.log(this.state.info)
  }

  render() {
    return (
      <>
        <h1>個人資訊修改</h1>
        <button
          onClick={() => {
            this.setState({
              info: this.state.info.setIn(['name'], 'Hitsuji').setIn(['location', 'city'], 'Tokyo')
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
                  // this.setState({
                  //   info: this.state.info.setIn(['favor', index], '111')
                  // })
                  this.setState({
                    info: this.state.info.updateIn(['favor'], (list) => list.splice(index, 1))
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
