/* Navigation Reducer
 * handles navigation states in the app
 */
import { NavigationActions } from 'react-navigation';
import Navigator from '@navigation';

const initialState = Navigator.router.getStateForAction(
    NavigationActions.init()
);

export default (state = initialState, action) => {
    const nextState = Navigator.router.getStateForAction(action, state);
    return nextState || action;
};
