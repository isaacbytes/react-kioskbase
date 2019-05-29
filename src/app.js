import React from 'react';
import ReactDOM from 'react-dom';
import posed, { PoseGroup } from 'react-pose';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Link} from 'react-router-dom';

import 'normalize.css';
import './styles/base.scss';
import BackgroundWrap from './components/BackgroundWrap';
import HomeScreen from './components/HomeScreen';
import ScreenContainer from './components/ScreenContainer';









const renderThis = ({location}) => {
  console.log('here is the location object');
  console.log(location);
  return (
    <BackgroundWrap>
      <Switch>
        <Route exact path="/" component={HomeScreen} />

        {/* Further routing handled inside ScreenContainer */}
        <Route path="/" component={ScreenContainer} />
        
      </Switch>
    </BackgroundWrap>
  );
};

// Routes
const Router = () => (
  <Route render={renderThis} />
);



ReactDOM.render(<BrowserRouter><Router /></BrowserRouter>, document.getElementById('myApp'));