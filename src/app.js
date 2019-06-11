import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';


import 'normalize.css';
import './styles/base.scss';
import BackgroundWrap from './components/BackgroundWrap';
import HomeScreen from './components/HomeScreen';
import ScreenContainer from './components/ScreenContainer';
import NavHeader from './components/NavHeader';



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





class App extends React.Component {
  componentDidMount() {
    console.log('Root App: componentDidMount() called!');
  }

  componentWillUnmount() {
    console.log('Root App: componentWillUnmount called!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Root App: componentDidUpdate called! Rerendered.');
    console.log('Root App: Previous props:');
    console.log(prevProps);

    console.log('Root App: New props:');
    console.log(this.props);
  }


  render () {
    console.log('Root App: render() called! Root App component rendering!');

    return (
      <BackgroundWrap>
        <PoseGroup pathname={this.props.location.pathname}>
          
          <RoutesContainer key="header">
            <Route path="/" component={NavHeader} key="header" />
          </RoutesContainer>
            
          <RoutesContainer key={this.props.location.pathname} >
            <Switch location={this.props.location}>
              <Route exact path="/" component={HomeScreen} key="welcome" />
              {/* Further routing handled inside ScreenContainer */}
              <Route path="/" component={ScreenContainer} key="screen-handler" />
            </Switch>
          </RoutesContainer>
        </PoseGroup>
      </BackgroundWrap>
    );
  }

}













// Routes
const NewApp = withRouter(App);

ReactDOM.render(<BrowserRouter><NewApp /></BrowserRouter>, document.getElementById('myApp'));