import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import 'normalize.css';
import './styles/base.scss';
import HomeScreen from './components/HomeScreen';
import ErrorScreen from './components/ErrorScreen';


// Routes
const Router = (
  <Switch>
    <Route exact path="/" component={HomeScreen} />
    <Route component={ErrorScreen} />
  </Switch>
);

ReactDOM.render(<BrowserRouter>{ Router }</BrowserRouter>, document.getElementById('myApp'));