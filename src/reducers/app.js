import initState from './initState';
import * as actionTypes from '../constants/ActionTypes';

function app (state = initState.app, action = {}) {
    switch (action.type) {
        case actionTypes.ADD_TODO : {
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {
                        id: state.todo.length + 1,
                        label: action.todo
                    }]
            }
        }

        case actionTypes.COMPLETE_TODO : {
            const item = state.todo.filter(item => item.id === action.id).pop();
            return {
                ...state,
                todo: state.todo.filter(item => item.id !== action.id),
                done: [
                    ...state.done,
                    { ...item }
                ]
            }
        }

        default : {
            return state;
        }

    }
}

export default app;
