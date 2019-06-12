import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import posed from 'react-pose';


import LangSelectScreen from './LangSelectScreen';
import styles from '../styles/components/NavHeader.module.scss';


const PoseWrap_AppHeader = posed.div({
  hidden: {
    x: '-100%'
  },
  shown: {
    x: '0%'
  }
});


export default class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeaderVisibility: 'hidden'
    };
  }

  componentDidMount() {
    console.log('NavHeader: componentDidMount() called!');
    this.headerTimeoutId = setTimeout(() => {
      this.setState(() => ({ appHeaderVisibility: 'shown' }));
    }, 1000);;
  }

  componentWillUnmount() {
    console.log('NavHeader: componentWillUnmount called!');
    clearTimeout(this.headerTimeoutId);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('NavHeader: componentDidUpdate called! Rerendered.');
  }



  render() {
    console.log('NavHeader: render() called!  Component rendering!');
    
    return (
      <PoseWrap_AppHeader pose={this.state.appHeaderVisibility}>
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
      </PoseWrap_AppHeader>
    );
  }
}
