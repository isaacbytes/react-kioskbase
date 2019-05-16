import React, { Component } from 'react'

export default class NavHeader extends Component {
  render() {
    return (
      <div>
        This is the NavHeader component.
        <header>
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
