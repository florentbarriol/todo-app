import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from 'react-md/lib/Lists/List';
import todo from '../';

class TodoList extends Component {

    render() {
        return (
            <div className="todos md-grid">
                <List className="md-cell md-paper md-paper--1">
                    {this.props.todos.sortBy(v => {v.get('insertion')}).entrySeq().map(([key, value]) => {
                        return (
                            <todo.components.TodoListEntry
                                key={key}
                                valeur={value}
                                cle={key}
                            />
                        );
                    })}
                </List>
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: ImmutablePropTypes.map
};

export default TodoList;