// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './Art.sass';

@inject('store') @observer
class Art extends Component {

  render() {
    return (
      <div className="art">
        <h1>Art</h1>
      </div>
    );
  }
}

export default Art;
