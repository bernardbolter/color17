import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';

import Nav from './components/Nav/Nav';

import { storeData } from './store';

import { createHistory } from 'history';

import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import Home from './components/Home/Home';
import Link from './components/Link/Link';
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
          <Route exact path="/" component={Home} />
          <Route path="/link" component={Link} />
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
