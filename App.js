/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View style="{{style}}">
        <Text>Hello, World</Text>
      </View>
    );
  }
}

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
};
