import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';


import 'normalize.css';
import './styles/base.scss';
import BackgroundWrap from './components/BackgroundWrap';
import HomeScreen from './components/HomeScreen';
import ScreenContainer from './components/ScreenContainer';





class App extends React.Component {
  

  render () {

    return (      
      <BackgroundWrap>
        <Switch location={this.props.location}>
          <Route exact path="/" component={HomeScreen} key="welcome" />
          {/* Further routing handled inside ScreenContainer */}
          <Route path="/" component={ScreenContainer} key="screen-handler" />
        </Switch>
      </BackgroundWrap>
    );

  }

}






// Inject Router
const NewApp = withRouter(App);

ReactDOM.render(<BrowserRouter><NewApp /></BrowserRouter>, document.getElementById('myApp'));