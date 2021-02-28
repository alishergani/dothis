import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/index.css';
import TaskList from "./components/TaskList";
import store from "./store/index";
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <TaskList />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
