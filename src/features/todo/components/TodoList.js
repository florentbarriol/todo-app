import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from 'react-md/lib/Lists/List';
import todoFeature from '../';

class TodoList extends Component {

    renderLoading() {
        return <div>Loading...</div>;
    }

    renderList(todos) {
        return <div className="todos md-grid">
            <List className="md-cell md-paper md-paper--1">
                {Object.entries(todos).map(([key, todo]) => {
                    return (
                        <todoFeature.components.TodoListEntry
                            key={key}
                            todo={todo}
                            cle={key}
                        />
                    );
                })}
            </List>
        </div>;
    }

    render() {
        const { todos, loading } = this.props;
        if(loading){
            return this.renderLoading();
        } else {
            return this.renderList(todos);
        }
    }
}

TodoList.propTypes = {
    todos: PropTypes.object,
    loading: PropTypes.bool
};

export default TodoList;