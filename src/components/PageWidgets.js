import React, { Component } from 'react';
import posed from 'react-pose';
import Animations from '../config/animations';


import PageWidgetStyles from '../styles/components/PageWidgets.module.scss';


const PoseWrap_AppFooter = posed.div(Animations.HeaderFooterConfig);


class PageWidgets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: 'hidden'
    };
  }

  componentDidMount() {
    console.log('PageWidgets: componentDidMount() called!');
    this.headerTimeoutId = setTimeout(() => {
      this.setState(() => ({ visibility: 'shown' }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('PageWidgets: componentWillUnmount called!');
    clearTimeout(this.headerTimeoutId);
  }

  componentDidUpdate() {
    console.log('PageWidgets: componentDidUpdate called! Rerendered.');
  }


  render() {
    console.log('PageWidgets: render() called!  Component rendering!');  
    return (
      <PoseWrap_AppFooter className={PageWidgetStyles['page-widgets']} pose={this.state.visibility}>
        Here we have the Widgets section.        
      </PoseWrap_AppFooter>
    )
  }
}

export default PageWidgets;