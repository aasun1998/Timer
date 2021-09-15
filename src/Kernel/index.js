import React,{Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from '../../src/configureStore';
import App from '../../src/components/HomeScreen/index';

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
const store = configureStore();

class Kernel extends Component {
  render() {
    return (
     <View style={{flex:1,backgroundColor :'black'}}>
     <Provider store={store}>
    <App />
  </Provider>

     </View>
    );
  }
}

export default Kernel;