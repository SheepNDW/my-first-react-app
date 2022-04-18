import React, { useState } from 'react'

export default function App() {
  const [name, setName] = useState('Sheep')
  const [age, setAge] = useState(100)

  return (
    <div>
      <button
        onClick={() => {
          setName('Hitsuji')
          setAge(10)
        }}
      >
        click
      </button>
      App - {name} - {age}
    </div>
  )
}
