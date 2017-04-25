import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { CATEGORY_CONSTANTS } from 'config/category.constants';
import * as reducers from 'reducers';

import './app.scss';

import Home from 'views/home/home';
import Details from 'views/details/details';
import ProductList from 'components/product-list/product-list';
import NotFound from 'components/not-found/not-found'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  {},
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

const routes = (
  <Route>
    <Route exact path='/' component={Home} />
    <Route path='/:category' component={ProductList} >
      <Route path=':id' component={Details} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

const app = () => {
  return (
    <Provider store={store}>
      <Router
        onUpdate={() => window.scrollTo(0, 0)}
        history={browserHistory}
        routes={routes}
        key={Math.random()}>
      </Router>
    </Provider>
  );
};

export default app;