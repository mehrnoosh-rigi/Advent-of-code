import { expect } from 'chai';

import * as actions from '../../src/actions/AppActions';
import * as actionTypes from '../../src/constants/ActionTypes';

describe('[ACTIONS] AppActions', () => {
    it('has to add a todo', () => {
        const expectedAction = {
            type: actionTypes.ADD_TODO,
            todo: "test"
        };
        expect(actions.addTodo('test')).to.deep.equal(expectedAction);
    });

    it('has to complete a todo', () => {
        const expectedAction = {
            type: actionTypes.COMPLETE_TODO,
            id: 1
        };
        expect(actions.completeTodo(1)).to.deep.equal(expectedAction);
    });
});
