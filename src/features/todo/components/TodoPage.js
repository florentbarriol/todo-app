import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import todo from '../';

class TodoPage extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(todo.actions.getTodos());
        todo.actions.watchTodoAddedEvent(dispatch);
    }

    render() {
        const { todos, loading } = this.props;
        return (
            <div className='todo-page'>
                <todo.components.TodoList
                    todos={todos}
                    loading={loading}
                />
                <todo.components.TodoForm />
            </div>
        );
    }
}

TodoPage.propTypes = {

};

const mapStateToProps = state => {
    return {
        todos: todo.selectors.getAll(state),
        loading: todo.selectors.getLoading(state)
    }
};

export default connect(mapStateToProps)(TodoPage);