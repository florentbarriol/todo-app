import React, { Component } from 'react';
import { connect } from 'react-redux';
import todo from '../';
import PropTypes from 'prop-types';
import ListItemControl from 'react-md/lib/Lists/ListItemControl';
import Checkbox from 'react-md/lib/SelectionControls/Checkbox';
import FontIcon from 'react-md/lib/FontIcons';

class TodoListEntry extends Component {

    onDeleteClick(id) {
        this.props.dispatch(todo.actions.removeTodo(id));
    }
    onToggleClick(id, done) {
        this.props.dispatch(todo.actions.toggleTodo(id, done));
    }

    render() {

        const chat = <FontIcon key="chat">chat</FontIcon>;
        const { todo, cle } = this.props;
        return (
            <ListItemControl
                rightIcon={chat}
                primaryAction={
                    <Checkbox
                        id={cle}
                        name="todos"
                        label={todo.text}
                        checked={todo.done}
                        onChange={this.onToggleClick.bind(this, cle, !todo.done)}
                    />
                }
            />
        );
    }
}

TodoListEntry.PropTypes = {
    todo: PropTypes.object.isRequired,
    cle: PropTypes.string.isRequired
};

export default connect()(TodoListEntry);