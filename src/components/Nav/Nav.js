// @flow

import React from 'react';
import { observer, inject} from 'mobx-react';

import './Nav.sass';

import Links from './Links/Links';
import Switch from './Switch/Switch';
import Cities from './Cities/Cities';
import Filter from './Filter/Filter';
import Search from './Search/Search';

@inject('store') @observer
export default class Nav extends React.Component {
  render() {
    return (
      <section className="nav">
        <div className="nav-button">
          <a onClick={this._clickNav()}>
            <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <line id="nav-line-1" x1={1} y1={1} x2={20} y2={1} />
              <line id="nav-line-2" x1={1} y1={6} x2={15} y2={6} />
              <line id="nav-line-3" x1={1} y1={13} x2={20} y2={13} />
              <line id="nav-line-4" x1={1} y1={20} x2={15} y2={20} />
            </svg>
          </a>
        </div>
        <div className="nav-menu">
          <Links />
          <Switch />
          <Cities />
          <Filter />
          <Search />
        </div>
      </section>
    );
  }

  _clickNav = () => {
    console.log('navClicked')
  }
}
