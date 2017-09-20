import { observable } from 'mobx';

class Store {
  // Navigation Variables
  @observable location = '';
  @observable openNewsletter = false;

}

export var storeData = new Store();
