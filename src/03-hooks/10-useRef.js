import React, { useRef, useState } from 'react'

export default function App() {
  const [list, setList] = useState(['aaa', 'bbb', 'ccc'])
  const myText = useRef() // React.createRef()

  const handleAdd = () => {
    console.log(myText.current.value)

    setList([...list, myText.current.value])
    myText.current.value = ''
  }

  const handleDel = (index) => {
    console.log(index)
    const newList = [...list]
    newList.splice(index, 1)

    setList(newList)
  }

  return (
    <div>
      <input type="text" ref={myText} />
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
