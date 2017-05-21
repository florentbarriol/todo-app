import { fromJS } from 'immutable';
import makeActionCreator from '../../utils/actionCreators';
import * as actionTypes from './actionTypes';
import database from '../../database';
import moment from 'moment';

const fetchLoadingTodo = makeActionCreator(actionTypes.FETCH_LOADING_TODO);
const fetchSuccessTodo = makeActionCreator(actionTypes.FETCH_SUCCESS_TODO, 'todos');
const fetchErrorTodo = makeActionCreator(actionTypes.FETCH_ERROR_TODO);

export function getTodos() {
    return dispatch => {
        dispatch(fetchLoadingTodo());
        return database.ref('/todos').once('value', snap => {
            const todos = fromJS(snap.val());
            dispatch(fetchSuccessTodo(todos));
        }).catch((error) => {
            console.log(error);
            dispatch(fetchErrorTodo());
        });
    }
}

export function addTodo(text) {
    return dispatch => {
        dispatch(fetchLoadingTodo());
        const todosRef = database.ref('/todos');
        todosRef.push({
            text,
            done: false,
            insertion: moment().format()
        }).then(() => {
            dispatch(getTodos());
        }).catch((error) => {
            console.log(error);
            dispatch(fetchErrorTodo());
        });
    }
}

export function removeTodo(id) {
    return dispatch => {
        dispatch(fetchLoadingTodo());
        const todosRef = database.ref('/todos');
        todosRef.child(id).remove(() => {
            dispatch(getTodos());
        })
    }
}

export function toggleTodo(id, done) {
    return dispatch => {
        dispatch(fetchLoadingTodo());
        const todosRef = database.ref('/todos');
        todosRef.child(id).update({
            done: done
        }).then(() => {
            dispatch(getTodos());
        }).catch((error) => {
            console.log(error);
            dispatch(fetchErrorTodo());
        });
    }
}

export function watchTodoAddedEvent() {
    return dispatch => {
        database.ref('/todos').on('child_added', (snap) => {
            dispatch(getTodos());
        })
    }
}