import React, { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState(['aaa', 'bbb', 'ccc'])

  const handleChange = (evt) => {
    // console.log('handleChange', evt.target.value)
    setText(evt.target.value)
  }

  const handleAdd = () => {
    // console.log(text)

    setList([...list, text])

    // 清空輸入框
    setText('')
  }

  const handleDel = (index) => {
    console.log(index)
    const newList = [...list]
    newList.splice(index, 1)

    setList(newList)
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={text} />
      <button onClick={handleAdd}>add</button>
      <ul>
        {list.map((item, index) => (
          <li key={item}>
            {item}
            <button onClick={() => handleDel(index)}>del</button>
          </li>
        ))}
      </ul>

      {!list.length && <div>暫無代辦事項</div>}
    </div>
  )
}
