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
        <button className={this.props.store.navMenuButton ? 'nav-button nav-button-open' : 'nav-button'}
                onClick={this.props.store.toggleNavMenu}
                type='button'
                aria-label='Menu'
                aria-controls='navigation'
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div id="navigation" className={this.props.store.navMenuButton ? 'nav-menu nav-menu-open' : 'nav-menu' }>
          <div className="nav-links-cities-container">
            <Links />
            <Cities />
          </div>
          <div className="nav-switch-filter-container">
            <Switch />
            <Filter />
          </div>
          <Search />
        </div>
      </section>
    );
  }
}
