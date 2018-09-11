/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import loginUser from 'app/api/methods/loginUser';
import * as loginActions from 'app/actions/loginActions';
// import * as navigationActions from '@actions/navigationActions';

//selector Function used to access reducer states
export const getNetworkState = state => {
    return {
        isConnected: state.network.isConnected
    };
};

// Our worker Saga that logins the user
export default function* loginAsync(action) {
    // yield put(loginActions.enableLoader());
    // try {
    //     const response = yield call(
    //         loginUser,
    //         action.username,
    //         action.password
    //     );
    //     if (response.success) {
    //         yield put(loginActions.onLoginResponse(response.data));
    //         yield put(loginActions.disableLoader({}));
    //         yield put(navigationActions.navigateToHomeScreen({}));
    //     } else {
    //         yield put(loginActions.loginFailed());
    //         yield put(loginActions.disableLoader({}));
    //         setTimeout(() => {
    //             Alert.alert('Vlenza', response.Message);
    //         }, 200);
    //     }
    // } catch (error) {
    //     yield put(loginActions.loginFailed());
    //     yield put(loginActions.disableLoader({}));
    //     setTimeout(() => {
    //         Alert.alert('Vlenza', 'failed');
    //     }, 200);
    // }
}
