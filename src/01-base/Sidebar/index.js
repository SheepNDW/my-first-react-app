import React from 'react'

export default function Sidebar(props) {
  const { bg, position } = props

  const obj1 = {
    left: 0
  }
  const obj2 = {
    right: 0
  }

  const obj = {
    background: bg,
    width: '200px',
    position: 'fixed'
  }

  const styleObj = position === 'left' ? { ...obj, ...obj1 } : { ...obj, ...obj2 }

  return (
    <div style={styleObj}>
      <ul>
        <li>111</li>
        <li>222</li>
        <li>333</li>
        <li>444</li>
        <li>555</li>
      </ul>
    </div>
  )
}

// Sidebar.defaultProps
// Sidebar.propTypes
