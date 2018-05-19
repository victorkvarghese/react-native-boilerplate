/**
 * Vlenza React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from '@navigation';
import configureStore from '@store/configureStore';
const { persistor, store, addListener } = configureStore();

const onBeforeLift = () => {
    // take some action before the gate lifts
};

const App = ({ dispatch, nav }) => (
    <Navigator
        navigation={{
            dispatch,
            state: nav,
            addListener
        }}
    />
);

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    nav: state.nav
});
const AppWithNavigation = connect(mapStateToProps)(App);

export default class Entrypoint extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator />}
                    onBeforeLift={onBeforeLift}
                    persistor={persistor}
                >
                    <AppWithNavigation />
                </PersistGate>
            </Provider>
        );
    }
}
