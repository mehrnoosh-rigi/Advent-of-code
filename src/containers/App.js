import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import * as todoActions from '../actions/AppActions';
import AddTodoForm from '../components/Forms/AddTodo';
import Listing from '../components/Listing';

const addTodoSubmitAction = (values, dispatch) => {
    dispatch(todoActions.addTodo(values.todo));
    dispatch(reset('addTodo'));
};

class App extends Component {

    render () {
        const { dispatch, app } = this.props;

        return (
            <div id="main-container" className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <AddTodoForm submitAction={addTodoSubmitAction}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <h2>What I have to do?</h2>
                        <Listing items={app.todo}
                                 customClass="todo"
                                 onItemClick={(id) => dispatch(todoActions.completeTodo(id))}
                                 noItemsMessage="Nothing to do at the moment"
                        />
                    </div>
                </div>

                {
                    app.done.length > 0 &&
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>This stuff is done!</h2>
                            <Listing items={app.done}
                                     customClass="done"
                            />

                        </div>
                    </div>
                }
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func,
    app: PropTypes.object
};

function mapStateToProps (state) {
    return {
        app: state.app
    };
}

export default connect(mapStateToProps)(App);
