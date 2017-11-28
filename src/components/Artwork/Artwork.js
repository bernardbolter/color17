// @flow

import React, { Component } from 'react';
import { observer, inject} from 'mobx-react';
import _ from 'lodash';

import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

import Art from './../Art/Art.js';

import './Artwork.sass';

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYmVtYWpvciIsImEiOiJjamFpamZpZnMxdmxpMnFsZGR3NGp0eTkwIn0.1UOGppfTHCtl0yA5lgrqKw"
});

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
                <div className="map-art">
                  <img src={art.thumbnailUrl} alt={art.title.rendered}/>
                  <p>{art.name} . {art.complementaryArtworkYear}</p>
                </div>
                <div className="map-point"></div>
              </Marker>
            ))
          }
          </Map>
        </div>
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
