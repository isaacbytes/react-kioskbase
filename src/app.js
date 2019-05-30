import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';


import 'normalize.css';
import './styles/base.scss';
import BackgroundWrap from './components/BackgroundWrap';
import HomeScreen from './components/HomeScreen';
import ScreenContainer from './components/ScreenContainer';


const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 1000,
    beforeChildren: true
  },
  exit: {
    opacity: 0
  }
});



const App = withRouter(({location}) => {
  console.log('route change detected at root level');
  console.log(location);

  return (
    <BackgroundWrap>
      <PoseGroup>
        <RoutesContainer key={location.pathname}>
          <Switch location={location}>
            <Route exact path="/" component={HomeScreen} />
            {/* Further routing handled inside ScreenContainer */}
            <Route path="/" component={ScreenContainer} />
          </Switch>
        </RoutesContainer>
      </PoseGroup>
    </BackgroundWrap>
  );
});



// Routes
const Router = () => (
  <Route component={App} />
);


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('myApp'));