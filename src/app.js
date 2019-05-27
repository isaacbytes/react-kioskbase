import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import 'normalize.css';
import './styles/base.scss';
import BackgroundWrap from './components/BackgroundWrap.js'
import HomeScreen from './components/HomeScreen';
import ScreenContainer from './components/ScreenContainer';
import ErrorScreen from './components/ErrorScreen';


// Routes
const Router = (
  <BackgroundWrap>
    <Switch>
      <Route exact path="/" component={HomeScreen} />

      {/* Further routing handled inside ScreenContainer */}
      <Route path="/" component={ScreenContainer} />
    </Switch>
  </BackgroundWrap>
);

ReactDOM.render(<BrowserRouter>{ Router }</BrowserRouter>, document.getElementById('myApp'));