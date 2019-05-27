import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import 'normalize.css';
import './styles/base.scss';
import BackgroundWrap from './components/BackgroundWrap.js'
import HomeScreen from './components/HomeScreen';
import LangSelectScreen from './components/LangSelectScreen';
import ErrorScreen from './components/ErrorScreen';


// Routes
const Router = (
  <BackgroundWrap>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/lang" component={LangSelectScreen} />
      <Route component={ErrorScreen} />
    </Switch>
  </BackgroundWrap>
);

ReactDOM.render(<BrowserRouter>{ Router }</BrowserRouter>, document.getElementById('myApp'));