import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
  myRef = React.createRef()

  state = {
    list: [
      { id: 1, text: 'aaa' },
      { id: 2, text: 'bbb' },
      { id: 3, text: 'ccc' }
    ]
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <button onClick={this.handleClick}>add</button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              {/* {item.text} */}

              {/* 富文本展示 */}
              <span
                dangerouslySetInnerHTML={{
                  __html: item.text
                }}
              ></span>

              {/* <button onClick={this.handleDelClick.bind(this, index)}>del</button> */}

              <button onClick={() => this.handleDelClick(index)}>del</button>
            </li>
          ))}
        </ul>

        {/* {this.state.list.length === 0 ? <div>暫無代辦事項</div> : null} */}

        {/* {this.state.list.length === 0 && <div>暫無代辦事項</div>} */}

        <div className={this.state.list.length === 0 ? '' : 'hidden'}>暫無代辦事項</div>
      </div>
    )
  }

  handleClick = () => {
    console.log('clicked', this.myRef.current.value)

    // 不要直接修改狀態
    // this.state.list.push(this.myRef.current.value)

    const newList = [...this.state.list]
    newList.push({
      id: Math.random() * 100000000, // 生成不同 id 的函式
      text: this.myRef.current.value
    })

    this.setState({
      list: newList
    })

    // 清空輸入框
    this.myRef.current.value = ''
  }

  handleDelClick(index) {
    console.log('click - del', index)

    const newList = this.state.list.slice()
    newList.splice(index, 1)

    this.setState({
      list: newList
    })
  }
}
