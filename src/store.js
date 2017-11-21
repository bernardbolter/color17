import { observable, action } from 'mobx';
import axios from 'axios';

class Store {
  // Artowrk variables
  @observable artwork = [];
  @observable isLoading = false;
  // Navigation Variables
  @observable navMenuButton = false;
  @observable sanFranciscoButton = false;
  @observable berlinButton = false;
  @observable aboutButton = false;
  @observable printsButton = false;
  @observable switchButton = false;

  @observable toggleSorting = false;
  @observable randomChecked = true;
  @observable olderChecked = false;
  @observable newerChecked = false;
  @observable historyFilter = '';

  @action loadArtwork() {
    this.isLoading = true;
    function isColorHistory(art) {
      console.log(art.series);
      return art.series === 'ach';
    }
    axios.get('http://artwork.bernardbolter.com/wp-json/wp/v2/artwork?per_page=100')
      .then(results =>  {
        this.artwork = results.data.filter(art => art.series === 'ach');
        console.log(results.data);
        this.isLoading = false;
      })
      .catch(function (error) {
        console.log(error);
      });
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
}

export var storeData = new Store();
