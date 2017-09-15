import { expect } from 'chai';
import utils from '../utils';
import initState from '../../src/reducers/initState';
import * as actionTypes from '../../src/constants/ActionTypes';

import app from '../../src/reducers/app';

const initialState = initState.app;

describe('[REDUCER] app', () => {
    let state = utils.deepFreeze(app());

    it('start with empty todo', () => {
        expect(state.todo.length).to.equal(0);
    });

    it('start with empty done', () => {
        expect(state.done.length).to.equal(0);
    });

    it('should add a todo', () => {
        state = app(state, {
            type: actionTypes.ADD_TODO,
            todo: 'test'
        });
        expect(state.todo.length).to.equal(1);
        expect(state.todo[0].id).to.equal(1);
        expect(state.todo[0].label).to.equal('test');
    });

    it('should complete a todo', () => {
        state = app(state, {
            type: actionTypes.COMPLETE_TODO,
            id: 1
        });

        expect(state.todo.length).to.equal(0);
        expect(state.done.length).to.equal(1);
        expect(state.done[0].id).to.equal(1);
        expect(state.done[0].label).to.equal('test');
    });
});
