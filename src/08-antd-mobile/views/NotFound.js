import React, { useEffect } from 'react'

function NotFound(props) {
  useEffect(() => {
    console.log(props)
  }, [props])
  return <div>404 NotFound</div>
}

function myConnect(cb, obj) {
  const value = cb()
  return (MyComponent) => {
    return (props) => {
      // console.log(props)
      return (
        <div style={{ color: 'red' }}>
          <MyComponent {...value} {...props} {...obj} />
        </div>
      )
    }
  }
}

export default myConnect(
  () => {
    return {
      a: 1,
      b: 2
    }
  },
  {
    aa() {},
    bb() {}
  }
)(NotFound)
