import React, { useState, useEffect } from 'react'

export default function App() {
  const [name, setName] = useState('sheep')

  useEffect(() => {
    setName(name.substring(0, 1).toUpperCase() + name.substring(1))
  }, [name])
  // 第一次執行一次, 之後 name (依賴) 更新也會執行

  return (
    <div>
      App - {name}
      <button
        onClick={() => {
          setName('hitsuji')
        }}
      >
        改名
      </button>
    </div>
  )
}
