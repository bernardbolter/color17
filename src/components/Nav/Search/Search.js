// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './Search.sass';

@inject('store') @observer
class Search extends Component {

  render() {
    return (
      <div className="search">
          <input className='search-filter' placeholder='search by title and year...' type='text' value={this.props.store.historyFilter} onChange={this._goFilter} />
      </div>
    );
  }

  _goFilter = (e) => {
  this.props.store.historyFilter = e.target.value;
  console.log('filter');
  }
}

export default Search;
