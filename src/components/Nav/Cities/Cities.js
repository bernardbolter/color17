// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './Cities.sass';

@inject('store') @observer
class Cities extends Component {

  render() {
    return (
      <div className="cities">
        <p>choose a city:</p>
          <div className='check-cities'>
            <label htmlFor='sf' className='check-sf'>
              <span>San Francisco </span>
              <input type='checkbox' id='sf' value='sf' checked={this.props.store.sanFranciscoChecked} onChange={this._toggleSF} />
            </label>
          </div>
          <div className='check-cities'>
            <label htmlFor='berlin' className='check-berlin'>
              <span>Berlin </span>
              <input type='checkbox' id='berlin' value='berlin' checked={this.props.store.berlinChecked} onChange={this._toggleBerlin} />
            </label>
          </div>
      </div>
    );
  }

  _toggleSF = () => {
    this.props.store.sanFranciscoChecked = !this.props.store.sanFranciscoChecked;
  }

  _toggleBerlin = () => {
    this.props.store.berlinChecked = !this.props.store.berlinChecked;
  }
}

export default Cities;
