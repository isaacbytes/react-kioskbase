import React, { Component } from 'react'

import styles from '../styles/components/NavHeader.module.scss';

export default class NavHeader extends Component {
  render() {
    return (
      <div>
        This is the NavHeader component.
        <header className={styles.header}>
          <nav className={styles['header--nav']}>

            <div className={styles['header--nav__snapleft']}>
              <li>Home</li>
            </div>
            
            <div className={styles['header--nav__snapright']}>
              <li>Back</li>
            </div>

          </nav>
        </header>
      </div>
    )
  }
}
