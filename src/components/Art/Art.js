// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './Art.sass';

@inject('store') @observer
class Art extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="art">
        <h1>Artwork</h1>
      </div>
    );
  }
}

export default Art;
