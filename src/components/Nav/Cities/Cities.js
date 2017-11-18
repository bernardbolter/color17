// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './Cities.sass';

@inject('store') @observer
class Cities extends Component {

  render() {
    return (
      <div className="links">
        <p>choose a city:</p>
        <a onClick={this.props.store.toggleSF} className={this.props.store.sanFranciscoButton ? 'link-sf link-sf-open' : 'link-sf'}>San Francisco</a>
        <a onClick={this.props.store.toggleBerlin} className={this.props.store.toggleBerlin ? 'link-berlin link-berlin-open' : 'link-berlin'}>Berlin</a>
      </div>
    );
  }
}

export default Cities;
