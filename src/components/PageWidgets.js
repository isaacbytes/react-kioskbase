import React, { Component } from 'react';
import { FormattedTime } from 'react-intl';
import posed from 'react-pose';
import Animations from '../config/animations';


import PageWidgetStyles from '../styles/components/PageWidgets.module.scss';


const PoseWrap_AppFooter = posed.div(Animations.HeaderFooterConfig);


class PageWidgets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: 'hidden',
      time: new Date()
    };
  }

  componentDidMount() {
    console.log('PageWidgets: componentDidMount() called!');

    // visibility timer
    this.headerTimeoutId = setTimeout(() => {
      this.setState(() => ({ visibility: 'shown' }));
    }, 1000);

    // start footer clock
    this.timeClockId = setInterval(() => {
      this.setState(() => ({ time: new Date() }));
    }, 10000);
  }


  componentWillUnmount() {
    console.log('PageWidgets: componentWillUnmount called!');

    // clear visiblity timer
    clearTimeout(this.headerTimeoutId);

    // clear footer clock interval
    clearInterval(this.timeClockId);
  }

  componentDidUpdate() {
    console.log('PageWidgets: componentDidUpdate called! Rerendered.');
  }


  render() {
    console.log('PageWidgets: render() called!  Component rendering!');  
    return (
      <PoseWrap_AppFooter className={PageWidgetStyles['page-widgets']} pose={this.state.visibility}>
        <div className={PageWidgetStyles['footer__timeclock']}>
          <FormattedTime value={new Date()} />
        </div>        
      </PoseWrap_AppFooter>
    )
  }
}

export default PageWidgets;