// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './Art.sass';

@inject('store') @observer
class Art extends Component {

  render() {
    return (
      <div className="art">
        <img src={this.props.imageMedium} alt={this.props.title.rendered} />
        <h1>{this.props.title.rendered}</h1>
      </div>
    );
  }
}

export default Art;
