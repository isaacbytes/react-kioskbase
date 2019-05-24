import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import NavHeader from './NavHeader';
import PageWidgets from './PageWidgets';


export default class HomeScreen extends Component {
  render() {
    
    return (
      <div>
        <NavHeader />

        <div>Welcome to the Home Screen.</div>

        <PageWidgets />
      </div>
    )
  }
}
