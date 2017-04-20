import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { CATEGORY_CONSTANTS } from 'config/category.constants';
import reducers from 'reducers';

import './app.scss';

import Home from 'views/home/home';
import MensOutwear from 'views/mens-outerwear/mens-outerwear';
import MensTshirts from 'views/mens-tshirts/mens-tshirts';
import LadiesOutwear from 'views/ladies-outerwear/ladies-outerwear';
import LadiesTshirts from 'views/ladies-tshirts/ladies-tshirts';

const store = createStore(
  combineReducers({
    reducers,
  }),
  applyMiddleware(thunk)
);

const routes = (
  <Route>
    <Route exact path='/' component={Home} />
    <Route path={CATEGORY_CONSTANTS.MENS_OUTERWEAR} component={MensOutwear} />
    <Route path={CATEGORY_CONSTANTS.MENS_TSHIRTS} component={MensTshirts} />
    <Route path={CATEGORY_CONSTANTS.LADIES_OUTERWEAR} component={LadiesOutwear} />
    <Route path={CATEGORY_CONSTANTS.LADIES_TSHIRTS} component={LadiesTshirts} />
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