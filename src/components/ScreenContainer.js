import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavHeader from './NavHeader';
import PageWidgets from './PageWidgets';

import LangSelectScreen from './LangSelectScreen';
import ErrorScreen from './ErrorScreen';


class ScreenContainer extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Header */}
        <NavHeader />

        {/* Screen */}
          <Switch>
            <Route path="/lang" component={LangSelectScreen} />
            <Route component={ErrorScreen} />
          </Switch>

        {/* Footer */}
        <PageWidgets />
      </React.Fragment>    
    )
  }
}


export default ScreenContainer;