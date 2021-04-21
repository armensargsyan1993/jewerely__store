import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Action } from 'redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThunkAction } from 'redux-thunk'
import { App } from './App'
import { persistor, store } from './redux/store'
import './index.scss'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter
        // basename="/index.html/"
        >
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)


export type RootState = ReturnType<typeof store.getState>

export type ThunkType<T extends Action> = ThunkAction<
Promise<void> | void,
RootState,
unknown,
T
>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();