// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './Filter.sass';

@inject('store') @observer
class Filter extends Component {

  render() {
    return (
      <div className="filter">
        <p>sort by:</p>
        <div className='nav-radios nav-random'>
          <label htmlFor='random' className='sort-label check-random'>
            <span>random </span>
            <input type='checkbox' id='random' value='random' checked={this.props.store.randomChecked} onChange={this._toggleSorting} />
          </label>
        </div>

        <div className='nav-radios nav-older'>
          <label htmlFor='older' className='sort-label check-older'>
            <span>oldest </span>
            <input type='checkbox' id='older' value='older' checked={this.props.store.olderChecked} onChange={this._toggleSorting} />
          </label>
        </div>

        <div className='nav-radios nav-newer'>
          <label htmlFor='newer' className='sort-label check-newer'>
            <span>latest </span>
            <input type='checkbox' id='newer' value='newer' checked={this.props.store.newerChecked} onChange={this._toggleSorting} />
          </label>
        </div>
      </div>
    );
  }

  _toggleSorting = (e) => {
    switch (e.target.value) {
      case 'random':
      this.props.store.randomChecked = true;
      this.props.store.newerChecked = false;
      this.props.store.olderChecked = false;
      break;
    case 'newer':
      this.props.store.randomChecked = false;
      this.props.store.newerChecked = true;
      this.props.store.olderChecked = false;
      break;
    case 'older':
      this.props.store.randomChecked = false;
      this.props.store.newerChecked = false;
      this.props.store.olderChecked = true;
      break;
    default:
      this.props.store.randomChecked = true;
      this.props.store.newerChecked = false;
      this.props.store.olderChecked = false;
      break;
    }
  }
}

export default Filter;
