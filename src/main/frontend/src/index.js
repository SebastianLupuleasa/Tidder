import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import HeaderLogReg from './components/HeaderLogReg';
import Trending from './components/Trending';
import Feed from './components/Feed';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Route exact path = '/'>
          <Header />
          <Trending />
          <Feed />
        </Route>  
      </div>
      <div>
        <Route exact path = "/login">
          <Login />
          <HeaderLogReg />
        </Route>
      </div>
      <div>
        <Route exact path = "/register">
          <Register />
          <HeaderLogReg />
        </Route>
      </div>
      <div>
        <Route exact path = "/question">
         <Header />    
        </Route>
      </div>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();