import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import "./i18n";
import axios from "axios";


axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <Suspense fallback={null}>
  <BrowserRouter >
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
)
