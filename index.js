

import {AppRegistry, LogBox} from 'react-native';
import Kernel from './src/Kernel';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs(true)
AppRegistry.registerComponent(appName, () => Kernel);




