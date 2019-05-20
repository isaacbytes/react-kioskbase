import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import 'normalize.css';
import './styles/base.scss';
import BackgroundWrap from './components/BackgroundWrap.js'
import HomeScreen from './components/HomeScreen';
import ErrorScreen from './components/ErrorScreen';


// Routes
const Router = (
  <BackgroundWrap>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route component={ErrorScreen} />
    </Switch>
  </BackgroundWrap>
);

ReactDOM.render(<BrowserRouter>{ Router }</BrowserRouter>, document.getElementById('myApp'));