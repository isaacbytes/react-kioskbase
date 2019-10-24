import React, { Component } from 'react';

import MenuNav from './MenuNav';
import MenuInfoPane from './MenuInfoPane';
import '../styles/components/MainMenuScreen/MainMenuScreen.scss';


export default class MainMenu extends Component {
  render() {
    return (
      <div className="MainMenu">
        <MenuNav />
        <MenuInfoPane />
      </div>
    )
  }
}
