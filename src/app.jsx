import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import './app.scss';

import reducers from 'reducers';

import Home from 'views/home/home';
import MensOutwear from 'views/mens-outerwear/mens-outerwear';
import MensTshirts from 'views/mens-tshirts/mens-tshirts';
import LadiesOutwear from 'views/ladies-outerwear/ladies-outerwear';
import LadiesTshirts from 'views/ladies-tshirts/ladies-tshirts';

const store = createStore(
  combineReducers({
    reducers,
  }),
);

const routes = (
  <Route>
    <Route exact path='/' component={Home} />
    <Route path='/mens-outerwear' component={MensOutwear} />
    <Route path='/mens-tshirts' component={MensTshirts} />
    <Route path='/ladies-outerwear' component={LadiesOutwear} />
    <Route path='/ladies-tshirts' component={LadiesTshirts} />
  </Route>
);

const app = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} key={Math.random()}>
      </Router>
    </Provider>
  );
};

export default app;