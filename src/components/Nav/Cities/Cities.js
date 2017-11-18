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
        <a onClick={this._openSF()}>San Francisco</a>
        <a onClick={this._openBerlin()}>Berlin</a>
      </div>
    );
  }

  _openSF = () => {
    console.log('open SF');
  }

  _openBerlin = () => {
    console.log('open Berlin');
  }
}

export default Cities;
