import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LangSelectScreen extends Component {
  componentDidMount() {
    console.log('LangSelectScreen: componentDidMount() called! Props:');
    console.log(this.props);
  }

  componentWillUnmount() {
    console.log('LangSelectScreen: componentWillUnmount called!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('LangSelectScreen: componentDidUpdate called! Rerendered.');
  }


  render() {
    console.log('LangSelectScreen: render() called!  Component rendering!');  
    return (
      <div>
        Hello, this is the LangSelectScreen Component.
        <Link to="/notalink">This is a nonfunctioning link</Link>
      </div>
    )
  }
}


export default LangSelectScreen;