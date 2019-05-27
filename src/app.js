import React from 'react';
import ReactDOM from 'react-dom';
import posed, { PoseGroup } from 'react-pose';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import 'normalize.css';
import './styles/base.scss';
import BackgroundWrap from './components/BackgroundWrap.js'
import HomeScreen from './components/HomeScreen';
import ScreenContainer from './components/ScreenContainer';
import ErrorScreen from './components/ErrorScreen';

// Experimenting with Pose container
const RouteContainer = posed.div({
  enter: { 
    opacity: 1,
    delay: 300,
    beforeChildren: true
  },
  exit: {
    opacity: 0,
  }
});


const renderThis = ({location}) => {
  return (
    <BackgroundWrap>
      <PoseGroup>
        <RouteContainer key={location.key} style={{height: '100%'}}>
          <Switch location={location}>
            <Route exact path="/" component={HomeScreen} key="home" />

            {/* Further routing handled inside ScreenContainer */}
            <Route path="/" component={ScreenContainer} key="container" />
          </Switch>
        </RouteContainer>
      </PoseGroup>
    </BackgroundWrap>
  );
};

// Routes
const Router = () => (
  <Route render={renderThis} />
);



ReactDOM.render(<BrowserRouter><Router /></BrowserRouter>, document.getElementById('myApp'));