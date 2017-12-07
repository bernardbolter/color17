import { observable, action, computed } from 'mobx';
import axios from 'axios';
import _ from 'lodash';

class Store {
  // Artowrk variables
  @observable artwork = [];
  @observable art = { name: 'test name', title: {rendered: 'test render'}};
  @observable isLoading = false;
  // Navigation Variables
  @observable navMenuButton = false;
  @observable sanFranciscoChecked = false;
  @observable berlinChecked = false;
  @observable aboutButton = false;
  @observable printsButton = false;
  @observable switchButton = true;

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
  @observable currentArtwork = '';
  @observable singleArtwork = [];
  @observable scrollDistance = null;

  // Other Variables
  @observable currentCity = 'San Francisco';

  @action loadArtwork(slug) {
    console.log(slug);
    if (this.artwork.length > 0) {
      console.log('got art');
      if (slug) {
        const singlularDataObject = this.artwork.filter(x => x.slug === slug);
        for (var key in singlularDataObject[0]) {
            if (singlularDataObject[0].hasOwnProperty(key)) {
                this.art[key] = singlularDataObject[0][key];
            }
        }
      }
    } else {
    this.isLoading = true;
    axios.get('http://artwork.bernardbolter.com/wp-json/wp/v2/artwork?per_page=100')
      .then(results =>  {
        this.artwork = results.data.filter(art => art.series === 'ach');
        console.log(this.art);
        console.log(this.artwork);
        if (slug) {
          const singlularDataObject = results.data.filter(x => x.slug === slug);
          for (var key in singlularDataObject[0]) {
              if (singlularDataObject[0].hasOwnProperty(key)) {
                  this.art[key] = singlularDataObject[0][key];
              }
          }
        }
        console.log(this.art);
        this.isLoading = false;
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }

  @computed get filteredArt() {
    const matchesFilter = new RegExp(this.historyFilter, 'i');
    let artworkFiltered = this.artwork.filter(art => !this.historyFilter || matchesFilter.test(art.title.rendered) || matchesFilter.test(art.complementaryYear));
    let artworkSorted = [];
    let artworkCities = [];

    if (this.olderChecked === true) {
      artworkSorted = artworkFiltered.reverse();
    } else if (this.randomChecked === true) {
      artworkSorted = _.shuffle(artworkFiltered);
    } else {
      artworkSorted = artworkFiltered;
    }

    if (this.sanFranciscoChecked) {
      artworkCities = artworkSorted.filter(sf => sf.contentLocation === 'San Francisco');
    } else if (this.berlinChecked) {
      artworkCities = artworkSorted.filter(berlin => berlin.contentLocation === 'Berlin');
    } else if (this.sanFranciscoChecked && this.berlinChecked) {
      artworkCities = artworkSorted;
    } else {
      artworkCities = artworkSorted;
    }

    return artworkCities;
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

  @action randomColor = () => {
    let num = Math.floor(Math.random() * 9);
      if (num === 0) {
      return '#A41E22';
    } else if (num === 1) {
      return '#F09120';
    } else if (num === 2) {
      return '#E1B324';
    } else if (num === 3) {
      return '#869F66';
    } else if (num === 4) {
      return '#4DA446';
    } else if (num === 5) {
      return '#1D9F97';
    } else if (num === 6) {
      return '#3482AD';
    } else if (num === 7) {
      return '#3B5BA9';
    } else if (num === 8) {
      return '#674D8C';
    } else {
      return '#A41E22';
    }
  }
}

export var storeData = new Store();
