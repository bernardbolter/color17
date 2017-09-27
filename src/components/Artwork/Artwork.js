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
          {this.props.store.artwork.slice().map( art => (
                <h2 key={art.id}>{art.title.rendered}</h2>
              ))
            }
      </div>
    );
  }
}

export default Artwork;
