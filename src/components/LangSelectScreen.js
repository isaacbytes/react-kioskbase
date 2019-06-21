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
        <div className="lang-select-instructions">
          Please select your language below.
        </div>

        <div className="lang-select-tiles">
          <Link to="/home-en">
            <div className="lang-select-tiles--single">
              <span className="language">English</span>
            </div>
          </Link>

          <Link to="/home-es">
            <div className="lang-select-tiles--single">
              <span className="language">Spanish</span>
            </div>
          </Link>

          <Link to="/home-pl">
            <div className="lang-select-tiles--single">
              <span className="language">Polish</span>
            </div>
          </Link>

          <Link to="/home-ko">
            <div className="lang-select-tiles--single">
            <span className="language">Korean</span>
            </div>
          </Link>
        </div>


      </div>
    )
  }
}


export default LangSelectScreen;