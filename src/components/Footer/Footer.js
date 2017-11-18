// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './Footer.sass';

@inject('store') @observer
class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <h1>Footer</h1>
      </div>
    );
  }
}

export default Footer;
