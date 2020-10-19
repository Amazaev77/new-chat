import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { store } from "./redux";
import "./index.css";
import 'normalize.css';


ReactDOM.render(
    <Provider store={store}>
      <App />  
    </Provider>,
  document.getElementById('root')
);