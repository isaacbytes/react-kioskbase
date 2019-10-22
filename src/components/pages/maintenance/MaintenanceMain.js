import React, { Component } from 'react';

import '../../../styles/pages/common.scss';
import '../../../styles/pages/MaintenanceMain.scss';

export default class MaintenanceMain extends Component {
  render() {
    return (
      <div className="page-container MaintenanceMain">
        <header className="page-title">Maintenance</header>
        
        <div className="depts-intro">
          <div className="depts-intro__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="depts-intro__pic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum.          
          </div>
        </div>

        <div className="depts">
          <header className="depts-preview-header">Departments Overview</header>
          <div className="depts-preview">
            <div className="depts-single">Department Name</div>
            <div className="depts-single">Department Name</div>
            <div className="depts-single">Department Name</div>
            <div className="depts-single">Department Name</div>
            <div className="depts-single">Department Name</div>
            <div className="depts-single">Department Name</div>
            <div className="depts-single">Department Name</div>
            <div className="depts-single">Department Name</div>
            <div className="depts-single">Department Name</div>
            <div className="depts-single">Department Name</div>
          </div>
        </div>

        <hr />

        <div className="join-us">
          <div className="join-us__header">
            Join Us!
          </div>

          <div className="join-us__desc">
            Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. 
            Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Pulvinar 
            sapien et ligula
          </div>
        </div>
      </div>
    )
  }
}
