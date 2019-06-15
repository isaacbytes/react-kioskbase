import React, { Component } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import {NavLink} from 'react-router-dom';
import posed from 'react-pose';
import Animations from '../config/animations';


import LangSelectScreen from './LangSelectScreen';
import styles from '../styles/components/NavHeader.module.scss';


const PoseWrap_AppHeader = posed.div(Animations.HeaderFooterConfig);


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
    }, 1000);
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

            <div className={styles['header--nav__snap-left']}>
              <li><NavLink to="/"><MaterialIcon icon="dashboard" /></NavLink></li>
              <li><NavLink to="/lang">Language</NavLink></li>
            </div>
            
            <div className={styles['header--nav__snap-right']}>
              <li><NavLink to="/" >Back</NavLink></li>
            </div>

          </nav>
        </header>
      </PoseWrap_AppHeader>
    );
  }
}
