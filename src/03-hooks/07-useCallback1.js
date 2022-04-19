import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  // useState 記憶函式, 記住狀態

  let myCount = 0 // 組件每次重新渲染都會讓自己定義的變數被重新賦值
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1)
          myCount++
        }}
      >
        add
      </button>
      {count} - {myCount}
    </div>
  )
}
