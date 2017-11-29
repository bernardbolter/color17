// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';
import _ from 'lodash';

import Art from './../Art/Art.js';
import ArtworkMap from './../ArtworkMap/ArtworkMap';

import './Artwork.sass';

@inject('store') @observer
class Artwork extends Component {
  componentDidMount() {
    this.props.store.loadArtwork();
  }

  render() {
    return (
      <section className={this._artworkClasses()} >
        {this._loadGallery()}
      </section>
    );
  }

  _loadGallery = () => {
    if (this.props.store.isLoading) {
      return (
        <div className="artwork-loading">
          <p>Loading Artwork...</p>
        </div>
      );
    } else if (_.isEmpty(this.props.store.filteredArt)) {
        return (
          <div className="no-artwork">
            <h3>No Artwork</h3>
          </div>
        );
    } else if (this.props.store.switchButton === true) {
        return (
          <div className="artwork-list">
            {this.props.store.filteredArt.slice().map( art => (
                <Art key={art.id} {...art} />
              ))
            }
          </div>
        );
    } else if (this.props.store.switchButton === false) {
      return (
        <ArtworkMap />
      );
    } else {
      return (
        <div className="no-artwork">
          <h3>There was an error loading the Art, please try again later</h3>
        </div>
      )
    }
  }

  _artworkClasses = () => {
    if (this.props.store.noArtwork && this.props.store.navMenuButton) {
      return 'artwork artwork-red artwork-drop';
    } else if (this.props.store.noArtwork && !this.props.store.navMenuButton) {
      return 'artwork artwork-red';
    } else if (!this.props.store.noArtwork && this.props.store.navMenuButton) {
      return 'artwork artwork-drop';
    } else {
      return 'artwork';
    }
  }
}

export default Artwork;
