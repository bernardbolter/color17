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
    console.log(this.props.store.mapListWidth);
  }

  componentDidUpdate() {
    this.props.store.mapListWidth = this.refs.artworkListDiv.scrollWidth;
    console.log(this.props.store.mapListWidth);
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
            {this.props.store.filteredArt.slice().map(art => (
              <Marker
                key={art.id}
                coordinates={{lng: art.artEdition, lat: art.contributor}}
                anchor="bottom">
                <a className="map-pointer" onClick={this._mapArtLink.bind(this, art.id)}>
                  <svg width="15px" height="23px" viewBox="0 0 15 23" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5,0 L7.5,0 C1.72230549,0 -1.86923434,6.24615623 1.01961292,11.2430812 L7.5,22.4861624 L13.9803871,11.2430812 C16.8692343,6.24615623 13.2776945,0 7.5,0 Z M7.5,11.2430812 L3.88243452,4.99692498 L11.0915398,4.99692498 L7.5,11.2430812 Z" />
                  </svg>
                </a>
              </Marker>
              ))
            }
          </Map>
        </div>
        <div ref="artworkListDiv" className="artwork-map-list">
          {this.props.store.filteredArt.slice().map(artwork => (
              <div className="map-list-artwork" key={artwork.id}>
                <a
                  onClick={this._findArtOnMap.bind(this, artwork.artEdition, artwork.contributor, artwork.id)}
                  className={this._hideLocationButton(artwork.id)}
                >
                  <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5,0 C3.35784314,0 0,3.35784314 0,7.5 C0,11.6421569 3.35784314,15 7.5,15 C11.6421569,15 15,11.6421569 15,7.5 C15,3.35784314 11.6421569,0 7.5,0 Z M10.7407407,4.775651 L7.8939724,11.3030397 C7.852604,11.3979666 7.75897396,11.4585279 7.65639589,11.4585279 C7.65081959,11.4585279 7.64537296,11.4585279 7.63979666,11.4580091 C7.5308642,11.4510063 7.43788256,11.3766988 7.40727773,11.2716568 L6.61492375,8.55975724 L3.90302417,7.76740326 C3.79824152,7.73679842 3.72393402,7.64381679 3.71693122,7.53501401 C3.70992842,7.42595186 3.77204586,7.32441125 3.87203029,7.28083826 L10.3992893,4.43419961 C10.4970692,4.39179375 10.6107999,4.41293184 10.6862745,4.48853616 C10.7617491,4.56388111 10.7832763,4.67787115 10.7407407,4.775651 Z" />
                  </svg>
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

                <div className="artwork-map-list-text">
                  <p>{artwork.name} . {artwork.complementaryArtworkYear}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

  _mapArtLink(city) {
    this.props.store.currentArtwork = city;
    this.refs.artworkListDiv.scroll(2000, 0);
    console.log(this.refs.artworkListDiv);
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

  _hideLocationButton(locationID) {
    if (this.props.store.currentArtwork === locationID) {
      return 'location-button location-button-hide';
    } else {
      return 'location-button';
    }
  }
}

export default ArtworkMap;
