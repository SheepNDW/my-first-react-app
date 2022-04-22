const TabbarReducer = (
  prevState = {
    show: true
  },
  action
) => {
  let newState = { ...prevState }
  switch (action.type) {
    case 'show-tabbar':
      newState.show = true
      return newState

    case 'hide-tabbar':
      newState.show = false
      return newState

    default:
      return prevState
  }
}

export default TabbarReducer
