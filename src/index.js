import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';

import Nav from './components/Nav/Nav';

import { storeData } from './store';

import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { Router, Route } from 'react-router-dom';
import { RouterStore } from 'mobx-react-router';

import Artwork from './components/Artwork/Artwork';
import registerServiceWorker from './registerServiceWorker';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  store: storeData
}

const Root = () => {
  return (
    <Provider {...stores}>
      <Router history={browserHistory}>
        <div className="container">
          <Nav />
          <Route exact path="/" component={Artwork} />
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
