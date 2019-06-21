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

    this.goBack = this.goBack.bind(this);
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

  goBack() {
    this.props.history.goBack();
  }



  render() {
    console.log('NavHeader: render() called!  Component rendering!');

    return (
      <PoseWrap_AppHeader pose={this.state.appHeaderVisibility}>
        <header className={styles.header}>
          <nav className={styles['header--nav']}>



            {/* LEFT SECTION */}
            <div className={styles['header--nav__snap-left']}>          
              
              <a onClick={this.goBack}>                
                <li>
                  <MaterialIcon icon="keyboard_backspace" size={30} invert />
                </li>
              </a>

              <NavLink to="/">
                <li>
                  <MaterialIcon icon="home" size={30} invert />
                </li>
              </NavLink>
              
            </div>
            




            {/* RIGHT SECTION  */}
            <div className={styles['header--nav__snap-right']}>

              <NavLink to="/lang">
                <li>
                  <MaterialIcon icon="g_translate" size={30} invert />
                </li>       
              </NavLink>       

            </div>

          </nav>
        </header>
      </PoseWrap_AppHeader>
    );
  }
}
