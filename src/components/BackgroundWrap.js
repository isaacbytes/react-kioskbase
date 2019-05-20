import React, { Component } from 'react'

export default class BackgroundWrap extends Component {
  render() {
    return (
      <div>
        This is the BackgroundWrap component.

        {/* We will render the children */}
        {/* -- this component only controls the bg image -- */}
        {this.props.children}
      </div>
    )
  }
}
