/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import nav from './nav';
export default Object.assign(loginReducer, loadingReducer, { nav });
