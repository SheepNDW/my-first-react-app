import React from 'react'

export default function Login(props) {
  return (
    <div>
      <h2>登入頁面</h2>
      <input type="text" />
      <button
        onClick={() => {
          localStorage.setItem('token', '123')
          props.history.push('/center')
        }}
      >
        Login
      </button>
    </div>
  )
}
