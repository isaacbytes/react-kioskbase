import React, { Component } from 'react';

import PageWidgetStyles from '../styles/components/PageWidgets.module.scss';

class PageWidgets extends Component {
  componentDidMount() {
    console.log('PageWidgets: componentDidMount() called!');
  }

  componentWillUnmount() {
    console.log('PageWidgets: componentWillUnmount called!');
  }

  componentDidUpdate() {
    console.log('PageWidgets: componentDidUpdate called! Rerendered.');
  }


  render() {
    console.log('PageWidgets: render() called!  Component rendering!');  
    return (
      <div className={PageWidgetStyles['page-widgets']}>
        Here we have the Widgets section.        
      </div>
    )
  }
}

export default PageWidgets;