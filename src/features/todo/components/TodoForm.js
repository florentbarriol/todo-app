import { connect } from 'react-redux';
import React, { Component } from 'react';
import todo from '../';
import PropTypes from 'prop-types';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            message: ''
        }
    }

    onSubmit(event) {
        event.preventDefault();
        if (!this.state.value) {
            this.setState({ message: 'Veuillez saisir une note.' });
        } else {
            this.props.dispatch(todo.actions.addTodo(this.state.value));
            this.setState({
                message: 'Bravo ! Votre note a été enregistrée.',
                value: ''
            });
            setTimeout(() => {
                this.setState({
                    message: ''
                });
            }, 5000);
        }
    }
    onChangeInput(value, event) {
        this.setState({ value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)} >
                <div className="form-group">
                    <TextField
                        id="todo"
                        label="Votre note..."
                        customSize="title"
                        className="md-cell md-cell--12"
                        onChange={this.onChangeInput.bind(this)}
                        value={this.state.value}
                        required
                    />
                    <Button
                        raised
                        label="Enregistrer"
                        type="submit"
                    />
                </div>
                <p>{this.state.message}</p>
            </form>
        );
    }
}

TodoForm.propTypes = {

};

export default connect()(TodoForm);