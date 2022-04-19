import React, { useCallback, useState } from 'react'

export default function App() {
  const [myName, setMyName] = useState('sheep')
  const [text, setText] = useState('')
  const [list, setList] = useState(['aaa', 'bbb', 'ccc'])

  const handleChange = useCallback((evt) => {
    setText(evt.target.value)
  }, [])

  const handleAdd = useCallback(() => {
    // console.log(text)

    setList([...list, text])

    // 清空輸入框
    setText('')
  }, [text, list])

  const handleDel = useCallback(
    (index) => {
      console.log(index)
      const newList = [...list]
      newList.splice(index, 1)

      setList(newList)
    },
    [list]
  )

  return (
    <div>
      {myName} - <button onClick={() => setMyName('hitsuji')}>change - myName</button>
      <br />
      <br />
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
