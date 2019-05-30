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


class ScreenContainer extends Component {
  componentDidMount() {
    console.log('Mounted ScreenContainer component!');
  }
  componentWillUnmount() {
    console.log('Unmounting ScreenContainer component...');
  }


  render() {

    console.log(this.props.location)


    return (
      <div className="screen-container" style={styles}>
        {/* Header */}
        <NavHeader />

        <PoseGroup>
          <RoutesContainer key={this.props.location.pathname}>
            <Switch location={this.props.location}>
              <Route path="/lang" component={LangSelectScreen} />
              <Route component={ErrorScreen} />
            </Switch>
          </RoutesContainer>
        </PoseGroup>
            
        {/* Footer */}
        <PageWidgets />
      </div>    
    )
  }
}


export default ScreenContainer;