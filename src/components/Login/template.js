import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

class FormTextInput extends Component {
  render() {
    return (
      <TextInput
        onChangeText={(txt) => this.props.onChange(txt)}
        editable={true}
        maxLength={40}
        style={styles.inputField}
        value={this.props.value}
      />
    );
  }
}

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.initialState = this.state
  }

  handleSubmit() {
    const { sendUserData } = this.props;
    try {
      sendUserData(this.state)
    } finally {
      this.resetForm()
    }
  }

  resetForm(){
    this.setState(this.initialState, () => {
      console.log(this.state, 'Resetting state')
    });
  }
  handleName(text) {
    this.setState({ userName: text })
  }

  handlePassword(text) {
    this.setState({ password: text })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputField}
          placeholder='Name'
          onChangeText={text => this.handleName(text)}
          value={this.state.userName}
        />
        <TextInput
          style={styles.inputField}
          placeholder='Password'
          onChangeText={text => this.handlePassword(text)}
          secureTextEntry={true}
          value={this.state.password}
        />
        <Button
          title="Login!"
          color="#841584"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua'
  },
  inputField: {
    borderRadius: 4,
    borderWidth: 0.5,
    width: 200,
    borderColor: 'red',
    color: 'black',
    height: 60
  }
});