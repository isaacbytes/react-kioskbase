import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import styles from '../styles/components/HomeScreen.module.scss';

export default class HomeScreen extends Component {
  render() {
    
    return (
      <div className={styles['welcome-container']}>

        <div>Welcome to the Home Screen.</div>
        <div>
          <Link to="/lang">Click to continue</Link>
        </div>        

      </div>
    )
  }
}
