import React, { Component } from 'react';
import background from '../images/bg.jpg';

export default class BackgroundWrap extends Component {

  render() {
    const bgStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      // header height (from component style): 3.2em
      paddingTop: '4em'
    };

    return (
      <div style={bgStyle}>
        This is the BackgroundWrap component.

        {/* We will render the children */}
        {/* -- this component only controls the bg image -- */}
        {this.props.children}
      </div>
    )
  }
}
