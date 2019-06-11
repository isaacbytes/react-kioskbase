import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ErrorScreen extends Component {
  componentDidMount() {
    console.log('ErrorScreen: componentDidMount() called!');
  }
  componentWillUnmount() {
    console.log('ErrorScreen: componentWillUnmount() called!');
  }
  componentDidUpdate(prevProps) {
    console.log('ErrorScreen: componentDidUpdate called! Rerendered.');
    console.log(prevProps);
  }

  render() {
    console.log('ErrorScreen: render() called! ErrorScreen component rendering!');
    return (
      <div>
        This is the ErrorScreen component. <br/>
        <div>
          <Link to="/lang">Lang</Link> <br/>
          <Link to="/anotherError">Another Error Link</Link>
        </div>  
      </div>
    )
  }
}
