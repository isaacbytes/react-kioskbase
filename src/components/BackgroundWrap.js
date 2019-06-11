import React, { Component } from 'react';
import background from '../images/bg.jpg';

export default class BackgroundWrap extends Component {
  componentDidMount() {
    console.log('BackgroundWrap: componentDidMount() called!');
  }
  componentWillUnmount() {
    console.log('BackgroundWrap: componentWillUnmount() called!');
  }
  componentDidUpdate(prevProps) {
    console.log('BackgroundWrap: componentDidUpdate called! Rerendered.');
    console.log(prevProps);
  }
  render() {
    console.log('BackgroundWrap: render() called!  Component rendering!');
    const bgStyle = {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      height: '100vh'
    };

    return (
      <div style={bgStyle}>
        {/* We will render the children */}
        {/* -- this component only controls the bg image -- */}
        {this.props.children}
      </div>
    )
  }
}
