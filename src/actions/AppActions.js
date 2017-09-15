import * as actionTypes from '../constants/ActionTypes';

function addTodo (todo) {
    return {
        type: actionTypes.ADD_TODO,
        todo
    }
}

function completeTodo (id) {
    return {
        type: actionTypes.COMPLETE_TODO,
        id
    }
}

export {
    addTodo,
    completeTodo
};
