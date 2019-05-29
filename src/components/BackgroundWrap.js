import React, { Component } from 'react';
import background from '../images/bg.jpg';

export default class BackgroundWrap extends Component {
  componentDidMount() {
    console.log('Mounted BackgroundWrap component!');
  }
  componentWillUnmount() {
    console.log('Unmounting BackgroundWrap component...');
  }
  render() {
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
