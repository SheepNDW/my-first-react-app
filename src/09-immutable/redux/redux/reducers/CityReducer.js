import { fromJS } from 'immutable'

const CityReducer = (
  prevState = {
    cityName: '台北'
  },
  action
) => {
  let newState = fromJS(prevState)
  switch (action.type) {
    case 'change-city':
      // newState.cityName = action.payload
      return newState.set('cityName', action.payload).toJS()

    default:
      return prevState
  }
}

export default CityReducer
