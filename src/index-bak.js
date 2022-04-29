import React from 'react'
import ReactDOM from 'react-dom'

// import 'antd/dist/antd.css' // PC 的樣式

import App from './08-antd-mobile/App'
import { Provider } from 'react-redux'
import { store, persistor } from './06-react-redux/redux/store'

import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
)
