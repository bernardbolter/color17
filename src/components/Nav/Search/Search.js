// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './Search.sass';

@inject('store') @observer
class Search extends Component {

  render() {
    return (
      <div className="search">
          <div className="search-bar">
            <div className='search-glass'>
              <svg className="svg-glass" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0810294,13.8715917 C13.0090921,13.7996544 12.8859602,13.7952038 12.8052105,13.8617339 C12.8052105,13.8617339 12.6636504,13.9814759 12.5137058,14.0937992 C11.2071033,15.0725743 9.58434107,15.6523364 7.82616818,15.6523364 C3.50389484,15.6523364 0,12.1484415 0,7.82616818 C0,3.50389484 3.50389484,0 7.82616818,0 C12.1484415,0 15.6523364,3.50389484 15.6523364,7.82616818 C15.6523364,9.60254334 15.0605077,11.2406895 14.0632715,12.5541856 C13.9602207,12.6899174 13.8573619,12.8110331 13.8573619,12.8110331 C13.7932835,12.8882106 13.7970834,13.006521 13.8715917,13.0810294 L15.0788454,14.2882831 C15.1507828,14.3602204 15.2708622,14.3567745 15.3429237,14.284713 L15.4705566,14.1570801 C15.5444656,14.0831711 15.6609245,14.0797998 15.7333989,14.1522742 L19.9474586,18.3663339 C20.0187134,18.4375887 20.0164256,18.5554033 19.9470867,18.6247421 L18.6247421,19.9470867 C18.553282,20.0185469 18.4388083,20.019933 18.3663339,19.9474586 L14.1522742,15.7333989 C14.0810194,15.6621441 14.0850187,15.542618 14.1570801,15.4705566 L14.284713,15.3429237 C14.358622,15.2690147 14.3627915,15.1533538 14.2882831,15.0788454 L13.0810294,13.8715917 Z M7.82616818,14.5343123 C11.5309739,14.5343123 14.5343123,11.5309739 14.5343123,7.82616818 C14.5343123,4.12136246 11.5309739,1.11802403 7.82616818,1.11802403 C4.12136246,1.11802403 1.11802403,4.12136246 1.11802403,7.82616818 C1.11802403,11.5309739 4.12136246,14.5343123 7.82616818,14.5343123 Z" />
              </svg>
            </div>
            <input className='search-filter' placeholder='search by title and year...' type='text' value={this.props.store.historyFilter} onChange={this._goFilter} />
            <div onClick={this._clearFilter} className={this.props.store.closeFilterButton ? 'close-filter close-filter-on' : 'close-filter'}>
              <svg className="svg-close" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon id="Shape" points="13.8095238 5.52380952 10 9.33333333 6.19047619 5.52380952 5.52380952 6.19047619 9.33333333 10 5.52380952 13.8095238 6.19047619 14.4761905 10 10.6666667 13.8095238 14.4761905 14.4761905 13.8095238 10.6666667 10 14.4761905 6.19047619"></polygon>
                <path d="M10,0 C4.47619048,0 0,4.47619048 0,10 C0,15.5238095 4.47619048,20 10,20 C15.5238095,20 20,15.5238095 20,10 C20,4.47619048 15.5238095,0 10,0 Z M10,19.047619 C5,19.047619 0.952380952,15 0.952380952,10 C0.952380952,5 5,0.952380952 10,0.952380952 C15,0.952380952 19.047619,5 19.047619,10 C19.047619,15 15,19.047619 10,19.047619 Z" />
              </svg>
            </div>
          </div>
          <p id="search-message">{this._searchMessage()}</p>
      </div>
    );
  }

  _goFilter = (e) => {
  this.props.store.historyFilter = e.target.value;
  if (this.props.store.filteredArt.length === 0) {
    this.props.store.noArtwork = true;
    } else {
      this.props.store.noArtwork = false;
    }
  if (this.props.store.historyFilter !== '') {
    this.props.store.closeFilterButton = true;
    } else {
      this.props.store.closeFilterButton = false;
    }
  }

  _clearFilter = () => {
    this.props.store.historyFilter = '';
    this.props.store.closeFilterButton = false;
    this.props.store.noArtwork = false;
  }

  _searchMessage = () => {
    if (this.props.store.filteredArt.length === 0) {
      return `no results for your search of ${this.props.store.historyFilter}`;
    } else {
      return '';
    }
  }
}

export default Search;
