import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

import '../styles/components/MainMenuScreen/MenuNav.scss';





export default class MenuNav extends Component {
  render() {
    return (
      <div className="MenuNav">
        <div className="pane__menu-label">Menu</div>

        <div className="pane__menu-toc">
          <div className="pane__menu-toc__sec">
            <div className="sec-label">About</div>
            <div className="sec-menu-items">
              <NavLink to="/history">
                <div className="sec-menu-item history">
                  <div className="sec-menu-item__icon">[ICO]</div>
                  <div className="sec-menu-item__name">History</div>
                  <div className="sec-menu-item__preview">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </NavLink>
            </div>
          </div>


          <div className="pane__menu-toc__sec">
            <div className="sec-label">Activities</div>
            <div className="sec-menu-items">
              <NavLink to="/education">
                <div className="sec-menu-item education">
                  <div className="sec-menu-item__icon">[ICO]</div>
                  <div className="sec-menu-item__name">Education</div>
                  <div className="sec-menu-item__preview">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt.
                  </div>
                </div>
              </NavLink>


              <NavLink to="/maintenance">
                <div className="sec-menu-item maintenance">
                  <div className="sec-menu-item__icon">[ICO]</div>
                  <div className="sec-menu-item__name">Maintenance</div>
                  <div className="sec-menu-item__preview">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed.
                  </div>
                </div>
              </NavLink>
            </div>                
          </div>


        </div>
      </div>
    )
  }
}
