import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ErrorScreen extends Component {
  componentDidMount() {
    console.log('Mounted ErrorScreen component!');
  }
  componentWillUnmount() {
    console.log('Unmounting ErrorScreen component...');
  }
  render() {
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
