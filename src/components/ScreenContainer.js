import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavHeader from './NavHeader';
import PageWidgets from './PageWidgets';
import LangSelectScreen from './LangSelectScreen';
import ErrorScreen from './ErrorScreen';
import posed, { PoseGroup } from 'react-pose';

const styles = {
  // header height offset: 3.2em (from component style)
  paddingTop: '4em'
};


const RouteContainer = posed.div({
  enter: {
    x: 0,
    opacity: 1
  },
  exit: {
    x: 50,
    opacity: 0
  }
});


class ScreenContainer extends Component {
  componentDidMount() {
    console.log('Mounting ScreenContainer component!');
  }
  componentWillUnmount() {
    console.log('Unmounting ScreenContainer component!');
  }

  render() {
    return (
      <div className="screen-container" style={styles}>
        {/* Header */}
        <NavHeader />

        <PoseGroup>
          {/* Screen */}
          <RouteContainer key={this.props.location.key}>
            <Switch>
              <Route path="/lang" render={() => <LangSelectScreen />} />
              <Route render={() => <ErrorScreen />} />
            </Switch>
          </RouteContainer>        
        </PoseGroup>

        {/* Footer */}
        <PageWidgets />
      </div>    
    )
  }
}


export default ScreenContainer;