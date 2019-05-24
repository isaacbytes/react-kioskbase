import React, { Component } from 'react';

import PageWidgetStyles from '../styles/components/PageWidgets.module.scss';

class PageWidgets extends Component {
  render() {
    return (
      <div className={PageWidgetStyles['page-widgets']}>
        Here we have the Widgets section.        
      </div>
    )
  }
}

export default PageWidgets;