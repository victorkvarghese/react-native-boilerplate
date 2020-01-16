/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Entrypoint from './app/Entrypoint';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Entrypoint);
