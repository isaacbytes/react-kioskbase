import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';


import styles from '../styles/components/HomeScreen.module.scss';

export default class HomeScreen extends Component {
  componentDidMount() {
    console.log('HomeScreen: componentDidMount() called!');
  }

  componentWillUnmount() {
    console.log('HomeScreen: componentWillUnmount called!');
  }

  componentDidUpdate() {
    console.log('HomeScreen: componentDidUpdate called! Rerendered.');
  }


  render() {
    console.log('HomeScreen: render() called!  Component rendering!');  
    return (
      <div className={styles['welcome-container']}>

        <div>
          <FormattedMessage
            id="HomeScreen.welcome_text"
            defaultMessage="Hello intl!"
            description="Greet the user"
          />
        </div>
        <div>
          <Link to="/lang">Click to continue</Link>
        </div>        

      </div>
    )
  }
}
