// @flow

import React from 'react';
import './Nav.sass';
import '../../variables.scss';

import Letter from '../../svgs/Letters.js';
import {LETTERS} from '../../svgs/LettersPaths.js';

export default class Nav extends React.Component {
  render() {
    return (
      <section className='nav'>
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
        <h1>Nav</h1>
      </section>
    );
  }
}
