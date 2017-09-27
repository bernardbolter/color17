import { observable, action } from 'mobx';
import axios from 'axios';

class Store {
  // Artowrk variables
  @observable artwork = [];
  @observable isLoading = false;
  // Navigation Variables
  @observable toggleAbout = false;
  @observable togglePrints = false;
  @observable toggleSearch = false;
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
}

export var storeData = new Store();
