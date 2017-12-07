// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';

import './ArtworkList.sass';

@inject('store') @observer
class ArtworkList extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="artwork-list">
        {this.props.store.filteredArt.slice().map((art, i) => (
          <div className={this._evenOdd(i)} key={art.id}>
            <picture className="art-image">
              <source srcSet={art.image} media="(min-width: 1850px)" />
              <source srcSet={art.imageLarge} media="(min-width: 550px)" />
              <img srcSet={art.imageMedium} alt={art.title.rendered} />
            </picture>
            <div className="art-info">
              <h1>{art.name} . {art.complementaryArtworkYear}</h1>
              <div className="art-info-container">
                <p>{art.about}</p>
                <div className="art-line"></div>
                <h4>{art.artMedium} on {art.artworkSurface}</h4>
                <h4>{art.dateCreated}  |  {art.width} x {art.height}</h4>
                <a className="art-to-map-link" onClick={this._toMap.bind(this, art.artEdition, art.contributor, art.id, i)}>
                  <svg width="13px" height="10px" viewBox="0 0 13 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon id="Shape" points="11.3964466 4.75 0 4.75 0 5.25 11.3964466 5.25 6.6464466 10 7.3535534 10 12.3535534 5 7.3535534 0 6.6464466 0" />
                  </svg>
                  <p> view on map</p>
                </a>
              </div>
            </div>
          </div>
          ))
        }
      </div>
    );
  }

  _evenOdd = (i) => {
    if (i % 2 === 0) {
      return 'art art-odd';
    } else {
      return 'art art-even';
    }
  }

  _toMap(longetude, latatude, city, index) {
    this.props.store.mapCenter = {lat: latatude, lng: longetude};
    this.props.store.switchButton = false;
    this.props.store.currentArtwork = city;
    this.props.store.scrollDistance = index * 130;
  }
}

export default ArtworkList;
