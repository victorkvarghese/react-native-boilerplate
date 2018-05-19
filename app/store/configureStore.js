import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '@reducers'; // where reducers is a object of reducers
import sagas from '@sagas';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

const config = {
    key: 'root',
    storage,
    blacklist: ['nav', 'loadingReducer'],
    debug: true //to get useful logging
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
    middleware.push(createLogger());
}

const reduxMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);
const addListener = createReduxBoundAddListener('root');
middleware.push(reduxMiddleware);

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
    //   console.log('Test', store.getState());
});
const configureStore = () => {
    return { persistor, store, addListener };
};

sagaMiddleware.run(sagas);

export default configureStore;
