import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import 'normalize.css';
import './styles/base.scss';
import HomeScreen from './components/HomeScreen';


// Routes
const Router = (
  <Switch>
    <Route path="/" component={HomeScreen} exact />
  </Switch>
);

ReactDOM.render(<BrowserRouter>{ Router }</BrowserRouter>, document.getElementById('myApp'));