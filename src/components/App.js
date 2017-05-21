import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationDrawer } from 'react-md';
//https://react-md.mlaursen.com/components/navigation-drawers?tab=1
class App extends Component {

  render() {

    return (
      <NavigationDrawer
        drawerTitle="Menu"
        toolbarTitle="Todos"
        className="app"
      >
        {this.props.children}
      </NavigationDrawer>
    );
  }

}

App.PropTypes = {
  children: PropTypes.object,
}

export default App;