/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HelloMessage name='medellinJS' />
        <Timer />
      </View>
    );
  }
}

class HelloMessage extends Component {
  render() {
    return (
      <Text>
          Hola {this.props.name}!
      </Text>
    )
  }
}

class Timer extends Component {
  constructor() {
    super();
    this.state = { secondsElapsed: 0 };
    this.tick = this.tick.bind(this);
  }
  
  tick () {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }
  
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (<Text>Seconds Elapsed: {this.state.secondsElapsed}</Text>)
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
