import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';


export default class MainMenu extends Component {
  render() {
    return (
      <React.Fragment>
        
        <FormattedMessage
          id="MainMenu.header"
          defaultMessage="Hello hellow helloow"
          description="Main Menu header label"
        />

      </React.Fragment>
    )
  }
}
