// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './Links.sass';

@inject('store') @observer
class Links extends Component {

  render() {
    return (
      <div className="links">
        <a onClick={this.props.store.toggleAbout}>about</a>
        <a onClick={this.props.store.togglePrints}>prints</a>
        <p>b@acolorfulhistory.com</p>
      </div>
    );
  }
}

export default Links;
