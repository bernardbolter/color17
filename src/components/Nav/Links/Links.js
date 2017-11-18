// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './Links.sass';

@inject('store') @observer
class Links extends Component {

  render() {
    return (
      <div className="links">
        <a onClick={this._clickAbout()}>about</a>
        <a onClick={this._clickPrints()}>prints</a>
        <p>b@acolorfulhistory.com</p>
      </div>
    );
  }

  _clickAbout = () => {
    console.log('open about');
  }

  _clickPrints = () => {
    console.log('open prints');
  }
}

export default Links;
