import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
  // myRef = React.createRef()

  state = {
    list: [
      { id: 1, text: 'aaa', isChecked: false },
      { id: 2, text: 'bbb', isChecked: true },
      { id: 3, text: 'ccc', isChecked: false }
    ],
    myText: ''
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.myText}
          onChange={(evt) => {
            this.setState({
              myText: evt.target.value
            })
          }}
        />
        <button onClick={this.handleClick}>add</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => this.handleChecked(index)}
              />
              {/* 富文本展示 */}
              <span
                dangerouslySetInnerHTML={{
                  __html: item.text
                }}
                style={{ textDecoration: item.isChecked ? 'line-through' : '' }}
              ></span>

              <button onClick={() => this.handleDelClick(index)}>del</button>
            </li>
          ))}
        </ul>

        <div className={this.state.list.length === 0 ? '' : 'hidden'}>暫無代辦事項</div>
      </div>
    )
  }

  handleClick = () => {
    const newList = [...this.state.list]
    newList.push({
      id: Math.random() * 100000000,
      text: this.state.myText,
      isChecked: false
    })

    this.setState({
      list: newList,
      myText: ''
    })
  }

  handleChecked = (index) => {
    console.log(index)
    const newList = [...this.state.list]

    newList[index].isChecked = !newList[index].isChecked

    this.setState({
      list: newList
    })
  }

  handleDelClick(index) {
    const newList = this.state.list.slice()
    newList.splice(index, 1)

    this.setState({
      list: newList
    })
  }
}
