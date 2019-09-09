import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import NavHeader from './NavHeader';
import PageWidgets from './PageWidgets';
import LangSelectScreen from './LangSelectScreen';
import MainMenuScreen from './MainMenuScreen';
import ErrorScreen from './ErrorScreen';
import posed, { PoseGroup } from 'react-pose';

const styles = {
  // header height offset: 3.2em (from component style)
  paddingTop: '4em'
};


const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 500,
    beforeChildren: true
  },
  exit: {
    opacity: 0
  }
});


const ScreenElemContainer = posed.div({
  onDisplay: {
    opacity: 1,
    delay: 500,
    beforeChildren: true
  },
  preDisplay: {
    opacity: 0
  }
});


// give the navbar access to ReactRouter History object
const EnhancedNavHeader = withRouter(NavHeader);


class ScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ScreenElemState: 'preDisplay'
    }
  }

  componentDidMount() {
    console.log('ScreenContainer: componentDidMount() called!');
    this.containerTimeoutID = setTimeout(() => {
      this.setState(() => ({ ScreenElemState: 'onDisplay' }))
    }, 1000);
  }

  componentWillUnmount() {
    console.log('ScreenContainer: componentWillUnmount called!');
    clearTimeout(this.containerTimeoutID);
  }

  componentDidUpdate() {
    console.log('ScreenContainer: componentDidUpdate called! Rerendered.');
  }


  render() {
    console.log('ScreenContainer: render() called!  Component rendering!');      

    return (
      <div className="screen-container">
        {/* Header */}
        <EnhancedNavHeader />

        {/* Screens */}
        <ScreenElemContainer style={styles} pose={this.state.ScreenElemState}>
          <PoseGroup>
            <RoutesContainer pose={this.state.ScreenElemState} key={this.props.location.pathname}>
              <Switch location={this.props.location}>
                <Route path="/lang" component={LangSelectScreen} />
                <Route path="/main-menu" component={MainMenuScreen} />
                <Route component={ErrorScreen} />
              </Switch>
            </RoutesContainer>
          </PoseGroup>
        </ScreenElemContainer>
            
        {/* Footer */}
        <PageWidgets />
      </div>    
    )
  }
}



export default ScreenContainer;