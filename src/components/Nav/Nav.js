// @flow

import React from 'react';
import { observer, inject} from 'mobx-react';

import './Nav.sass';

import Letter from '../../svgs/Letters.js';
import {LETTERS} from '../../svgs/LettersPaths.js';

import SearchButton from './SearchButton';

@inject('store') @observer
export default class Nav extends React.Component {
  render() {
    return (
      <section className='nav'>
        <div className="nav-left">
          <div className='logo'>
            <Letter letter={LETTERS.A} width={28} height={24} viewBox='0 0 28 24' color='#A41E22' />
            <Letter letter={LETTERS.C} width={26} height={25} viewBox='0 0 26 25' color='#F09120' />
            <Letter letter={LETTERS.O} width={27} height={25} viewBox='0 0 27 25' color='#E1B324' />
            <Letter letter={LETTERS.L} width={14} height={24} viewBox='0 0 14 24' color='#869F66' />
            <Letter letter={LETTERS.O} width={26} height={25} viewBox='0 0 26 25' color='#4DA446' />
            <Letter letter={LETTERS.R} width={16} height={24} viewBox='0 0 16 24' color='#1D9F97' />
            <Letter letter={LETTERS.F} width={14} height={24} viewBox='0 0 14 24' color='#3482AD' />
            <Letter letter={LETTERS.U} width={16} height={25} viewBox='0 0 16 25' color='#3B5BA9' />
            <Letter letter={LETTERS.L} width={24} height={24} viewBox='0 0 24 24' color='#674D8C' />
            <Letter letter={LETTERS.H} width={16} height={24} viewBox='0 0 16 24' color='#393A3A' />
            <Letter letter={LETTERS.I} width={11} height={24} viewBox='0 0 11 24' color='#393A3A' />
            <Letter letter={LETTERS.S} width={12} height={25} viewBox='0 0 12 25' color='#393A3A' />
            <Letter letter={LETTERS.T} width={15} height={24} viewBox='0 0 15 24' color='#393A3A' />
            <Letter letter={LETTERS.O} width={26} height={25} viewBox='0 0 26 25' color='#393A3A' />
            <Letter letter={LETTERS.R} width={16} height={24} viewBox='0 0 16 24' color='#393A3A' />
            <Letter letter={LETTERS.Y} width={19} height={24} viewBox='0 0 19 24' color='#393A3A' />
          </div>

          <div className="nav-links">
            <a onClick={() => {this._aboutClick()} }>About</a>
            <a onClick={() => {this._printsClick()} }>Prints</a>
          </div>
          <div className='nav-search'>
            <a onClick={() => {this._searchClick()} }>
              <SearchButton />
            </a>

            <div className='nav-older'>
              <label htmlFor='older' className='sort-label check-older'>
                <span>older </span>
                <input type='checkbox' id='older' value='older' checked={this.props.store.olderChecked} onChange={this._toggleSorting} />
              </label>
            </div>

            <div className='nav-newer'>
              <label htmlFor='newer' className='sort-label check-newer'>
                <span>newer </span>
                <input type='checkbox' id='newer' value='newer' checked={this.props.store.newerChecked} onChange={this._toggleSorting} />
              </label>
            </div>

            <div className='nav-input'>
              <input className='filter' placeholder='search by title and year...' type='text' value={this.props.store.historyFilter} onChange={this._goFilter} />
            </div>
          </div>
          <p className='nav-contact'>b@acolorfulhistory.com</p>
        </div>

        <div className='nav-right'>
          <p className='nav-city'>San Francisco</p>
        </div>
      </section>
    );
  }

  _aboutClick = () => {
    this.props.store.toggleAbout = !this.props.store.toggleAbout;
    console.log(this.props.store.toggleAbout);
  }

  _printsClick = () => {
    this.props.store.togglePrints = !this.props.store.togglePrints;
    console.log(this.props.store.togglePrints);
  }

  _searchClick = () => {
    this.props.store.toggleSearch = !this.props.store.toggleSearch;
  }

  _toggleSorting = (e) => {
    switch (e.target.value) {
    case 'newer':
      this.props.store.newerChecked = true;
      this.props.store.olderChecked = false;
      console.log('newer');
      break;
    case 'older':
      this.props.store.newerChecked = false;
      this.props.store.olderChecked = true;
      console.log('older');
      break;
    default:
      this.props.store.newerChecked = true;
      this.props.store.olderChecked = false;
      break;
    }
  }

  _goFilter = (e) => {
  this.props.store.historyFilter = e.target.value;
  console.log('filter');
  }
}
