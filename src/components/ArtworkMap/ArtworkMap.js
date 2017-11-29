// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';
import { Link } from 'react-router-dom';

import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

import './ArtworkMap.sass';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYmVtYWpvciIsImEiOiJjamFpamZpZnMxdmxpMnFsZGR3NGp0eTkwIn0.1UOGppfTHCtl0yA5lgrqKw"
});



@inject('store') @observer
class ArtworkMap extends Component {

  componentDidMount() {
    this.props.store.mapListWidth = this.refs.artworkListDiv.scrollWidth;
  }

  componentDidUpdate() {
    this.props.store.mapListWidth = this.refs.artworkListDiv.scrollWidth;
  }

  render() {
    return (
      <div className="artwork-map-container">
        <div className="artwork-map">
          <Map style="mapbox://styles/mapbox/light-v9/"
               containerStyle={{ width: '100vw', height: '100vh'}}
               center={this.props.store.mapCenter}
               zoom={[14]}
          >
            {this.props.store.filteredArt.slice().map((art, i) => (
              <Marker
                key={art.id}
                coordinates={{lng: art.artEdition, lat: art.contributor}}
                anchor="bottom">
                <a className="map-pointer" onClick={this._mapArtLink.bind(this, art.id, i)}>
                  <svg width="15px" height="32px" viewBox="0 0 15 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.9375,29.6911084 L5.9375,15.7783915 C5.9375,15.2592177 5.53352844,14.7234762 5.03520419,14.5834286 L5.00415,14.5747012 C2.08900144,13.5462828 0,10.7670976 0,7.5 C0,3.35786437 3.35786437,0 7.5,0 C11.6421356,0 15,3.35786437 15,7.5 C15,10.7660227 12.9123728,13.5444541 9.99872687,14.5736856 L9.96757694,14.5824468 C9.46497787,14.723807 9.0625,15.2584794 9.0625,15.7783915 L9.0625,29.6911084 C9.0625,30.5447542 8.36294494,31.25 7.5,31.25 C6.63103881,31.25 5.9375,30.5520605 5.9375,29.6911084 Z M12.5988609,5.12277225 C11.2859542,2.30723494 7.93918919,1.08911206 5.12365188,2.40201869 C4.81081438,2.54789719 4.67546738,2.91976 4.82134588,3.2325975 C4.96722444,3.54543494 5.33908719,3.68078194 5.65192469,3.53490344 C7.84178706,2.51375381 10.4448266,3.46118275 11.4659761,5.65104513 C11.6118547,5.96388256 11.9837174,6.09922956 12.2965549,5.95335106 C12.6093924,5.80747256 12.7447394,5.43560975 12.5988609,5.12277225 Z" />
                  </svg>
                </a>
              </Marker>
              ))
            }
          </Map>
        </div>
        <div ref="artworkListDiv" className="artwork-map-list">
          {this.props.store.filteredArt.slice().map((artwork, i) => (
              <div className={this._focusArtwork(artwork.id)} key={artwork.id}>
                <a className="artwork-location-container" onClick={this._findArtOnMap.bind(this, artwork.artEdition, artwork.contributor, artwork.id)}>
                  <svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="0 5.92005556 13 0 7.0681 12.9881556 7.0681 5.92005556"></polygon>
                  </svg>
                  <p className="map-list-locate-text">locate</p>
                </a>

                <Link to={{
                    pathname: '/' + artwork.slug,
                    slug: artwork.slug
                  }}>
                  <img
                    className={this._artworkImageClasses(artwork.id)}
                    id={artwork.id}
                    src={artwork.thumbnailUrl}
                    alt={artwork.title.rendered}
                  />
                </Link>

                <p>{artwork.name} . {artwork.complementaryArtworkYear}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

  _mapArtLink(city, index) {
    this.props.store.currentArtwork = city;
    let scrollDistance = index * 130;
    this.refs.artworkListDiv.scrollTo({ top: 0, left: scrollDistance, behavior: 'smooth'});
  }

  _findArtOnMap(longetude, latatude, city) {
    this.props.store.mapCenter = {lat: latatude, lng: longetude};
    this.props.store.currentArtwork = city;
  }

  _artworkImageClasses(cityID) {
    if (this.props.store.currentArtwork === cityID) {
      return 'artwork-map-image artwork-map-image-selected';
    } else {
      return 'artwork-map-image';
    }
  }

  _focusArtwork(locationID) {
    if (this.props.store.currentArtwork === locationID) {
      return 'map-list-artwork map-art-focus';
    } else {
      return 'map-list-artwork';
    }
  }
}

export default ArtworkMap;
