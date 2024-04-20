/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import LoginScreen from './src/LoginScreen';
import SchoolScreen from './src/SchoolScreen';
import OnlineClass from './src/OnlineClass';
import HomeScreen from './src/HomeScreen';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => LoginScreen);
// AppRegistry.registerComponent(appName, () => HomeScreen);
AppRegistry.registerComponent(appName, () => SchoolScreen);
// AppRegistry.registerComponent(appName, () => OnlineClass);
