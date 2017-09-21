// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './Artwork.sass';

@inject('store') @observer
class Artwork extends Component {
  componentDidMount() {
    this.props.store.loadArtwork();
    console.log(this.props.store.artwork);
  }

  render() {
    return (
      <div className="artwork">
        <h1>Artwork</h1>
      </div>
    );
  }
}

export default Artwork;
