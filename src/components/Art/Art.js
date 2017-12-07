// @flow

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import './Art.sass';

@inject('store') @observer
class Art extends Component {

  componentDidMount() {
    this.props.store.loadArtwork(this.props.match.params.artwork);
  }

  render() {
    console.log(this.props.store.art);
    return (
      <section className="single-artwork-container">
        {this._loadSingleArtwork()}
      </section>
    );
  }

  _loadSingleArtwork = () => {
    if (this.props.store.isLoading) {
      return (
        <div className="artwork-loading">
          <p>Loading Artwork...</p>
        </div>
      );
    } else {
      return (
      <div className="artwork-list art-single">
        <Link to="/" className="art-back-link">
          <svg width="13px" height="10px" viewBox="0 0 13 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon id="Shape" points="11.3964466 4.75 0 4.75 0 5.25 11.3964466 5.25 6.6464466 10 7.3535534 10 12.3535534 5 7.3535534 0 6.6464466 0" />
          </svg>
          <p>back</p>
        </Link>
        <div className="art art-odd">
          <picture className="art-image">
            <source srcSet={this.props.store.art.image} media="(min-width: 1850px)" />
            <source srcSet={this.props.store.art.imageLarge} media="(min-width: 550px)" />
            <img srcSet={this.props.store.art.imageMedium} alt={this.props.store.art.title.rendered} />
          </picture>
          <div className="art-info">
            <h1>{this.props.store.art.name} . {this.props.store.art.complementaryArtworkYear}</h1>
            <div className="art-info-container">
              <p>{this.props.store.art.about}</p>
              <div className="art-line"></div>
              <h4>{this.props.store.art.artMedium} on {this.props.store.art.artworkSurface}</h4>
              <h4>{this.props.store.art.dateCreated}  |  {this.props.store.art.width} x {this.props.store.art.height}</h4>
              <Link to="/" className="art-to-map-link" onClick={this._singleToMap.bind(this, this.props.store.art.artEdition, this.props.store.art.contributor, this.props.store.art.id)}>
                <svg width="13px" height="10px" viewBox="0 0 13 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <polygon id="Shape" points="11.3964466 4.75 0 4.75 0 5.25 11.3964466 5.25 6.6464466 10 7.3535534 10 12.3535534 5 7.3535534 0 6.6464466 0" />
                </svg>
                <p> view on map</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
  _singleToMap(longetude, latatude, city) {
    this.props.store.mapCenter = {lat: latatude, lng: longetude};
    this.props.store.currentArtwork = city;
    this.props.store.switchButton = false;
  }
}

export default Art;
