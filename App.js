/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, StatusBar } from  'react-native';
import RootDrawerNav from './src/navigator/rootDrawerNav'
import RootTabNav from './src/navigator/rootTabNav'

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }
  // translucent 设置为true时，应用会延伸到状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）
  render() {
    return (
      <View style={{flex: 1}}>
  <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <RootDrawerNav/>
      </View>
  );
  }
}


