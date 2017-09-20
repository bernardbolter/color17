// @flow

import React from 'react';
import './Nav.sass';

import LetterA from '../../svgs/A.js'

export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <LetterA />
        <h1>Nav</h1>
      </div>
    );
  }
}
