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
    this.refs.artworkListDiv.scrollTo({ top: 0, left: this.props.store.scrollDistance, behavior: 'smooth'});
  }

  componentDidUpdate() {
    this.refs.artworkListDiv.scrollTo({ top: 0, left: this.props.store.scrollDistance, behavior: 'smooth'});
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
                <div className="map-pointer" onClick={this._mapArtLink.bind(this, art.id, i)}>
                  <svg style={{fill: this.props.store.randomColor()}} width="15px" height="22px" viewBox="0 0 15 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="7.5" cy="7.23214286" rx="1.60714286" ry="1.60714286" />
                      <path d="M7.5,21.8035714 L7.92857143,21.2142857 C8.22321429,20.8125 15,11.4642857 15,7.5 C15,3.375 11.625,0 7.5,0 C3.375,0 0,3.375 0,7.5 C0,11.4642857 6.77678571,20.8125 7.07142857,21.2142857 L7.5,21.8035714 Z M4.82142857,7.23214286 C4.82142857,5.75892857 6.02678571,4.55357143 7.5,4.55357143 C8.97321429,4.55357143 10.1785714,5.75892857 10.1785714,7.23214286 C10.1785714,8.70535714 8.97321429,9.91071429 7.5,9.91071429 C6.02678571,9.91071429 4.82142857,8.70535714 4.82142857,7.23214286 Z"/>
                  </svg>
                  <Link to={{
                      pathname: '/' + art.slug,
                      slug: art.slug
                    }}
                    className={this._markerPopUp(art.id)}
                    >
                    <img src={art.thumbnailUrl} alt={art.title.rendered} />
                  </Link>
                </div>
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
    this.props.store.scrollDistance = index * 130;
    this.refs.artworkListDiv.scrollTo({ top: 0, left: this.props.store.scrollDistance, behavior: 'smooth'});
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

  _markerPopUp(currentArtworkID) {
    if (this.props.store.currentArtwork === currentArtworkID) {
      return 'marker-pop-up marker-pop-up-on';
    } else {
      return 'marker-pop-up';
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
