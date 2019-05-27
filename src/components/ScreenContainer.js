import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavHeader from './NavHeader';
import PageWidgets from './PageWidgets';
import LangSelectScreen from './LangSelectScreen';
import ErrorScreen from './ErrorScreen';

const styles = {
  // header height offset: 3.2em (from component style)
  paddingTop: '4em'
};


class ScreenContainer extends Component {
  render() {
    return (
      <div className="screen-container" style={styles}>
        {/* Header */}
        <NavHeader />

        {/* Screen */}
          <Switch>
            <Route path="/lang" component={LangSelectScreen} />
            <Route component={ErrorScreen} />
          </Switch>

        {/* Footer */}
        <PageWidgets />
      </div>    
    )
  }
}


export default ScreenContainer;