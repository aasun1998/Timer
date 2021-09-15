import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, Text, StyleSheet,TouchableOpacity,  StatusBar} from 'react-native';

import { connect } from 'react-redux';
import { startTimerBtn, stopTimerBtn, resetTimerBtn } from '../../actions/home';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    margin: '10%',
    
  },
  timer: {
    margin: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize:30
  },
  button: {
    // height: 60,
    // margin: 10,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton1: {
    
    width: 100,
    height: 100,
    margin: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  
  buttonText: {
    color: 'white',
  },
  startbutonColor: {
    backgroundColor: 'black',
  },
  stopbutonColor: {
    backgroundColor: '#999',
  },
});

const App = (props) => {
  const {
    container,
    button,
    stopbutonColor,
    timer,
  } = styles;

  function pad(time) {
    const strTime = `${time}`;
    if (strTime.length < 2) {
      return `0${strTime}`;
    }
    return strTime;
  }

  return (
    <View style={container}>
          <StatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true} />

      
      <Text style={timer}>
        { pad(parseInt(props.homeData.totalTime / 600, 10)) }
        :
        { pad(parseInt(props.homeData.totalTime / 10, 10) % 60) }
        :
        { pad(props.homeData.totalTime % 10) }
      </Text>
      
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity
        onPress={() => props.startTimerBtn()}
        style={styles.roundButton1}>
        <Text>Start</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={[button, stopbutonColor]}
        onPress={() => props.stopTimerBtn()}
        style={styles.roundButton1}>
        <Text>Stop</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={[button, stopbutonColor]}
        onPress={() => props.resetTimerBtn()}
        style={styles.roundButton1}>
        <Text>Reset</Text>
      </TouchableOpacity>
      {/* <Text style={text}> Using Redux Timer Is Made  By Aasann kr Tiwari</Text> */}
    </View>
  );
};

App.propTypes = {
  startTimerBtn: PropTypes.func.isRequired,
  stopTimerBtn: PropTypes.func.isRequired,
  resetTimerBtn: PropTypes.func.isRequired,
  homeData: PropTypes.shape({
    timerRunning: PropTypes.bool.isRequired,
    totalTime: PropTypes.number.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    homeData: state.homeData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimerBtn: () => dispatch(startTimerBtn()),
    stopTimerBtn: () => dispatch(stopTimerBtn()),
    resetTimerBtn: () => dispatch(resetTimerBtn()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
