import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'babel-polyfill';
import { AppContainer } from 'react-hot-loader';

import logger from 'logger/logger';
import rootReducer from 'rootReducer';
import Routes from 'routes';

// Load SCSS
import './app.scss';

// Local momentJs
moment.locale('fr');

const isProduction = process.env.NODE_ENV === 'production';

// Creating store
let store = null;

if (isProduction) {
  // In production adding only thunk middleware
  const middleware = applyMiddleware(thunk);

  store = createStore(
    rootReducer,
    middleware
  );
} else {
  // In development mode beside thunk
  // logger and DevTools are added
  const middleware = applyMiddleware(thunk, logger);
  let enhancer;

  // Enable DevTools if browser extension is installed
  if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
    enhancer = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    );
  } else {
    enhancer = compose(middleware);
  }


  store = createStore(
    rootReducer,
    enhancer
  );
}

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Routes />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

// Render it to DOM
render(Routes);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(Routes);
  });
}
