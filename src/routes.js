import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import * as components from './components';
import todo from './features/todo';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
};

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={ publicPath } component={ components.App }>
          <IndexRoute component={ components.HomePage } />
          <Route path="todos" component={todo.components.TodoPage} />
          <Route path='*' component={ components.NotFoundPage } />
        </Route>
      </Router>
    );
  }
}
