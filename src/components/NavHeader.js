import React, { Component } from 'react'

import styles from '../styles/components/NavHeader.module.scss';

export default class NavHeader extends Component {
  render() {
    return (
      <div>
        This is the NavHeader component.
        <header className={styles.navHeader}>
          <nav>
            <ul>
              <li>Home</li>
              <li>Back</li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}
