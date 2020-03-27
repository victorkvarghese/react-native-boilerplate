/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './app/Entrypoint';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';
enableScreens();

AppRegistry.registerComponent(appName, () => App);
