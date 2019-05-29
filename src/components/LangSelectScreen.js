import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LangSelectScreen extends Component {
  componentDidMount() {
    console.log('Mounted LangSelectScreen component!');
  }
  componentWillUnmount() {
    console.log('Unmounting LangSelectScreen component...');
  }

  render() {
    return (
      <div>
        Hello, this is the LangSelectScreen Component.
        <Link to="/notalink">This is a nonfunctioning link</Link>
      </div>
    )
  }
}


export default LangSelectScreen;