
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { defaultNavigationOptions } from './config';

import MsgCenter from '../views/msgCenter/msgCenterView'
import CFunction from '../views/otherFunction/cFunctionView'

const StackNavigator = createStackNavigator(
  {
    MsgCenter,
    CFunction,
  },
  {
    // 设置 stack navigator 的默认页面， 必须是路由配置中的某一个
    initialRouteName: 'MsgCenter',
    navigationOptions: ({ navigation }) => {
      return {
        ...defaultNavigationOptions,
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../res/back.png')} style={{ width: 28, height: 22, margin: 10 }} />
          </TouchableOpacity>
        ),
        headerRight: <View/>,
      }
    }
  }
);

StackNavigator.navigationOptions = ({ navigation }) => {
  console.log('mainStackNav index：' + navigation.state.index);
  return {
    tabBarVisible: navigation.state.index === 0,
  };
};

export default StackNavigator;
