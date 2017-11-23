import { createSelector } from 'reselect';
import { NAME } from './constants';

export const getLoading = state => state[NAME].loading;

export const getAll = state => state[NAME].todos;

export const getById = createSelector(
    [getAll, (state, id) => id],
    (todos, id) => todos.filter(todo => todo.get('key'))
)

export const getDone = createSelector(
    getAll,
    todos => todos.filter(t => t.get('done'))
);