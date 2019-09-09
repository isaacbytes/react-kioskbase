import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';






export default class MenuInfoPane extends Component {
  render() {
    return (
      <div className="MenuInfoPane">

        <div className="pane__venue-title">
          <div className="pane__venue-title__jumbo">
            <FormattedMessage
              id="MenuInfoPane.headerLabelPrimary"
              defaultMessage="Venue Name Primary"
              description="Side pane header primary"            
            />
          </div>

          <div className="pane__venue-title__mini">
            <FormattedMessage
              id="MenuInfoPane.headerLabelSecondary"
              defaultMessage="Venue Name Secondary"
              description="Side pane header secondary"
            />
          </div>          
        </div>

        <div className="pane__venue-section location">
          111 Main Street
          Sunnyside, NY 11104
        </div>


        <div className="pane__venue-section nextevent">
          Next event: English Event, NY
        </div>
        

      </div>
    )
  }
}
