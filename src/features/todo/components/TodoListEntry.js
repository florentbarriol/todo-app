import ImmutablePropTypes from 'react-immutable-proptypes';
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

        return (
            <ListItemControl
                rightIcon={chat}
                primaryAction={
                    <Checkbox
                        id={this.props.cle}
                        name="todos"
                        label={this.props.valeur.get('text')}
                        checked={this.props.valeur.get('done')}
                        onChange={this.onToggleClick.bind(this, this.props.cle, !this.props.valeur.get('done'))}
                    />
                }
            />
        );
    }
}

TodoListEntry.PropTypes = {
    valeur: ImmutablePropTypes.Map,
    cle: PropTypes.string.isRequired
};

export default connect()(TodoListEntry);