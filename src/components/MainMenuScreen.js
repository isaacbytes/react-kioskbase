import React, { Component } from 'react';

import MenuNav from './MenuNav';
import MenuInfoPane from './MenuInfoPane';


export default class MainMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <MenuNav />
        <MenuInfoPane />
      </React.Fragment>
    )
  }
}
