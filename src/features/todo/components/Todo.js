
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {

  render() {
    return (
      <div className='app'>
        <Menu />

        <div className='page'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

Todo.propTypes = {

};

export default Todo;