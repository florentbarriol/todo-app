import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import todo from '../';

class TodoPage extends Component {

    componentWillMount(){
        this.props.dispatch(todo.actions.getTodos());
        todo.actions.watchTodoAddedEvent(this.props.disaptch);
    }

    render() {
        return (
            <div className='todo-page'>
                <todo.components.TodoList todos={this.props.todos} />
                <todo.components.TodoForm />
            </div>
        );
    }
}

TodoPage.propTypes = {

};

export default connect(state => state[todo.constants.NAME])(TodoPage);