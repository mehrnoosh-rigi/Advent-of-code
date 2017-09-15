import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from '../routes';
import DevTools from './DevTools';

class Root extends Component {
    render () {
        const { store, history } = this.props;

        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes} />
                    <DevTools />
                </div>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.any.isRequired,
    history: PropTypes.any.isRequired
};

export default Root;
