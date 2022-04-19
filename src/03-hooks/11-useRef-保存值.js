import React, { useRef, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  // useState 記憶函式, 記住狀態

  let myCount = useRef(0)
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1)
          myCount.current++
        }}
      >
        add
      </button>
      {count} - {myCount.current}
    </div>
  )
}
