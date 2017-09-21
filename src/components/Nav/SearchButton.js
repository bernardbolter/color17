import React from 'react';
import { observer, inject} from 'mobx-react';

@inject('store') @observer
export default class SearchButton extends React.Component {

  render() {
    const { searchButton } = this.props.store;
    return (
      <svg className={searchButton ? 'search-svg search-svg-on' : 'search-svg'} id="search-svg" height="50px" width="50px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <line id="search-svg-left-line" x1={18} y1={18} x2={32} y2={32} />
        <line id="search-svg-right-line" x1={32} y1={18} x2={18} y2={32} />
        <circle id="search-svg-circle" cx="25" cy="25" r="15" fill="transparent" />
      </svg>
    );
  }
}
