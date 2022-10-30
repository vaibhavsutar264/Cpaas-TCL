import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import store from './store'
import store,{persistedStore} from './store'
import App from './App'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import "./i18n";
import axios from "axios";
import {PersistGate} from "redux-persist/integration/react"


axios.defaults.baseURL = "http://localhost:4000/";
// axios.defaults.withCredentials = true;

ReactDOM.render(
  <Suspense fallback={null}>
  <BrowserRouter >
  <Provider store={store}>
  <PersistGate persistor={persistedStore}>
    <App />
  </PersistGate>
  </Provider>
  </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
)
