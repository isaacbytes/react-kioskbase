import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/LangSelectScreen.scss';


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
        <div className="page-instructions page-instructions--lang-select">
          Please select your language below.
        </div>

        <div className="lang-select-tiles">
          <Link to="/main-menu">
            <div className="lang-select-tile">
              <span className="language">English</span>
            </div>
          </Link>

          <Link to="/main-menu">
            <div className="lang-select-tile">
              <span className="language">Spanish</span>
            </div>
          </Link>

          <Link to="/main-menu">
            <div className="lang-select-tile">
              <span className="language">Polish</span>
            </div>
          </Link>

          <Link to="/main-menu">
            <div className="lang-select-tile">
            <span className="language">Korean</span>
            </div>
          </Link>
        </div>


      </div>
    )
  }
}


export default LangSelectScreen;