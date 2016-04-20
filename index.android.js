/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HelloMessage name='medellinJS' />
        <Timer />
        <TodoApp/>
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

class TodoList extends Component{
  render() {
    var createItem = function(item) {
      return <Text key={item.id} style={styles.instructions}>{item.text}</Text>;
    };
    return <View>{this.props.items.map(createItem)}</View>;
  }
}

class TodoApp extends Component {
  constructor () {
    super();
    this.state = {
      items : [],
      text:''
    }
    
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  
  onChange(val) {
    this.setState({text: val});
  }
  
  onClick() {
    var nextItems = this.state.items.concat([{text:this.state.text, id: Date.now()}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  }
  
  render() {
    return (
      <View style={styles.todoList}>
        <Text>TODO</Text>
        <TodoList items={this.state.items} />
        <View>
          <TextInput
            onChangeText={this.onChange}
            value={this.state.text}
          />
          <Text onPress={this.onClick} style={styles.button}>Add</Text>
        </View>  
      </View>
    );
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
  },
  todoList: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AAAAAA',
  },
  button: {
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);