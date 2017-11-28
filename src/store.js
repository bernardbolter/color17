import { observable, action, computed } from 'mobx';
import axios from 'axios';
import _ from 'lodash';

class Store {
  // Artowrk variables
  @observable artwork = [];
  @observable isLoading = false;
  // Navigation Variables
  @observable navMenuButton = false;
  @observable sanFranciscoChecked = false;
  @observable berlinChecked = false;
  @observable aboutButton = false;
  @observable printsButton = false;
  @observable switchButton = false;

  @observable toggleSorting = false;
  @observable randomChecked = true;
  @observable olderChecked = false;
  @observable newerChecked = false;
  @observable historyFilter = '';
  @observable closeFilterButton = false;
  @observable searchMessage = '';
  @observable noArtwork = false;

  // Map Variables
  @observable mapCenter = {lat: 37.800174, lng: -122.415987};
  @observable mapZoom = [11];

  // Other Variables
  @observable currentCity = 'San Francisco';

  @action loadArtwork() {
    this.isLoading = true;
    axios.get('http://artwork.bernardbolter.com/wp-json/wp/v2/artwork?per_page=100')
      .then(results =>  {
        this.artwork = results.data.filter(art => art.series === 'ach');
        console.log(this.artwork);
        this.isLoading = false;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  @computed get filteredArt() {
    const matchesFilter = new RegExp(this.historyFilter, 'i');
    let artworkFiltered = this.artwork.filter(art => !this.historyFilter || matchesFilter.test(art.title.rendered) || matchesFilter.test(art.complementaryYear));
    let artworkSorted = [];

    if (this.olderChecked === true) {
      artworkSorted = artworkFiltered.reverse();
    } else if (this.randomChecked === true) {
      artworkSorted = _.shuffle(artworkFiltered);
    } else {
      artworkSorted = artworkFiltered;
    }

    return artworkSorted;
  }

  @action toggleNavMenu = () => {
    this.navMenuButton = !this.navMenuButton;
    console.log('show nav menu');
  }

  @action toggleSF = () => {
    this.sanFranciscoButton = !this.sanFranciscoButton;
    console.log('show sf');
  }

  @action toggleBerlin = () => {
    this.berlinButton = ! this.berlinButton;
    console.log('show berlin');
  }

  @action toggleAbout = () => {
    this.aboutButton = !this.aboutButton;
    console.log('show about');
  }

  @action togglePrints = () => {
    this.printsButton = !this.printsButton;
    console.log('show prints');
  }

  @action toggleSwitch = () => {
    this.switchButton = !this.switchButton;
    console.log('show switch');
  }

  @action toggleCloseFilter = () => {
    this.closeFilterButton = !this.closeFilterButton;
  }
}

export var storeData = new Store();
