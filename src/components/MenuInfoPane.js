import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import '../styles/components/MainMenuScreen/MenuInfoPane.scss';





export default class MenuInfoPane extends Component {
  render() {
    return (
      <div className="MenuInfoPane">
        <div className="pane__venue-section start">
          <div className="welcometxt address">
            111 Main Avenue, Woodside, NY 11119
          </div>
        </div>



        <div className="pane__venue-section">
          <div className="pane__venue-title">
            <div className="pane__venue-title__jumbo">
              <FormattedMessage
                id="MenuInfoPane.headerLabelPrimary"
                defaultMessage="Venue Name"
                description="Side pane header primary"            
              />
            </div>

            <div className="pane__venue-title__mini">
              <FormattedMessage
                id="MenuInfoPane.headerLabelSecondary"
                defaultMessage="of Woodside"
                description="Side pane header secondary"
              />
            </div>          
          </div>
        </div>



        <div className="pane__venue-section end">
          <div className="label">
            Next event:
          </div>
          
          <div className="nextevent">
            Convention in English. Title: "Another C. Title"
          </div>
        </div>
        

      </div>
    )
  }
}
