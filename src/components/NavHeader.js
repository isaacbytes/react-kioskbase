import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

import LangSelectScreen from './LangSelectScreen';
import styles from '../styles/components/NavHeader.module.scss';

export default class NavHeader extends Component {
  componentDidMount() {
    console.log('NavHeader: componentDidMount() called!');
  }

  componentWillUnmount() {
    console.log('NavHeader: componentWillUnmount called!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('NavHeader: componentDidUpdate called! Rerendered.');
  }


  render() {
    console.log('NavHeader: render() called!  Component rendering!');  
    return (
      <div>
        <header className={styles.header}>
          <nav className={styles['header--nav']}>

            <div className={styles['header--nav__snapleft']}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/lang">Language</NavLink></li>
            </div>
            
            <div className={styles['header--nav__snapright']}>
              <li><NavLink to="/" >Back</NavLink></li>
            </div>

          </nav>
        </header>
      </div>
    )
  }
}
