import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import MenuNav from './MenuNav';
import MenuInfoPane from './MenuInfoPane';


export default class MainMenu extends Component {
  render() {
    return (
      <React.Fragment>
        
        <FormattedMessage
          id="MainMenu.header"
          defaultMessage="Hello hellow helloow"
          description="Main Menu header label"
        />

        <MenuNav />
        <MenuInfoPane />


      </React.Fragment>
    )
  }
}
