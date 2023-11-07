/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';


export default class App extends Component {
  state = {
    displayValue: '0'
  }

  addDigit = n => {
    this.setState({
        displayValue: n
      }
    )
  }

  clearMemory = () => {
    this.setState ({
        displayValue: '0'
      }
    )
  }
  
  setOperation = operation => {
    // this.setState ({
    //     displayValue: '0'
    //   }
    // )
  }


  render() {
    return (
      <>
        <SafeAreaView>
          <View style={styles.container}>
            <Display value={this.state.displayValue} />
            <View style={styles.buttons}>
              <Button label='AC' triple onClick={this.clearMemory} />
              <Button label='/' operation onClick={this.setOperation} />
              <Button label='7' onClick={this.addDigit} />
              <Button label='8' onClick={this.addDigit} />
              <Button label='9' onClick={this.addDigit} />
              <Button label='*' operation onClick={this.setOperation} />
              <Button label='4' onClick={this.addDigit} />
              <Button label='5' onClick={this.addDigit} />
              <Button label='6' onClick={this.addDigit} />
              <Button label='-' operation onClick={this.setOperation} />
              <Button label='1' onClick={this.addDigit} />
              <Button label='2' onClick={this.addDigit} />
              <Button label='3' onClick={this.addDigit} />
              <Button label='+' operation onClick={this.setOperation} />
              <Button label='0' double onClick={this.addDigit} />
              <Button label='.' onClick={this.addDigit} />
              <Button label='=' operation onClick={this.setOperation} />
            </View>
          </View>
        </SafeAreaView>
      </>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

