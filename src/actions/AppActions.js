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
function removeTodo (id) {
    return {
        type: actionTypes.REMOVE_TODO,
        id
    }
}
function Undo (id) {
    return {
        type: actionTypes.UNDO,
        id
    }
}
// export {
//     addTodo,
//     completeTodo,
//     removeTodo
// };

export { addTodo, completeTodo, removeTodo, Undo }