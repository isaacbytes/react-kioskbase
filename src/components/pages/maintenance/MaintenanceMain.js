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
            Magna fermentum iaculis eu non diam phasellus vestibulum lorem. 
            Etiam non quam lacus suspendisse faucibus interdum. Urna neque viverra 
            justo nec ultrices dui sapien eget. Habitant morbi tristique senectus et netus et. 
            Lobortis elementum nibh tellus molestie nunc non. Nunc vel risus commodo viverra maecenas 
            accumsan. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. 
            Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Pulvinar 
            sapien et ligula ullamcorper malesuada proin libero nunc. Arcu odio ut sem 
            nulla pharetra diam sit amet. Felis eget velit aliquet sagittis id consectetur 
            purus.
          </div>

          <div className="depts-intro__pic">
            [INSERT PICTURE]
          </div>
        </div>


        <div className="depts-preview">
            [INSERT DEPTS PREVIEW]
        </div>


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
